/* eslint-disable react/no-unescaped-entities */
import { SendOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Input, Button, Tooltip } from 'antd'
import React from 'react'

const { TextArea } = Input

const examplePrompts = [
  "Build a successful tech startup",
  "Learn machine learning in 6 months",
  "Develop a fitness routine for weight loss"
];

const recentRoadmaps = [
  { title: "Launching a SaaS Product", user: "TechFounder23" },
  { title: "Becoming a Full-Stack Developer", user: "CodeMaster" },
  { title: "Starting a Successful YouTube Channel", user: "ContentCreator" },
];

export default function Page() {
  const [prompt, setPrompt] = React.useState('')
  const [tooltipVisible, setTooltipVisible] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Submitted prompt:', prompt);
    setIsLoading(false);
  }

  return (
    <div className="lg:p-4 md:p-4 sm:p-2 p-2 py-8 bg-gray-900 min-h-screen">
      <div className="flex sm:flex-row items-center mb-6">
        <div className="flex justify-start items-center gap-2">
          <h1 className="text-lg sm:text-2xl text-white font-extrabold">Vision To Roadmap</h1>
          <Tooltip
            title="Enter your vision in the box below to generate the roadmap"
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
      </div>

      <p className="text-white text-sm md:text-base mb-4">
        Enter your vision or goal, and we'll generate a detailed roadmap to help you achieve it.
      </p>

      <div className="mb-4">
        <div className="flex justify-between text-white text-sm mb-2">
          <span>Vision</span>
          <span>Roadmap</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-white text-sm mb-2">Example prompts:</p>
        <div className="flex flex-wrap gap-2">
          {examplePrompts.map((example, index) => (
            <Button 
              key={index} 
              size="small" 
              className="bg-gray-700 text-white border-none "
              onClick={() => setPrompt(example)}
            >
              {example}
            </Button>
          ))}
        </div>
      </div>

      <div className="w-full mx-auto">
        <div className="relative">
          <TextArea
            placeholder="How can we help you?"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mb-4 bg-slate-100 w-full"
            autoSize={{ minRows: 4, maxRows: 8 }}
            style={{ fontSize: '16px' }}
            maxLength={500}
          />
          <span className="absolute bottom-5 right-2 text-gray-500 text-sm">
            {prompt.length}/500
          </span>
        </div>
        <div className='flex justify-end items-center'>
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSubmit}
            className="bg-purple-600 text-white border-none w-full sm:w-auto disabled:bg-slate-500 disabled:text-black"
            size="large"
            loading={isLoading}
            disabled={prompt.trim().length === 0}
          >
            {isLoading ? 'Generating...' : 'Generate Roadmap'}
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-white text-xl mb-4">Recent Roadmaps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentRoadmaps.map((roadmap, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-2">{roadmap.title}</h3>
              <p className="text-gray-400 text-sm">Created by {roadmap.user}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}