import { connectToDB } from "../DatabaseCon/index.js";
import { SuccessResponse, FailureResponse } from "../utilities/index.js";
import { INSERT_PATH, INSERT_SKILL, INSERT_STEP } from "../Models/roadmap-model-db.js";
import openai from "openai";
import axios from 'axios';

const pool = connectToDB();

export const generateRoadmap = async (PathName) => {
    try {
        const prompt = `Generate a roadmap for becoming a ${PathName}. Return the response in valid JSON format with the following structure:
        {
            "steps": [
                {
                    "name": "Step Name",
                    "skills": [
                        { "name": "Skill Name" }
                    ]
                }
            ]
        }`;

        const completion = await axios.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }],
            temperature: 0.7
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}` 
            }
        });

        const roadmapText = completion.data.choices[0].message.content;

        try {
            JSON.parse(roadmapText);
            return roadmapText;
        } catch (jsonError) {
            console.error("Invalid JSON received from OpenAI:", roadmapText);
            throw new Error("Invalid JSON format received from OpenAI");
        }
    } catch (error) {
        console.error("Error generating roadmap:", error);
        throw new Error(`Error generating roadmap: ${error.message}`);
    }
};
export const createPath = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = req.user?.userId;

        if (!name) {
            return FailureResponse(res, 'Please provide path', null, 404);
        }
        if (!userId) {
            return FailureResponse(res, 'User not authenticated', null, 404);
        }

        // Convert callback-based query to Promise
        const insertPath = () => {
            return new Promise((resolve, reject) => {
                pool.query(INSERT_PATH, [name, userId], (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                });
            });
        };

        const insertStep = (stepName, pathId) => {
            return new Promise((resolve, reject) => {
                pool.query(INSERT_STEP, [stepName, pathId], (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                });
            });
        };

        const insertSkill = (skillName, stepId) => {
            return new Promise((resolve, reject) => {
                pool.query(INSERT_SKILL, [skillName, stepId], (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                });
            });
        };

        const pathResult = await insertPath();
        const pathId = pathResult.insertId;

        // Generate and parse the roadmap
        const roadmapText = await generateRoadmap(name);
        const roadmap = JSON.parse(roadmapText);

        // Insert steps and skills sequentially
        for (const step of roadmap.steps) {
            const stepResult = await insertStep(step.name, pathId);
            const stepId = stepResult.insertId;

            await Promise.all(step.skills.map(skill => 
                insertSkill(skill.name, stepId)
            ));
        }

        return SuccessResponse(res, { id: pathId, roadmap: roadmap }, 'Path is created and roadmap generated', 200);
    } catch (error) {
        console.error("Error in createPath:", error);
        return FailureResponse(res, "Internal Server Error", error.message, 500);
    }
};