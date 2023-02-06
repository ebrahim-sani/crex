"use client";
import React from "react";
import { Chart } from "react-chartjs-2";

import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
   Filler,
} from "chart.js";

ChartJS.register(
   Title,
   Tooltip,
   Legend,
   Filler,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
);

const ChartView = ({ dataSets, options }: any) => {
   return <Chart type="line" options={options} data={dataSets} />;
};

export default ChartView;
