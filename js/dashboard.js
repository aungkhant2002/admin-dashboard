$(".counter-up").counterUp({
    delay: 10,
    time: 1000,
});

let dateArr = ['dec 31', 'dec 30', 'dec 29', 'dec 28', 'dec 27', 'dec 26', 'dec 25', 'dec 24', 'dec 23', 'dec 22', 'dec 21'];
let orderCountArr = [7, 5, 6, 4, 6, 4, 8, 6, 8, 9, 6];
let viewerCountArr = [13, 12, 15, 14, 20, 17, 19, 16, 23, 33, 16];

const ctx = document.getElementById('ov').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
                label: 'Order Count',
                data: orderCountArr,
                backgroundColor: [
                    '#007bff30'
                ],
                borderColor: [
                    '#007bff'
                ],
                borderWidth: 1,
                tension: 0,
            },
            {
                label: 'Viewer Count',
                data: viewerCountArr,
                backgroundColor: [
                    '#28a74530'
                ],
                borderColor: [
                    '#28a745'
                ],
                borderWidth: 1,
                tension: 0,
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                // display: false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                // display: false,
                gridLines: [{
                    display: false
                }]
            }]
        },
        legend: {
            display: true,
            shape: "circle",
            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle: true
            }
        }
    }
});