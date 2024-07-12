const pages = ['home', 'temp', 'umi', 'illu'];

function showPage(page) {
    pages.forEach(p => {
        if (p === page) {
            document.getElementById(`${p}-div`).style.display = 'flex';
            document.getElementById(p).classList.add('selezionato');
            
        } else {
            document.getElementById(`${p}-div`).style.display = 'none';
            document.getElementById(p).classList.remove('selezionato');
        }
    });
}





















Highcharts.chart('home-chart', {
    chart: {
        type: 'spline'
    },
    title: {
        // text: 'Snow depth at Vikjafjellet, Norway',
        text: '',
        align: 'left',
        style: {
            color: '#E9E9E9'
        }
    },
    subtitle: {
        text: 'Irregular time data in Highcharts JS',
        align: 'left'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            // don't display the year
            month: '%e. %b',
            year: '%b'
        },
        // title: {
        //     text: 'Date',
        //     style: {
        //         color: '#E9E9E9'
        //     }
        // },
        labels: {
            style: {
                color: '#E9E9E9'
            }
        }
    },
    yAxis: {
        title: {
            // text: 'Snow depth (m)',
            text: '',
            style: {
                color: '#E9E9E9'
            }
        },
        min: 0,
        labels: {
            style: {
                color: '#E9E9E9'
            }
        },
        gridLineColor: '#E9E9E9',
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },

    plotOptions: {
        series: {
            marker: {
                symbol: 'circle',
                fillColor: '#E9E9E9',
                enabled: true,
                radius: 3,
                lineWidth: 2,
                lineColor: null
            }
        }
    },

    // colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
    colors: ['lightblue', 'yellow', 'orange'],

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: [
        {
            name: 'Umidità',
            lineWidth: 5,
            data: [
                [Date.UTC(1970, 9, 24), 0],
                [Date.UTC(1970, 9, 27), 0.12],
                [Date.UTC(1970, 9, 30), 0.09],
                [Date.UTC(1970, 10, 3), 0.13],
                [Date.UTC(1970, 10, 6), 0.12],
                [Date.UTC(1970, 10, 9), 0.13],
                [Date.UTC(1970, 10, 12), 0.13],
                [Date.UTC(1970, 10, 15), 0.16],
                [Date.UTC(1970, 10, 18), 0.19],
                [Date.UTC(1970, 10, 21), 0.25],
                [Date.UTC(1970, 10, 24), 0.26],
                [Date.UTC(1970, 10, 27), 0.24],
                [Date.UTC(1970, 10, 30), 0.25],
                [Date.UTC(1970, 11, 3), 0.26],
                [Date.UTC(1970, 11, 6), 0.36],
                [Date.UTC(1970, 11, 9), 0.43],
                [Date.UTC(1970, 11, 12), 0.32],
                [Date.UTC(1970, 11, 15), 0.48],
                [Date.UTC(1970, 11, 18), 0.5],
                [Date.UTC(1970, 11, 21), 0.44],
                [Date.UTC(1970, 11, 24), 0.43],
                [Date.UTC(1970, 11, 27), 0.45],
                [Date.UTC(1970, 11, 30), 0.4],
                [Date.UTC(1971, 0, 3), 0.39],
                [Date.UTC(1971, 0, 6), 0.56],
                [Date.UTC(1971, 0, 9), 0.57],
                [Date.UTC(1971, 0, 12), 0.68],
                [Date.UTC(1971, 0, 15), 0.93],
                [Date.UTC(1971, 0, 18), 1.11],
                [Date.UTC(1971, 0, 21), 1.01],
                [Date.UTC(1971, 0, 24), 0.99],
                [Date.UTC(1971, 0, 27), 1.17],
                [Date.UTC(1971, 0, 30), 1.24],
                [Date.UTC(1971, 1, 3), 1.41],
                [Date.UTC(1971, 1, 6), 1.47],
                [Date.UTC(1971, 1, 9), 1.4],
                [Date.UTC(1971, 1, 12), 1.92],
                [Date.UTC(1971, 1, 15), 2.03],
                [Date.UTC(1971, 1, 18), 2.46],
                [Date.UTC(1971, 1, 21), 2.53],
                [Date.UTC(1971, 1, 24), 2.73],
                [Date.UTC(1971, 1, 27), 2.67],
                [Date.UTC(1971, 2, 3), 2.65],
                [Date.UTC(1971, 2, 6), 2.62],
                [Date.UTC(1971, 2, 9), 2.79],
                [Date.UTC(1971, 2, 13), 2.93],
                [Date.UTC(1971, 2, 20), 3.09],
                [Date.UTC(1971, 2, 27), 2.76],
                [Date.UTC(1971, 2, 30), 2.73],
                [Date.UTC(1971, 3, 4), 2.9],
                [Date.UTC(1971, 3, 9), 2.77],
                [Date.UTC(1971, 3, 12), 2.78],
                [Date.UTC(1971, 3, 15), 2.76],
                [Date.UTC(1971, 3, 18), 2.76],
                [Date.UTC(1971, 3, 21), 2.7],
                [Date.UTC(1971, 3, 24), 2.61],
                [Date.UTC(1971, 3, 27), 2.52],
                [Date.UTC(1971, 3, 30), 2.53],
                [Date.UTC(1971, 4, 3), 2.55],
                [Date.UTC(1971, 4, 6), 2.52],
                [Date.UTC(1971, 4, 9), 2.44],
                [Date.UTC(1971, 4, 12), 2.43],
                [Date.UTC(1971, 4, 15), 2.43],
                [Date.UTC(1971, 4, 18), 2.48],
                [Date.UTC(1971, 4, 21), 2.41],
                [Date.UTC(1971, 4, 24), 2.16],
                [Date.UTC(1971, 4, 27), 2.01],
                [Date.UTC(1971, 4, 30), 1.88],
                [Date.UTC(1971, 5, 2), 1.62],
                [Date.UTC(1971, 5, 6), 1.43],
                [Date.UTC(1971, 5, 9), 1.3],
                [Date.UTC(1971, 5, 12), 1.11],
                [Date.UTC(1971, 5, 15), 0.84],
                [Date.UTC(1971, 5, 18), 0.54],
                [Date.UTC(1971, 5, 21), 0.19],
                [Date.UTC(1971, 5, 23), 0]
            ]
        },
        {
            name: 'Illuminazione',
            lineWidth: 5,
            data: [
                [Date.UTC(1970, 10, 14), 0],
                [Date.UTC(1970, 11, 6), 0.35],
                [Date.UTC(1970, 11, 13), 0.35],
                [Date.UTC(1970, 11, 20), 0.33],
                [Date.UTC(1970, 11, 30), 0.53],
                [Date.UTC(1971, 0, 13), 0.62],
                [Date.UTC(1971, 0, 20), 0.6],
                [Date.UTC(1971, 1, 2), 0.69],
                [Date.UTC(1971, 1, 18), 0.67],
                [Date.UTC(1971, 1, 21), 0.65],
                [Date.UTC(1971, 1, 24), 0.66],
                [Date.UTC(1971, 1, 27), 0.66],
                [Date.UTC(1971, 2, 3), 0.61],
                [Date.UTC(1971, 2, 6), 0.6],
                [Date.UTC(1971, 2, 9), 0.69],
                [Date.UTC(1971, 2, 12), 0.66],
                [Date.UTC(1971, 2, 15), 0.75],
                [Date.UTC(1971, 2, 18), 0.76],
                [Date.UTC(1971, 2, 21), 0.75],
                [Date.UTC(1971, 2, 24), 0.69],
                [Date.UTC(1971, 2, 27), 0.82],
                [Date.UTC(1971, 2, 30), 0.86],
                [Date.UTC(1971, 3, 3), 0.81],
                [Date.UTC(1971, 3, 6), 1],
                [Date.UTC(1971, 3, 9), 1.15],
                [Date.UTC(1971, 3, 10), 1.35],
                [Date.UTC(1971, 3, 12), 1.26],
                [Date.UTC(1971, 3, 15), 1.18],
                [Date.UTC(1971, 3, 18), 1.14],
                [Date.UTC(1971, 3, 21), 1.04],
                [Date.UTC(1971, 3, 24), 1.06],
                [Date.UTC(1971, 3, 27), 1.05],
                [Date.UTC(1971, 3, 30), 1.03],
                [Date.UTC(1971, 4, 3), 1.01],
                [Date.UTC(1971, 4, 6), 0.98],
                [Date.UTC(1971, 4, 9), 0.94],
                [Date.UTC(1971, 4, 12), 0.8],
                [Date.UTC(1971, 4, 15), 0.61],
                [Date.UTC(1971, 4, 18), 0.43],
                [Date.UTC(1971, 4, 21), 0.29],
                [Date.UTC(1971, 4, 24), 0.1],
                [Date.UTC(1971, 4, 26), 0]
            ]
        },
        {
            name: 'Temperatura',
            lineWidth: 5,
            data: [
                [Date.UTC(1970, 10, 5), 0],
                [Date.UTC(1970, 10, 12), 0.1],
                [Date.UTC(1970, 10, 21), 0.15],
                [Date.UTC(1970, 10, 22), 0.19],
                [Date.UTC(1970, 10, 27), 0.17],
                [Date.UTC(1970, 10, 30), 0.27],
                [Date.UTC(1970, 11, 2), 0.25],
                [Date.UTC(1970, 11, 4), 0.27],
                [Date.UTC(1970, 11, 5), 0.26],
                [Date.UTC(1970, 11, 6), 0.25],
                [Date.UTC(1970, 11, 7), 0.26],
                [Date.UTC(1970, 11, 8), 0.26],
                [Date.UTC(1970, 11, 9), 0.25],
                [Date.UTC(1970, 11, 10), 0.25],
                [Date.UTC(1970, 11, 11), 0.25],
                [Date.UTC(1970, 11, 12), 0.26],
                [Date.UTC(1970, 11, 22), 0.22],
                [Date.UTC(1970, 11, 23), 0.22],
                [Date.UTC(1970, 11, 24), 0.22],
                [Date.UTC(1970, 11, 25), 0.24],
                [Date.UTC(1970, 11, 26), 0.24],
                [Date.UTC(1970, 11, 27), 0.24],
                [Date.UTC(1970, 11, 28), 0.24],
                [Date.UTC(1970, 11, 29), 0.24],
                [Date.UTC(1970, 11, 30), 0.22],
                [Date.UTC(1970, 11, 31), 0.18],
                [Date.UTC(1971, 0, 1), 0.17],
                [Date.UTC(1971, 0, 2), 0.23],
                [Date.UTC(1971, 0, 9), 0.5],
                [Date.UTC(1971, 0, 10), 0.5],
                [Date.UTC(1971, 0, 11), 0.53],
                [Date.UTC(1971, 0, 12), 0.48],
                [Date.UTC(1971, 0, 13), 0.4],
                [Date.UTC(1971, 0, 17), 0.36],
                [Date.UTC(1971, 0, 22), 0.69],
                [Date.UTC(1971, 0, 23), 0.62],
                [Date.UTC(1971, 0, 29), 0.72],
                [Date.UTC(1971, 1, 2), 0.95],
                [Date.UTC(1971, 1, 10), 1.73],
                [Date.UTC(1971, 1, 15), 1.76],
                [Date.UTC(1971, 1, 26), 2.18],
                [Date.UTC(1971, 2, 2), 2.22],
                [Date.UTC(1971, 2, 6), 2.13],
                [Date.UTC(1971, 2, 8), 2.11],
                [Date.UTC(1971, 2, 9), 2.12],
                [Date.UTC(1971, 2, 10), 2.11],
                [Date.UTC(1971, 2, 11), 2.09],
                [Date.UTC(1971, 2, 12), 2.08],
                [Date.UTC(1971, 2, 13), 2.08],
                [Date.UTC(1971, 2, 14), 2.07],
                [Date.UTC(1971, 2, 15), 2.08],
                [Date.UTC(1971, 2, 17), 2.12],
                [Date.UTC(1971, 2, 18), 2.19],
                [Date.UTC(1971, 2, 21), 2.11],
                [Date.UTC(1971, 2, 24), 2.1],
                [Date.UTC(1971, 2, 27), 1.89],
                [Date.UTC(1971, 2, 30), 1.92],
                [Date.UTC(1971, 3, 3), 1.9],
                [Date.UTC(1971, 3, 6), 1.95],
                [Date.UTC(1971, 3, 9), 1.94],
                [Date.UTC(1971, 3, 12), 2],
                [Date.UTC(1971, 3, 15), 1.9],
                [Date.UTC(1971, 3, 18), 1.84],
                [Date.UTC(1971, 3, 21), 1.75],
                [Date.UTC(1971, 3, 24), 1.69],
                [Date.UTC(1971, 3, 27), 1.64],
                [Date.UTC(1971, 3, 30), 1.64],
                [Date.UTC(1971, 4, 3), 1.58],
                [Date.UTC(1971, 4, 6), 1.52],
                [Date.UTC(1971, 4, 9), 1.43],
                [Date.UTC(1971, 4, 12), 1.42],
                [Date.UTC(1971, 4, 15), 1.37],
                [Date.UTC(1971, 4, 18), 1.26],
                [Date.UTC(1971, 4, 21), 1.11],
                [Date.UTC(1971, 4, 24), 0.92],
                [Date.UTC(1971, 4, 27), 0.75],
                [Date.UTC(1971, 4, 30), 0.55],
                [Date.UTC(1971, 5, 3), 0.35],
                [Date.UTC(1971, 5, 6), 0.21],
                [Date.UTC(1971, 5, 9), 0]
            ]
        }
    ]
});