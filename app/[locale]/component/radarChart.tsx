"use client"
import React, { useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js";

interface ChartProps {
  total: number[];
  city_name: string;
}

const RadarChart: React.FC<ChartProps> = ({total, city_name }) => {
  useEffect(() => {
    const config : ChartConfiguration = {
        type: 'radar',
        data: {
            labels: ["Dimensi 1", "Dimensi 2", "Dimensi 3", "Dimensi 4", "Dimensi 5"],
            datasets: [{
                label: city_name,
                data: total,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      };

    const ctx = (document.getElementById("line-chart") as HTMLCanvasElement)?.getContext("2d");
    if (ctx) {
      new Chart(ctx, config);
    }
  }, [total, city_name]);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
      <div className="p-4 flex-auto shadow-2xl">
        <div className="relative h-350-px ">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default RadarChart;
