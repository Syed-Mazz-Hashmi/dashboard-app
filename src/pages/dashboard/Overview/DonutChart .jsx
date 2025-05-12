import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const series = [30, 70, ];

  const options = {
    chart: {
      type: "donut",
    },
    labels: ["loggin", "loggout"],
    colors: ["#878ECE" ,"#00DEC3"],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '10px',
              color: '[#FFFFFF]',
            },
            value: {
              show: true,
              fontSize: '10px',
              color: '#F5F6F7',
              formatter: (val) => `${val}%`,
            },
            // total: {
            //   show: true,
            //   label: 'Total',
            //   formatter: () => '100',
            // },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'right',
    },
  };

  return (
    <div className="max-w-md mx-auto">
      <Chart options={options} series={series} type="donut" className="w-[100%] mt-5" />
    </div>
  );
};

export default DonutChart;
