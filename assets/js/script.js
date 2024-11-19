
document.addEventListener('DOMContentLoaded', () => {
    var options = {
        chart: {
            type: 'donut'
        },
        series: [5, 5, 5, 85],
        labels: ['Marketing', 'Reservas', 'Crecimiento Futuro', 'Liquidez']
    };
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
});
