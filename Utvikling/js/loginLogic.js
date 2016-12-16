function login() {
    var username = $("#username").val();
    var password = $("#password").val();
			
			/**if(password == "password") {
				window.location.href = "#home";
			}**/
			
    window.location.href = "home.html";
    console.log("Welcome " + "user: " + username + " with pass: " + password)
}