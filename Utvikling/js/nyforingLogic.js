function addItem(clicked_id) {	
    var category = clicked_id.value;
    //alert(category);
    $("#mainList").append("<li><a href='#'>" + category + "</a></li>");
    $("#mainList").listview("refresh");
		}
function home() {
    window.location.href = "home.html";
}