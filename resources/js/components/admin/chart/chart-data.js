export const planetChartData = {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [
            // { // one line graph
            //     label: 'Number of Moons',
            //     data: [0, 0, 1, 2, 67, 62, 27, 14],
            //     backgroundColor: [
            //         'rgba(54,73,93,.5)', // Blue
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)',
            //         'rgba(54,73,93,.5)'
            //     ],
            //     borderColor: [
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //         '#36495d',
            //     ],
            //     borderWidth: 3
            // },
            { // another line graph
                label: '',
                data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
                backgroundColor: [
                    'rgb(60,179,113)', // Green
                ],
                borderColor: [
                    '#47b784',
                ],
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                }
            }]
        }
    }
}

export default planetChartData;
