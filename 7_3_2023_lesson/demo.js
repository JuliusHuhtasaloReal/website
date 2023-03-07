let xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
let yValues = [67, 55, 108, 504, 39]
let barColors = ["red", "darkblue", "green", "orange", "pink"]
 
new Chart("my-chart", { 
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {display: false},
            title: {
                display: true,
                text: "World wine production 2018"
            }
        }
    },
    layout: {
        padding: 35
    }
})

new Chart("my-other-chart", {
    type: "line",
    data: {
        datasets: [{
            label: "# of Votes",
            pointstyle: "circle",
            pointradius: 10,
            data: [
                {x: '2018-04-12', y: 41},
                {x: '2015-12-25', y: 68},
                {x: '2011-03-06', y: 36},
                {x: '2009-08-21', y: 146},
                {x: '2004-01-01', y: 80},
            ]
        }]
    }
})