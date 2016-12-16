


var ctx = document.getElementById('myDChart').getContext("2d");
ctx.canvas.width = 350;
ctx.canvas.height = 350;


 
  

var label1 = "Leie";
//var pic = "images/extraIconsPng/santa-claus.png";
//var img = new Image();
//img.src=pic;
//var label1Img = document.getElementById('lol');
//var label1Img = "lol";

 
var data = {
    labels: [
       label1,
		"Sosialt",
		"Transport",
		"Mat&drikke",
		"Annet"
		
		
    ],
    datasets: [
        {
            data: [300, 50, 100, 30, 80],
            backgroundColor: [
                "#704c93",
                "#8466a3",
                "#997fb2",
				"#AD99C1",
				"#C1B2D1"
				
            ],
            hoverBackgroundColor: [
                "rgba(208, 6, 68, 0.58)",
                "rgba(208, 6, 68, 0.58)",
                "rgba(208, 6, 68, 0.58)",
				"rgba(208, 6, 68, 0.58)",
				"rgba(208, 6, 68, 0.58)"
				
            ]
        }]
};


Chart.pluginService.register({
			beforeRender: function (chart) {
				if (chart.config.options.showAllTooltips) {
					// create an array of tooltips
					// we can't use the chart tooltip because there is only one tooltip per chart
					chart.pluginTooltips = [];
					chart.config.data.datasets.forEach(function (dataset, i) {
						chart.getDatasetMeta(i).data.forEach(function (sector, j) {
							chart.pluginTooltips.push(new Chart.Tooltip({
								_chart: chart.chart,
								_chartInstance: chart,
								_data: chart.data,
								_options : chart.options.tooltips,
								_active: [sector]
							}, chart));
						});
					});

					// turn off normal tooltips
					chart.options.tooltips.enabled = false;
				}
			},
			afterDraw: function (chart, easing) {
				if (chart.config.options.showAllTooltips) {
					// we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
					if (!chart.allTooltipsOnce) {
						if (easing !== 1)
							return;
						chart.allTooltipsOnce = true;
					}

					// turn on tooltips
					chart.options.tooltips.enabled = true;
					Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
						tooltip.initialize();
						tooltip.update();
						// we don't actually need this since we are not animating tooltips
						tooltip.pivot();
						tooltip.transition(easing).draw();
					});
					chart.options.tooltips.enabled = false;
				}
			}
		})



var chartInstance = new Chart(ctx, {
	 
			type: 'doughnut',
			data: data,
			options: {
				showAllTooltips: true,
			legend: {
    display: false,
},
        responsive: false,	
		cutoutPercentage: 70
	    
				
		}
});

//NB! CHARTS CURRENTLY RESPECTS RELATIONAL MATH, SO DIVIDING BY 31 FOR "DAY-TO-MONTH RATIO", YIELD SAME VISUALS ON GRAPH**/

//GETS DATA FROM DATABAS:FIREBASE
function month() {
	chartInstance.data.datasets[0].data[0] = arrayOfDataMonth[1];
	chartInstance.data.datasets[0].data[1] = arrayOfDataMonth[3];
	chartInstance.data.datasets[0].data[2] = arrayOfDataMonth[4];
	chartInstance.data.datasets[0].data[3] = arrayOfDataMonth[2];
	chartInstance.data.datasets[0].data[4] = arrayOfDataMonth[0];
	chartInstance.update();
}

//JUST HARDCODED
function today() {
	chartInstance.data.datasets[0].data[0] = 325;
	chartInstance.data.datasets[0].data[1] = 200;
	chartInstance.data.datasets[0].data[2] = 120;
	chartInstance.data.datasets[0].data[3] = 188;
	chartInstance.data.datasets[0].data[4] = 1000;
	chartInstance.update();
}

//JUST HARDCODED
function week() {
	chartInstance.data.datasets[0].data[0] = 2500;
	chartInstance.data.datasets[0].data[1] = 800;
	chartInstance.data.datasets[0].data[2] = 480;
	chartInstance.data.datasets[0].data[3] = 840;
	chartInstance.data.datasets[0].data[4] = 1400;
	chartInstance.update();
}



