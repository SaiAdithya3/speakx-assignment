import React from "react";

const ContentLength = ({ progress }) => {
  const circleRadius = 10; 
  const maxProgress = 100;
  const actualProgress = Math.min(progress, maxProgress); 
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset =
    circleCircumference - (actualProgress / maxProgress) * circleCircumference;

  return (
    <div className="">
      <svg width="40" height="40" className="transform -rotate-90">
        <circle
          cx="15"
          cy="15"
          r={circleRadius}
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          className="text-gray-300"
        />
        <circle
          cx="15"
          cy="15"
          r={circleRadius}
          stroke={progress > maxProgress ? "red" : "currentColor"} 
          strokeWidth="2"
          fill="transparent"
          className="text-blue-600"
          style={{ strokeDasharray: circleCircumference, strokeDashoffset }}
        />
      </svg>
      <div className="absolute text-xs font-bold text-blue-600">
        {/* {actualProgress.toFixed(0)}% */}
      </div>
    </div>
  );
};

export default ContentLength;