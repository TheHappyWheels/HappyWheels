import React from "react";
import { FaGasPump, FaTachometerAlt } from "react-icons/fa";
import { PiEngineDuotone, PiGasCanFill } from "react-icons/pi";

export function CarSpecs({ specs }) {
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-lg font-bold text-gray-700">Car Specs:</h2>
      <div className="bg-gray-100  rounded-xl">
        <div className="p-3 lg:p-5 ">
          <div className="p-2 rounded-xl lg:p-6 bg-gray-50">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              <div className="w-full mb-4 md:w-2/5">
                <div className="flex ">
                  <span className="mr-3 text-gray-500">
                    <FaTachometerAlt className="text-2xl" />
                  </span>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-500">
                      Milage
                    </p>
                    <h2 className="text-base font-semibold text-gray-700">
                      {specs.mileage}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full mb-4 md:w-2/5">
                <div className="flex ">
                  <span className="mr-3 text-gray-500">
                    <FaGasPump className="text-2xl" />
                  </span>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-500">
                      Fuel Type
                    </p>
                    <h2 className="text-base font-semibold text-gray-700">
                      {specs.fuelType}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                <div className="flex ">
                  <span className="mr-3 text-gray-500">
                    <PiEngineDuotone className="text-2xl" />
                  </span>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-500">
                      Engine
                    </p>
                    <h2 className="text-base font-semibold text-gray-700">
                      {specs.engine}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                <div className="flex ">
                  <span className="mr-3 text-gray-500">
                    <PiGasCanFill className="text-2xl" />
                  </span>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-500">
                      MPG
                    </p>
                    <h2 className="text-base font-semibold text-gray-700">
                      {specs.mpg}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
