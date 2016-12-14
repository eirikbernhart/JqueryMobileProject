


var ctx = document.getElementById('myDChart').getContext("2d");
ctx.canvas.width = 350;
ctx.canvas.height = 350;


var data = {
    labels: [
       "1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7"
		
    ],
    datasets: [
        {
            data: [300, 50, 100, 30, 80, 45, 120],
            backgroundColor: [
                "#704c93",
                "#8466a3",
                "#997fb2",
				"#AD99C1",
				"#C1B2D1",
				"#D6CCE0",
				"#EAE5EF"
            ],
            hoverBackgroundColor: [
                "#704c93",
                "#8466a3",
                "#997fb2",
				"#AD99C1",
				"#C1B2D1",
				"#D6CCE0",
				"#EAE5EF"
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
        responsive: false,	
		cutoutPercentage: 70
	    
				
		}
});


