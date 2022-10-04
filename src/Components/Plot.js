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
          align: "left",
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
      {chartData.series !== undefined && (
        <ReactApexChart
          series={chartData.series}
          options={chartData.options}
          type="candlestick"
          height="350"
        />
      )}
      <section>
        <h2>Select Your Watched Coins</h2>
        <div>
          <select id="selection" onChange={props.handleResolutionChange}>
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
