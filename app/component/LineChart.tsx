"use client"
import React, { use } from "react";
import Chart, { ChartConfiguration } from "chart.js";

interface CardLineChartProps{
  label : string[];
  total : number[];
  user_name : string
}

const CardLineChart : React.FC<CardLineChartProps> = ({ label, total, user_name}) =>{
  
  React.useEffect(() => {
    var config : ChartConfiguration = {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "Entrepreneurship Index",
            backgroundColor: "#3182ce",
            borderColor: "#3183ce",
            data: total,
            fill: false,
          }
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: true,
          text: "Entrepreneurship Index",
          fontColor: "black",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: 2,
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: 2,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: 3,
                drawBorder: true,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: 2,
              },
            },
          ],
        },
      },
    };
    var ctx = (document.getElementById("line-chart") as HTMLCanvasElement)?.getContext("2d");
    if (ctx) {
      new Chart(ctx, config);
    } else {
    }
    
  }, [label]);
  return (
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="p-4 flex-auto shadow-2xl">
          <div className="relative h-350-px ">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
  );
}

export default CardLineChart