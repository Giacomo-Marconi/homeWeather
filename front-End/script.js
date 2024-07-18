const pages = ['home', 'temp', 'umi', 'illu'];
let temp=[];
let hum=[];
let illu=[];

let illuData = [100, 0, 0]
let tempData = [100, 0, 0]
let humData = [100, 0, 0]

function getData() {
    fetch('http://184.174.34.61:8080/api/v1/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(d => {
            const time = new Date(d.timestamp).getTime()
            temp.push([time, d.temperature]);
            if(d.temperature < tempData[0]) tempData[0] = d.temperature;
            if(d.temperature > tempData[1]) tempData[1] = d.temperature;
            hum.push([time, d.humidity]);
            if(d.humidity < humData[0]) humData[0] = d.humidity;
            if(d.humidity > humData[1]) humData[1] = d.humidity; 
            illu.push([time, d.light]);
            if(d.light < illuData[0]) illuData[0] = d.light;
            if(d.light > illuData[1]) illuData[1] = d.light; 
        });
        const last = data[data.length-1];
        console.log(data.length-1);
        illuData[2] = last.light;
        humData[2] = last.humidity;
        tempData[2] = last.temperature;

        console.log(temp);
        console.log(hum);
        console.log(illu);
        updateData();
        updateChar();
        
    }); 
}

const elements = [[document.getElementById('min-temp'), document.getElementById('min-umi'), document.getElementById('min-illu')],
[document.getElementById('max-temp'), document.getElementById('max-umi'), document.getElementById('max-illu')],
[document.getElementById('curr-temp'), document.getElementById('curr-umi'), document.getElementById('curr-illu')]];
const bar = [[document.getElementById('min-temp-bar'), document.getElementById('min-umi-bar'), document.getElementById('min-illu-bar')],
[document.getElementById('max-temp-bar'), document.getElementById('max-umi-bar'), document.getElementById('max-illu-bar')],
[document.getElementById('curr-temp-bar'), document.getElementById('curr-umi-bar'), document.getElementById('curr-illu-bar')]];

const home = [document.getElementById('home-temp'), document.getElementById('home-umi')];
const homeBar = [document.getElementById('home-temp-bar'), document.getElementById('home-umi-bar')];
function updateData() {
    const dati = [tempData, humData, illuData];
    for (let i = 0; i < 3; i++) {
        elements[i].forEach((e, index) => {
            e.innerHTML = dati[index][i];
        });
        bar[i].forEach((e, index) => {
            if(index == 0) e.style.width = dati[index][i]*2+"%";
            else e.style.width = dati[index][i]+"%";
        });
    }
    home[0].innerHTML = tempData[2]+"°C";
    home[1].innerHTML = humData[2]+"%";
    homeBar[0].style.width = tempData[2]*2+"%";
    homeBar[1].style.width = humData[2]+"%";
}

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

const menu = document.getElementById('menu');

menu.onclick = function(event) {
    console.log('menu');
    event.stopPropagation();
    menu.style.display = 'flex';
    pages.forEach(p => {
        // document.getElementById(`${p}-div`).onclick = hiddenMenu;
    });
}


function hiddenMenu() {
    console.log('hiddenMenu');
    menu.style.display = 'none';
    pages.forEach(p => {
        document.getElementById(`${p}-div`).onclick = '';
    });
}






getData();

function updateChar() {
   
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
        },
        lineColor: '#E9E9E9'
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
    colors: ['#2d94ee', 'yellow', 'orange'],

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: [
        {
            name: 'Umidità',
            lineWidth: 5,
            data: hum
        },
        {
            name: 'Illuminazione',
            lineWidth: 5,
            data: illu
        },
        {
            name: 'Temperatura',
            lineWidth: 5,
            data: temp
        }
    ]
});

Highcharts.chart('temp-chart', {
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
        },
        lineColor: '#E9E9E9'
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
    colors: ['orange', '#2d94ee'],

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: [
        {
            name: 'Temperatura',
            lineWidth: 5,
            data: temp
        }
    ]
});

Highcharts.chart('umi-chart', {
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
        },
        lineColor: '#E9E9E9'
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
    colors: ['#2d94ee'],

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: [
        {
            name: 'Umidità',
            lineWidth: 5,
            data: hum
        }
    ]
});

Highcharts.chart('illu-chart', {
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
        },
        lineColor: '#E9E9E9'
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
    colors: ['yellow'],

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: [
        {
            name: 'Illuminazione',
            lineWidth: 5,
            data: illu
        }
    ]
}); 
}








