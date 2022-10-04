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
    </>
  );
};

export default Plot;
