
var ctx = document.getElementById('myChart');
var a = document.getElementById("total");


		var data = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [
				{
					label: "My First dataset",
					backgroundColor: "rgba(255,99,132,0.2)",
					borderColor: "rgba(255,99,132,1)",
					borderWidth: 2,
					hoverBackgroundColor: "rgba(255,99,132,0.4)",
					hoverBorderColor: "rgba(255,99,132,1)",
						data: [65, 59, 30, 81, 56, 55, 40],
				}
			]
		};
		
		
		var chartInstance = new Chart(ctx, {
			type: 'line',
			data: data,
			options: {
        responsive: false
    		}
		});


		function subForm() {
			chartInstance.data.datasets[0].data[6] = (a).value;
			chartInstance.update();
		}
			
			
			
	