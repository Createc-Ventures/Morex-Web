// components/PerformanceChart.jsx

import React from "react";

const PerformanceChart = () => {
  return (
    <section className="mt-20 px-7">
      <h3 className="font-['Libre_Bodoni',Helvetica] font-normal text-[#012c51] text-[28px] text-center mb-7">
        OUR PERFORMANCE OVER THE YEARS
      </h3>

      <div className="w-full flex justify-center">
        <img
          className="object-cover w-full h-auto"
          alt="Performance Chart"
          src="public\assets\images\graph.png"
        />
      </div>
    </section>
  );
};

export default PerformanceChart;
