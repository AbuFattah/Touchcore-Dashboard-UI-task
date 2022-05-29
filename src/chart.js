function generateChart(dataSize) {
  const labels = [20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 130];
  labels.length = dataSize;

  const estimatedData = [20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 130];
  estimatedData.length = dataSize;
  const data = {
    labels: labels,
    datasets: [
      {
        barPercentage: 0.5,
        label: "Dataset 1",
        data: estimatedData,
        backgroundColor: "#0800a3",
      },
      {
        barPercentage: 0.5,
        label: "Dataset 2",
        data: estimatedData,
        backgroundColor: "#4935ff",
      },
      {
        barPercentage: 0.5,
        label: "Dataset 3",
        data: estimatedData,
        backgroundColor: "#85afff",
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false,
          text: "Chart.js Bar Chart - Stacked",
        },
        legend: {
          display: false,
        },
      },
      // responsive: true,
      scales: {
        x: {
          grid: { display: false },
          stacked: true,
        },
        y: {
          grid: { display: true, borderDash: [4, 6] },
          stacked: true,
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("myChart"), config);
}

generateChart(13);
