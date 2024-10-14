import { connectToDB } from "../DatabaseCon/index.js";
import { FailureResponse, SuccessResponse } from "../utilities/index.js";
import {CHECK_USER_PROFILE} from '../Models/roadmap-model-db.js'


const pool = connectToDB();

export const showProfile = (req,res) =>{
    try{
        const userId = req.user?.userId;
        if(!userId){
            return FailureResponse(res, 'User is not authenticated', null, 400)
        }
        pool.query(CHECK_USER_PROFILE, [userId], (err,results)=>{
            if(err){
                return FailureResponse(res, 'Internal Server Error', null, 500)
            }
            if(results.length === 0){
                return FailureResponse(res, 'User does not exist', null, 400)
            }
            return SuccessResponse(res, {results} ,'Profile Found', 200)
        })
    }
    catch(error){
        console.log(error);
        return FailureResponse(res, 'Internal Server Error', null, 500)
    }
}
export const editProfile = (req, res) => {
    try{
        const userId = req.user?.userId;
        const { language, profile_picture, city, country, position, full_name, date_of_birth, summary } = req.body;
        if(!userId){
            return FailureResponse(res, 'User is not authenticated', null, 400)
        }

        const updates = []
        const values = []

        if(language){
            updates.push("language = ?")
            values.push(language)
        }
        if(profile_picture){
            updates.push("profile_picture = ?")
            values.push(profile_picture)
        }
        if(city){
            updates.push("city = ?")
            values.push(city)
        }
        if(country){
            updates.push("country = ?")
            values.push(country)
        }
        if(position){
            updates.push("position = ?")
            values.push(position)
        }
        if(full_name){
            updates.push("full_name = ?")
            values.push(full_name)
        }
        if(date_of_birth){
            updates.push("date_of_birth = ?")
            values.push(date_of_birth)
        }
        if(summary){
            updates.push("summary = ?")
            values.push(summary)
        }

        if (updates.length === 0) {
            return FailureResponse(res, "No fields provided for update", null, 400);
        }


        const UPDATE_USER = `
            UPDATE users SET ${updates.join(", ")} WHERE id = ?
        `
        values.push(userId)
        
        pool.query(UPDATE_USER, values, (err, results)=>{
            if(err){
                console.log(err);
                
                return FailureResponse(res, 'Internal Server Error', null, 500)
            }
            if(results.length === 0){
                return FailureResponse(res, 'User does not exist', null, 400)
            }
            return SuccessResponse(res, {results} ,'Profile Updated Successfully', 200)
        })
    }
    catch(error){
        console.log(error);
        return FailureResponse(res, 'Internal Server Error', null, 500)
    }
}