import React from "react";
import { FaGasPump, FaTachometerAlt } from "react-icons/fa";
import { PiEngineDuotone, PiGasCanFill } from "react-icons/pi";

export function CarSpecs({ specs }) {
  let specsArray = [
    {
      icon: <FaTachometerAlt className="text-2xl" />,
      title: "Milage",
      value: specs.mileage,
    },
    {
      icon: <FaGasPump className="text-2xl" />,
      title: "Fuel Type",
      value: specs.fuelType,
    },
    {
      icon: <PiEngineDuotone className="text-2xl" />,
      title: "Engine",
      value: specs.engine,
    },
    {
      icon: <PiGasCanFill className="text-2xl" />,
      title: "MPG",
      value: specs.mpg,
    },
  ];
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-lg font-bold text-gray-700">Car Specs:</h2>
      <div className="bg-gray-100  rounded-xl">
        <div className="p-3 lg:p-5 ">
          <div className="p-2 rounded-xl lg:p-6 bg-gray-50">
            <div className="flex flex-wrap justify-center gap-y-4">
              {specsArray.map((item, index) => (
                <div key={index} className="w-1/2 mb-4 md:w-2/5">
                  <div className="flex">
                    <span className="mr-3 text-gray-500">{item.icon}</span>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-500">
                        {item.title}
                      </p>
                      <h2 className="text-base font-semibold text-gray-700">
                        {item.value}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
