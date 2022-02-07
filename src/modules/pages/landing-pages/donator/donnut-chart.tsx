import Chart from "react-apexcharts";

// https://apexcharts.com/docs/react-charts/

const DoughnutChart = ({
  width = "400px",
  height = "500px",
  reached = 62,
  left = 38,
}: any) => {
  const series = [reached, left];

  const options: ApexCharts.ApexOptions = {
    series,
    labels: ["Atingido", "Restante"],
    colors: ["#0066CC", "#8BC1F7"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "55px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: false,
              fontSize: "25px",
            },
          },
        },
      },
    },
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      width={width}
      height={height}
    />
  );
};

export default DoughnutChart;
