
if (navigator.geolocation) {    
		
    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }
    
    function success(pos){
        userCords = pos.coords;
        
        //return userCords;
    }

    // Get the user's current position
    navigator.geolocation.getCurrentPosition(success, error);
    //console.log(pos.latitude + " " + pos.longitude);
    } else {
        alert('Geolocation is not supported in your browser');
    }

var map;
function initMap() {
// The location of Sammamish
/*
db.collection('pantries').onSnapshot(snapshot => {
    console.log(snapshot.docs)
    data = snapshot.docs;
    data.forEach(function(doc) {
        const pantry = doc.data();
      
        var marker = new google.maps.Marker({position: {lat: parseFloat(pantry.lat),lng: parseFloat(pantry.long)}, map: map});

      });
  }, err => console.log(err.message));
  */

    var sammamish = {lat: 47.5734543, lng: -122.0205911};
    // The map, centered at Uluru
    var map = new google.maps.Map(
    document.getElementById('map-canvas'), {zoom: 5, center: new google.maps.LatLng(37.09024, -100.712891)});

var marker = new google.maps.Marker({position: {lat: 47.5734543, lng: -122.0205911}, map: map});
var marker = new google.maps.Marker({position: {lat: 48.5734543, lng: -122.0205911}, map: map});

    

// The marker, positioned at Uluru


    }


