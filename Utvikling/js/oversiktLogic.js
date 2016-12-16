
		
		/**$(document).ready(function(){
       
	   	});**/
		
		
		function login() {
			var username = $("#username").val();
			var password = $("#password").val();
			
			/**if(password == "password") {
				window.location.href = "#home";
			}**/
			
			
			
			
			
			
			window.location.href = "home.html";
			
			console.log("Welcome " + "user: " + username + " with pass: " + password)
		}
		
		function addItem(clicked_id) {	
			var category = clicked_id.value;
			//alert(category);
			$("#mainList").append("<li><a href='#'>" + category + "</a></li>");
			$("#mainList").listview("refresh");
		}

	