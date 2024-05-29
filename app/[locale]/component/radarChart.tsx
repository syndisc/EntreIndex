"use client"
import React, { useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js";

interface ChartProps {
  city: number[] | undefined,
  prov: number[] | undefined,
  user: number[] | undefined,
}

const RadarChart: React.FC<ChartProps> = ({city, prov, user}) => {
  useEffect(() => {

    const config : ChartConfiguration = {
        type: 'radar',
        data: {
            labels: ["Dimensi External Environment", "Dimensi Internal Environment", "Dimensi Behavioral Aspect", "Dimensi Cognitive Aspects", "Dimensi Indonesian Entrepreneurial"],
            datasets: [{
                label: "City",
                data: city,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132) ',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            },{
              label: "Province",
              data: prov,
              fill: false,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(132, 255, 99)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
          },
          {
            label: "Your Answer",
            data: user,
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(99, 132, 255)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }
          ]
        },
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      };

    const ctx = (document.getElementById("chart") as HTMLCanvasElement)?.getContext("2d");
    if (ctx) {
      new Chart(ctx, config);
    }
  }, [city, prov, user]);

  return (
    <div className="flex h-full p-6 mt-32 shadow-2xl border rounded-3xl ">
          <canvas id="chart" className="h-full"></canvas>
        <div className="h-3/5">
        </div>
    </div>
  );
};

export default RadarChart;
