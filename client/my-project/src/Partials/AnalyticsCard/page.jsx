// eslint-disable-next-line no-unused-vars
import React from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Chart from 'react-apexcharts';

const Page = () => {
  // Sample data for the sales overview chart
  const chartOptions = {
    chart: {
      type: 'area', // Changed to area chart
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: {
          colors: '#fff', // Change x-axis label color
        },
      },
    },
    title: {
      text: '+5% more in 2021', // Title is still present in the options but will not be displayed
      align: 'left',
      style: {
        fontSize: '15px',
        fontWeight: '900',
        color: 'green',
      },
    },
    colors: ['#00BFFF'],
    fill: {
      opacity: 0.5, // Adjust opacity for the area fill
    },
    tooltip: {
      theme: 'dark',
    },
  };

  const chartSeries = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <div className="lg:p-4 md:p-4 sm:p-3 p-0 grid grid-cols-1 lg:grid-cols-3 gap-4 mt-3 sm:mt-0">
      {/* Profile Card (1st card) */}
      <div
        className="lg:col-span-2 bg-cover bg-center text-white lg:p-10 md:p-8 sm:p-3 p-3 rounded-xl"
        style={{
          backgroundImage: 'url(https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/cardimgfree.5771cbbb.png)',
        }}
      >
        <div className="p-2 rounded-xl flex flex-col justify-start items-start">
          <h1 className="text-md font-semibold text-gray-400">Welcome, Back!</h1>
          <span className="font-extrabold text-3xl mt-3">Mark Johnson</span>
          <p className="text-md text-gray-300 mt-2">Glad to see you again! Ask me anything.</p>
          <div className="mt-3">
            <button className="rounded-xl font-extrabold py-3 px-10 text-white bg-[#04082b] transition transform hover:scale-110 duration-500 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Empty 2nd Card */}
      <div
        className="bg-cover bg-top-left p-5 rounded-xl text-white shadow-lg"
        style={{
          backgroundImage:
            "url('https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/body-background.9e7d96f6.png')",
          backgroundPosition: 'top left',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className="text-xl font-extrabold">Satisfaction Rate</h2>
        <p className="text-gray-400 text-sm font-semibold">From all projects</p>

        <div className="relative mt-5 mb-4 flex justify-center items-center">
          {/* The outer ring */}
          <div className="w-36 h-36 rounded-full bg-transparent border-[10px] border-blue-600 border-opacity-40 flex items-center justify-center relative">
            {/* The inner ring and the icon */}
            <div className="w-28 h-28 rounded-full bg-[#10163a] flex items-center justify-center">
              <SentimentSatisfiedAltIcon className="text-white" style={{ fontSize: '3rem' }} />
            </div>
          </div>
        </div>
        <div className="bg-[#04082b] rounded-[30px] p-4">
          <div className="flex justify-between text-gray-400 font-semibold text-sm">
            <span>0%</span>
            <span>100%</span>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-extrabold">95%</h1>
            <p className="text-gray-400 font-semibold text-center text-sm">Based on likes</p>
          </div>
        </div>
      </div>

      {/* Sales Overview Card 3rd card */}
      <div className="lg:col-span-full lg:p-4 md:p-4 sm:p-3 p-3 rounded-xl" style={{
          backgroundImage:
            "url('https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/body-background.9e7d96f6.png')",
          backgroundPosition: "top left",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}>
        <h2 className="text-xl font-extrabold p-2 text-gray-200">Sales Overview</h2> {/* Heading for the card */}
        <Chart options={chartOptions} series={chartSeries} type="area" height={250} className="p-4" />
      </div>
    </div>
  );
};

export default Page;
