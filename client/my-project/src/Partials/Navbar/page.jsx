/* eslint-disable no-unused-vars */
import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useStateManage } from "../../Context/StateContext";

const Page = () => {
  const {isNavbg} = useStateManage();

  return (
    <div className="lg:ml-2 md:ml-2 sm:ml-0  ml-0 cursor-pointer">
      <div className={`w-full  lg:rounded-xl md:rounded-xl sm:rounded-b-lg rounded-b-lg ${isNavbg} text-white flex justify-end items-center p-4`}>
        <div className="flex items-center space-x-4">
          <div>
            <NotificationsIcon className="text-yellow-500" style={{ fontSize: 30 }} />
          </div>
          <div>
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-black dark:ring-black"
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt="Bordered avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
