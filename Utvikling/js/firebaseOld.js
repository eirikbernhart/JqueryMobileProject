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
	const ulList = document.getElementById('history-list');
	
	//CREATE REFERENCES
	const dbRefObject = firebase.database().ref().child('object');
	const dbRefList = dbRefObject.child('test');
	
	
	//SYNCH OBJECT CHANGES: PRINTS OUT THE "OBJECT"
	dbRefObject.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});
	
	
	//SYNCH LIST CHANGES
	dbRefList.on('child_added',  snap => {
		
		const li = document.createElement('li');
		li.innerText = snap.val();
		li.id = snap.key;
		ulList.appendChild(li);
		
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