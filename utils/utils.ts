type Object = {};

export const options: Object = {
   maintainAspectRatio: false,
   interaction: {
      mode: "index",
      intersect: false,
      axis: "x",
   },
   plugins: {
      tooltip: {
         enabled: true,
      },
      legend: false,
   },
   scales: {
      y: {
         grid: {
            drawOnChartArea: false,
            drawBorder: false,
         },
      },
      x: {
         grid: {
            drawBorder: false,
            borderDash: [6],
            color: "#26323f",
            border: false,
         },
         ticks: {
            color: "#fff",
            font: {
               family: "'Mulish', sans-serif",
               size: "16px",
            },
         },
      },
   },
};
