// eslint-disable-next-line no-unused-vars
import React from "react";
import Email from "@mui/icons-material/Email";
import Person from "@mui/icons-material/Person";
import DocumentScanner from "@mui/icons-material/DocumentScanner";
import Analytics from "@mui/icons-material/Analytics";


const Page = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:w-[97%] mx-auto w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#04082b] cursor-pointer p-4 rounded-xl text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-gray-400 font-semibold text-sm">Money</h1>
              <div className="flex items-center">
                <span className="font-extrabold text-xl text-white">$53,000</span>
                <p className="ml-1 text-green-600 mt-0.5 font-extrabold text-sm">+55%</p>
              </div>
            </div>
            <div className="bg-blue-600 p-3 rounded-xl">
              <Email className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-[#04082b] cursor-pointer p-4 rounded-xl text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-gray-400 font-semibold text-sm">Users</h1>
              <div className="flex items-center">
                <span className="font-extrabold text-xl text-white">$2,300</span>
                <p className="ml-1 text-green-600 mt-0.5 font-extrabold text-sm">+3%</p>
              </div>
            </div>
            <div className="bg-blue-600 p-3 rounded-xl">
              <Person className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-[#04082b] cursor-pointer p-4 rounded-xl text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-gray-400 font-semibold text-sm">Clients</h1>
              <div className="flex items-center">
                <span className="font-extrabold text-xl text-white">$3,000</span>
                <p className="ml-1 text-green-600 mt-0.5 font-extrabold text-sm">+15%</p>
              </div>
            </div>
            <div className="bg-blue-600 p-3 rounded-xl">
              <DocumentScanner className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-[#04082b] cursor-pointer p-4 rounded-xl text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-gray-400 font-semibold text-sm">Sales</h1>
              <div className="flex items-center">
                <span className="font-extrabold text-xl text-white">$23,5000</span>
                <p className="ml-1 text-green-600 mt-0.5 font-extrabold text-sm">+34%</p>
              </div>
            </div>
            <div className="bg-blue-600 p-3 rounded-xl">
              <Analytics className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
