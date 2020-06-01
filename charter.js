const renderButton = document.getElementById("dataRenderButton");
renderButton.addEventListener("click", () => {
  renderChart(document.getElementById("chart").getContext("2d"));
});

const renderChart = (ctx) => {
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['blue','red', 'blue'],
      datasets: [{
        label: '# of',
        data: [5, 10, 7],
        backgroundColor: [
            'rgba(0, 0, 0, 0)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    }
  });
}
