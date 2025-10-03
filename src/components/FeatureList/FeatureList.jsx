import React from "react";
import { FeatureCard } from "../FeatureCard/FeatureCard";
import { featureList } from "../../assets";
export const FeatureList = () => {
  return (
    <div className="grid grid-cols-4 px-30 py-10 gap-6">
      {featureList.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};
