/* eslint-disable no-unused-vars */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  UserOutlined,
  BookOutlined,
  SolutionOutlined,
  DeploymentUnitOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

const Roadmap = () => {
  const [tooltipVisible, setTooltipVisible] = React.useState(false)

  const steps = [
    {
      stepNo: 1,
      date: "1995",
      step: "Joined a Multinational Company as a Consultant.",
      skills: ["Consulting Basics", "Teamwork"],
      icon: <UserOutlined />,
    },
    {
      stepNo: 2,
      date: "2003",
      step: "Got promoted and became a Sr. Consultant.",
      skills: ["Leadership", "Project Management"],
      icon: <SolutionOutlined />,
    },
    {
      stepNo: 3,
      date: "2005",
      step: "Did a short-term certificate program and applied for a new job.",
      skills: ["Skill Enhancement", "New Technologies"],
      icon: <BookOutlined />,
    },
    {
      stepNo: 4,
      date: "2009",
      step: "Took up the job as a Sr. Consultant and got promoted in a year.",
      skills: ["Advanced Consulting", "Mentorship"],
      icon: <SolutionOutlined />,
    },
    {
      stepNo: 5,
      date: "2010",
      step: "Worked as a Team Manager.",
      skills: ["Team Leadership", "Strategic Planning"],
      icon: <UserOutlined />,
    },
    {
      stepNo: 6,
      date: "2019",
      step: "Joined a new organization as a Senior Operations Manager.",
      skills: ["Operations Management", "Problem Solving"],
      icon: <SolutionOutlined />,
    },
  ];

  return (
    <div className="cursor-pointer">
      <div className="flex gap-1 p-2 items-center cursor-pointer">
        <span className="text-2xl text-green-600">
        <h1 className="text-xl font-extrabold text-gray-100">Career Roadmap</h1>

        </span>
        <Tooltip
            title="Steps is in paragraph and skills are in blue box in below cards"
            trigger="click"
            open={tooltipVisible}
            onVisibleChange={setTooltipVisible}
          >
            <InfoCircleOutlined
              className="text-white text-lg sm:text-xl cursor-pointer sm:mt-0" 
              onClick={() => setTooltipVisible(!tooltipVisible)}
            />
          </Tooltip>
      </div>
      <div className="mt-4 bg-blue-950 rounded-xl lg:p-4 md:p-4 sm:p-2 p-2">
        <VerticalTimeline>
          {steps.map((step, index) => (
            <VerticalTimelineElement
              key={index}
              iconStyle={{ background: "#10073b", color: "white" }}
              contentStyle={{ backgroundColor: '#B2FEFA', borderRadius: '5px' }}
              icon={
                <div className="flex items-center justify-center w-full h-full text-xl font-extrabold">
                  {step.stepNo}
                </div>
              }
            >
              <div className="">
                <div className="">
                  <h3 className="vertical-timeline-element-title lg:text-md md:text-md sm:text-sm text-sm font-bold text-gray-800 order-1">
                    {step.step}
                  </h3>
                </div>
                <p className=" text-gray-700">
                  <div className="flex gap-1 flex-wrap ">
                    {step.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-purple-600 lg:text-xs md:text-xs sm:text-[10px] text-[10px] text-white rounded-md py-1.5 px-2"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Roadmap;
