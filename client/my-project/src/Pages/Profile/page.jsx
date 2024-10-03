// eslint-disable-next-line no-unused-vars
import React from 'react'
import { UserOutlined, DownloadOutlined, ShareAltOutlined, PhoneOutlined } from '@ant-design/icons'

const Page = () => {
  return (
    <div className="cursor-pointer overflow-hidden w-full p-4">
      <div className='flex gap-1 items-center'>
        <span className='text-2xl text-green-600'><UserOutlined /></span>
        <h1 className='text-xl font-extrabold text-gray-100'>User Profile</h1>
      </div>
      <div className="user_profile mt-5">
        <div className='bg-[#1f1f28] p-5 text-white h-full w-full rounded-xl'>
          {/* Profile Header */}
          <div className='flex lg:flex-row md:flex-row flex-col sm:flex-col lg:items-center md:items-center sm:items-start items-start gap-4 w-full'>
            <div>
              <img 
                className='h-24 w-24 rounded-lg object-cover' 
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" 
                alt="User Avatar" 
              />
            </div>
            <div className="flex-1 w-full">
              <div className='ml-2'>
                <h1 className='text-xl text-white font-bold'>Mark Johnson</h1>
                <div className='flex flex-wrap gap-2 items-center text-blue-500 text-sm mt-1'>
                  <span>mark@gmail.com</span>
                  <span>12938192391</span>
                  <span>www.mark.com</span>
                </div>
                <div className='mt-1 text-gray-400 text-sm lg:w-3/5 w-full'>
                  <p>A data analyst collects, interprets and visualizes data to uncover insights. A data analyst assigns a numerical value to business functions so performance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Details */}
          <div className='description_detail mt-10 w-full'>
            <h1 className='text-xl font-bold text-gray-100'>Description</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 w-full'>
              <div className='w-full'>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'>
                  <span className='text-white text-sm'>Full Name :</span> Andrew Jonson
                </p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'>
                  <span className='text-white text-sm'>Date of Birth :</span> January 25, 1990
                </p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'>
                  <span className='text-white text-sm'>Position :</span> Senior Data Analyst
                </p>
              </div>
              <div className='w-full'>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'>
                  <span className='text-white text-sm'>Languages :</span> English, German, Spanish
                </p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'>
                  <span className='text-white text-sm'>Country :</span> United States
                </p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'>
                  <span className='text-white text-sm'>City :</span> New York
                </p>
              </div>
            </div>
          </div>

          {/* Responsive Buttons */}
          <div className='flex flex-wrap justify-end items-center gap-2 mt-10 w-full'>
            <button className='flex items-center justify-center py-2 px-8 text-sm text-white bg-purple-900 rounded-lg'>
              <DownloadOutlined className='mr-2' /> Download Resume
            </button>
            <button className='flex items-center justify-center py-2 px-8 text-sm text-white bg-yellow-600 rounded-lg'>
              <ShareAltOutlined className='mr-2' /> Share Profile
            </button>
            <button className='flex items-center justify-center py-2 px-8 text-sm text-white bg-slate-500 rounded-lg'>
              <PhoneOutlined className='mr-2' /> Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
