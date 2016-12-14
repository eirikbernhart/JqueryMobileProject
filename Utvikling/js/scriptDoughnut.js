var ctx = document.getElementById('myDChart');

var data = {
    labels: [
        "Rent",
        "Sosial",
        "Food"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};



var chartInstance = new Chart(ctx, {
			type: 'doughnut',
			data: data,
			options: {
        responsive: false
    		}
		});