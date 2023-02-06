"use client";
import React from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const ChartView = ({ dataSets, options }: any) => {
   return <Chart type="line" options={options} data={dataSets} />;
};

export default ChartView;
