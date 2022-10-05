import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const Plot = (props) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    let data = [];
    for (const element of props.post) {
      data.push([element.time, element.open, element.high, element.low, element.close]);
    }
    setChartData({
      series: [{ data: data }],
      options: {
        chart: {
          type: "candlestick",
          height: 350,
        },
        title: {
          text: "CandleStick Chart",
          align: "center",
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    });
  }, [props.post]);

  return (
    <>
      <div className="bg-gray-100 p-4 border-4 border-red-600">
        {chartData.series !== undefined && (
          <ReactApexChart
            series={chartData.series}
            options={chartData.options}
            type="candlestick"
            height="350"
          />
        )}
      </div>
      <section className="bg-gray-800 w-4/5 rounded p-4">
        <label htmlFor="selection" className="block mb-2 text-sm font-medium text-gray-400">
          Choose Chart Interval for Displayed
        </label>
        <div>
          <select
            id="selection"
            onChange={props.handleResolutionChange}
            className="border text-sm rounded-lg lock w-1/2 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
            <option value="" disabled selected>
              Choose an Interval
            </option>
            <option value="60">1m</option>
            <option value="300">5m</option>
            <option value="900">15m</option>
            <option value="3600">1h</option>
            <option value="14400">4h</option>
            <option value="86400">1d</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default Plot;
