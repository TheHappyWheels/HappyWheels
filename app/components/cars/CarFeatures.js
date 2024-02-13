import Image from "next/image";

export function CarFeatures({ features }) {
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-lg font-bold text-gray-700">Car Features:</h2>
      <div className="p-3 lg:p-5 bg-gray-100 rounded-xl">
        <div className="p-2 lg:p-6 bg-gray-50 rounded-xl">
          <div className="flex flex-wrap gap-y-4">
            {features.map((feature, index) => (
              <div key={index} className="w-1/2 my-auto md:w-1/4 flex">
                <span className="text-gray-500 mr-4 my-auto">
                  <Image
                    src={feature.icon}
                    width={40}
                    height={40}
                    alt={feature.name}
                  />
                </span>
                <p className="text-sm lg:text-base my-auto font-medium text-gray-500">
                  {feature.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
