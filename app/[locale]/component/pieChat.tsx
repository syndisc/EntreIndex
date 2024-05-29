"use client"
import React, { useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js";
import { dimension, subdimension } from "../utility/data";

interface ChartProps {
  total: number[];
  city_name: string;
}

const PieChart: React.FC<ChartProps> = ({total, city_name}) => {
  useEffect(() => {

    const config : ChartConfiguration = {
        type: 'pie',
        data: {
            labels: ["Sangat Buruk", "Buruk", "Baik", "Sangat Baik"],
            datasets: [{
                label: city_name,
                data: total,
                fill: true,
                backgroundColor: [
                    'rgb(255, 0, 0)',
                    'rgb(255, 165, 0)',
                    'rgb(255, 255, 0)',
                    'rgb(0, 128, 0)'
                ],
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
          },
          title: {
            display: true,
            text: city_name,
            fontColor: "black",
          },
        },
      };

    const ctx = (document.getElementById(city_name) as HTMLCanvasElement)?.getContext("2d");
    if (ctx) {
      new Chart(ctx, config);
    }
  }, [total, city_name]);

  console.log(total)

  return (
    <div className="flex h-full mt-3 w-full mb-6 shadow-lg rounded-3xl bg-white">
        <canvas id={city_name} className="h-full w-full"></canvas>
    </div>
  );
};

export default PieChart;