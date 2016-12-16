var arrayOfData = [];


(function() {
	
	
	

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCiyHWzmBvnyesnu3cNN42_8Rh-islj_Yw",
      authDomain: "jqmproject.firebaseapp.com",
      databaseURL: "https://jqmproject.firebaseio.com",
      storageBucket: "jqmproject.appspot.com",
      messagingSenderId: "651708361381"
    };
    firebase.initializeApp(config);
	
	//Get elements
	const preObject = document.getElementById('object');
	const ulList = document.getElementById('list');
	
	
	
	
	
	
	
	//CREATE REFERENCES
	const dbRefObject = firebase.database().ref().child('object');
	const dbRefList = dbRefObject.child('testDataGraph');
	
	
	
	//SYNCH OBJECT CHANGES: PRINTS OUT THE "OBJECT"
	dbRefObject.on('value', snap => {
		//preObject.innerText = JSON.stringify(snap.val(), null, 3);
		//alert("fsMetod ran"); //THIS WORKS!
		//month(snap.val());
	});
	
	
	//SYNCH LIST CHANGES //RUNS FOR EACH CHILD ELEMENT IN LIST
	dbRefList.on('child_added',  snap => {
		

		/**This works with simple list**/
		/*$('#utgiftList').append('<li class = "ui-li-static ui-body-inherit" <li>' + snap.key + ': ' + snap.val() + '</li>');*/
		//alert("fsMetod ran"); //THIS WORKS!
		
		arrayOfData.push(snap.val());
		//month(snap.val()); //THIS KINDA WORKS
		
		//alert(arrayOfData);
		//alertTest(arrayOfData);
	});
	
	
	
	//SYNCH: POPULATE LIST WITH CHILD
	/**dbRefList.on('value',  snap => {
		
		const li = document.createElement('li');
		li.innerText = snap.val();
		li.id = snap.key;
		ulList.appendChild(li);
		
	});**/
	
	//UPDATE LIST WHEN ITEMS ARE CHENGED
	dbRefList.on('child_changed', snap => {
		
		const liChanged = document.getElementById(snap.key);
		liChanged.innerText = snap.val();
		
	});
	
	
	//UPDATE LIST WHEN ITEMS ARE REMOVED
	dbRefList.on('child_removed', snap => {
		
		const liToRemove = document.getElementById(snap.key);
		liToRemove.remove();
		
	});
	
	

	
	

	

	
	
}());

function alertTest(){
	alert(arrayOfData);
}