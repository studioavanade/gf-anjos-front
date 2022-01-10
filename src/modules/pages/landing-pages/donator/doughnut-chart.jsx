import Chart from "react-apexcharts";

// https://apexcharts.com/docs/react-charts/

const DoughnutChart = () => {
  const options = {
    series: [38, 62],
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
              showAlways: true,
              fontSize: "25px",
            },
          },
        },
      },
      legend: {
        show: false,
      },
    },
  };

  const series = [62, 38];

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="400px"
        heigth={500}
      />
    </>
  );
};

export default DoughnutChart;
