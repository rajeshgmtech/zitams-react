import React from "react";
import { tabIcons } from "../components/icons/tabicons";


const AddCustomer = tabIcons.AddCustomer;
const CustomersInformation = tabIcons.CustomersInformation;


const Home = () => {

  // 1. Define your unique content in an array
  const features = [
    {
      id: 1,
      title: "New enquiries today",
      count: "5",
      icon: <AddCustomer className="w-4 md:w-6 h-4 md:h-6 text-white" />,
      bgColor: "bg-primary-bg"
    },
    {
      id: 2,
      title: " Jobs created today",
      count: "10",
      icon: <CustomersInformation className="w-4 md:w-6 h-4 md:h-6 text-white" />,
      bgColor: "bg-primary-bg"
    },
    {
      id: 3,
      title: "New enquiries this month",
      count: "12",
      icon: <CustomersInformation className="w-4 md:w-6 h-4 md:h-6 text-white" />,
      bgColor: "bg-primary-bg"
    },
    {
      id: 4,
      title: "Jobs Created this month",
      count: "8",
      icon: <CustomersInformation className="w-4 md:w-6 h-4 md:h-6 text-white" />,
      bgColor: "bg-primary-bg"
    }
  ];
  return (
    <div className="p-4 md:p-8 ">

      <h1 className="text-3xl font-semibold text-white h1-poppins mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="md:p-6 p-4  bg-white border border-gray-100 rounded-4xl shadow-sm hover:shadow-md transition-all"
          >

            <div className="flex justify-between items-center">
              {/* 3. Render the unique title */}
              <h3 className="md:text-xl !text-lg font-semibold text-primary-text h1-poppins mb-2">
                {feature.title}
              </h3>

              {/* 2. Render the unique icon and background */}
              <div className={` ${feature.bgColor} rounded-full flex items-center justify-center mb-4 p-3`}>
                {feature.icon}
              </div>

            </div>



            <h2 className="text-primary-text md:text-5xl text-3xl h1-poppins font-semibold leading-relaxed">
              {feature.count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
