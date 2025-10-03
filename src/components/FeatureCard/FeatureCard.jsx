import React from "react";

export const FeatureCard = ({ feature }) => {
  return (
    <div className=" flex items-center gap-2 bg-white p-4 rounded-lg shadow-md">
      <img src={feature.img} alt={feature.title} />
      <div className="flex flex-col gap-2">
        <h3 className="text-md font-semibold ">{feature.title}</h3>
        <p className="text-sm text-gray-600 ">{feature.description}</p>
      </div>
    </div>
  );
};
