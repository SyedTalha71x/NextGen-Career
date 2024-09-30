// eslint-disable-next-line no-unused-vars
import React from 'react'
import { UserOutlined, DownloadOutlined, ShareAltOutlined, PhoneOutlined } from '@ant-design/icons'

const Page = () => {
  return (
    <div className="cursor-pointer">
      <div className='flex gap-1 items-center'>
        <span className='text-2xl text-green-600'><UserOutlined /></span>
        <h1 className='text-xl font-extrabold text-gray-100'>User Profile</h1>
      </div>
      <div className="user_profile">
        <div className='bg-[#1f1f28] p-5 mt-5 text-white h-full w-full rounded-xl'>
          <div className='flex lg:flex-row md:flex-row flex-col sm:flex-col lg:items-center md:items-center sm:items-start items-start gap-1'>
            <div>
              <img className='h-24 w-24 rounded-lg object-cover' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="User Avatar" />
            </div>
            <div>
              <div className=' ml-2'>
                <h1 className='text-xl text-white font-bold'>Mark Johnson</h1>
                <div className='flex gap-2 items-center text-blue-500 text-sm mt-1'>
                  <span>mark@gmail.com</span>
                  <span>12938192391</span>
                  <span>www.mark.com</span>
                </div>
                <div className='mt-1 text-gray-400 text-sm lg:w-3/5  sm:w-full w-full'>
                  <p>A data analyst collects, interprets and visualizes data to uncover insights. A data analyst assigns a numerical value to business functions so performance.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='description_detail mt-10'>
            <h1 className='text-xl font-bold text-gray-100'>Description</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4'>
              <div className=''>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Full Name :</span> Andrew Jonson</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Resume Title :</span> Searching For PHP Developer</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Current Designation :</span> PHP Programmer</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Annual Salary :</span> $7.5 Lacs</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Current Company :</span> Abcd Pvt Ltd</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Experience :</span> 3 Yrs</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Location :</span> USA</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Preferred Location :</span> USA</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Qualification :</span> B.Tech(CSE)</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Key Skills :</span> Good Communication, Planning and research skills</p>
              </div>
              <div>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Languages :</span> English, German, Spanish</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Email :</span> andrew@gmail.com</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Phone :</span> 1234598765</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Industry :</span> IT Software/Developer</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Date of Birth :</span> 13 June 1996</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Gender :</span> Female</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Marital Status :</span> Unmarried</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Permanent Address :</span> USA</p>
                <p className='border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2'><span className='text-white text-sm'>Zip Code :</span> 12345</p>
              </div>
            </div>
          </div>

          {/* Responsive button section with icons */}
          <div className='flex md:flex-row sm:flex-col flex-col justify-end items-center gap-2 mt-10'>
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
