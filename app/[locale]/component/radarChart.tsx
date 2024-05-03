"use client"
import React, { useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js";
import { dimension, subdimension } from "../utility/data";

interface ChartProps {
  total: number[];
  city_name: string;
  minDimCity: number,
  minFitCity : number
}

const RadarChart: React.FC<ChartProps> = ({total, city_name, minDimCity, minFitCity }) => {
  useEffect(() => {

    console.log(minDimCity);
    console.log(minFitCity);
    

    const config : ChartConfiguration = {
        type: 'radar',
        data: {
            labels: ["Dimensi External Environment", "Dimensi Internal Environment", "Dimensi Behavioral Aspect", "Dimensi Cognitive Aspects", "Dimensi Indonesian Entrepreneurial"],
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

    const ctx = (document.getElementById(city_name) as HTMLCanvasElement)?.getContext("2d");
    if (ctx) {
      new Chart(ctx, config);
    }
  }, [total, city_name]);

  return (
    <div className="flex h-96 w-full mb-6 shadow-lg rounded-3xl bg-white">
      <div className="h-full">
        <canvas id={city_name} className="h-full"></canvas>
      </div>
      <div className="h-full flex content-between flex-wrap p-6">
        <div>
          <b>{dimension[minDimCity]}</b> pada dimensi ini masih perlu untuk dikembang lagi
        </div>
        
        <div>
        <b>{subdimension[minFitCity]}</b> untuk subdimensi ini masih bisa dikembangkan lagi untuk kota {city_name}
        </div>
      </div>
    </div>
  );
};

export default RadarChart;
