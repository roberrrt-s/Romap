// Basic Google Maps code to place it inside #map and push a marker on it, the marker has a click event for user feedback
var initMap = function() {

	// Main Google Maps information.
	var element = document.getElementById('map');
	var map = new google.maps.Map(element, {
		center: {lat: 43.771426, lng: 11.254019},
		zoom: 13
	});

	// Roma

	// NEW ENTRY
    var infowindow1 = new google.maps.InfoWindow({
      content: "Roma Termini"
    });

	var marker1 = new google.maps.Marker({
	    position: {lat: 41.901000, lng: 12.500062},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Roma Termini",
    	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
  	});

	marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
	});

	// NEW ENTRY
    var infowindow2 = new google.maps.InfoWindow({
      content: "Colosseum"
    });

	var marker2 = new google.maps.Marker({
	    position: {lat: 41.890210, lng: 12.492231},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Colosseum"
  	});

	marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
	});

	// NEW ENTRY
    var infowindow3 = new google.maps.InfoWindow({
      content: "Spaanse trappen"
    });

	var marker3 = new google.maps.Marker({
	    position: {lat: 41.905698, lng: 12.482327},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Spaanse trappen"
  	});

	marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
	});

	// NEW ENTRY
    var infowindow4 = new google.maps.InfoWindow({
      content: "Vaticaanstad"
    });

	var marker4 = new google.maps.Marker({
	    position: {lat: 41.902361, lng: 12.459333},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Vaticaanstad"
  	});

	marker4.addListener('click', function() {
        infowindow4.open(map, marker4);
	});

	// NEW ENTRY
    var infowindow5 = new google.maps.InfoWindow({
      content: "Trevifontijn"
    });

	var marker5 = new google.maps.Marker({
	    position: {lat: 41.900933, lng: 12.483313},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Trevifontijn"
  	});

	marker5.addListener('click', function() {
        infowindow5.open(map, marker5);
	});

	// NEW ENTRY
    var infowindow6 = new google.maps.InfoWindow({
      content: "Pantheon"
    });

	var marker6 = new google.maps.Marker({
	    position: {lat: 41.898464, lng: 12.476885},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Pantheon"
  	});

	marker6.addListener('click', function() {
        infowindow6.open(map, marker6);
	});

	// NEW ENTRY
    var infowindow7 = new google.maps.InfoWindow({
      content: "Forum Romanum"
    });

	var marker7 = new google.maps.Marker({
	    position: {lat: 41.892462, lng: 12.485325},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Forum Romanum"
  	});

	marker7.addListener('click', function() {
        infowindow7.open(map, marker7);
	});

	// NEW ENTRY
    var infowindow8 = new google.maps.InfoWindow({
      content: "Piazza Venezia - Vittoriano"
    });

	var marker8 = new google.maps.Marker({
	    position: {lat: 41.894584, lng: 12.483103},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Piazza Venezia - Vittoriano"
  	});

	marker8.addListener('click', function() {
        infowindow8.open(map, marker8);
	});

	// NEW ENTRY
    var infowindow9 = new google.maps.InfoWindow({
      content: "Paletijns (grootste van de 7 heuvels van Rome)"
    });

	var marker9 = new google.maps.Marker({
	    position: {lat: 41.889404, lng: 12.487466},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Paletijn"
  	});

	marker9.addListener('click', function() {
        infowindow9.open(map, marker9);
	});

	// NEW ENTRY
    var infowindow10 = new google.maps.InfoWindow({
      content: "Aeroporto di Roma Fiumicino"
    });

	var marker10 = new google.maps.Marker({
	    position: {lat: 41.792079, lng: 12.252331},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Aeroporto di Roma Fiumicino",
    	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
  	});

	marker10.addListener('click', function() {
        infowindow10.open(map, marker10);
	});

	// NEW ENTRY
    var infowindow11 = new google.maps.InfoWindow({
      content: "Bioparca di Roma"
    });

	var marker11 = new google.maps.Marker({
	    position: {lat: 41.917116, lng: 12.487764},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Bioparca di Roma"
  	});

	marker11.addListener('click', function() {
        infowindow11.open(map, marker11);
	});

	// NEW ENTRY
    var infowindow12 = new google.maps.InfoWindow({
      content: "Hotel Solis"
    });

	var marker12 = new google.maps.Marker({
	    position: {lat: 41.893766, lng: 12.489489},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Hotel Solis",
    	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
  	});

	marker12.addListener('click', function() {
        infowindow12.open(map, marker12);
	});

	// NEW ENTRY
    var infowindow13 = new google.maps.InfoWindow({
      content: "Hotel Virginia"
    });

	var marker13 = new google.maps.Marker({
	    position: {lat: 41.906112, lng: 12.501072},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Hotel Virginia",
    	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
  	});

	marker13.addListener('click', function() {
        infowindow12.open(map, marker13);
	});

	// Florance

	// NEW ENTRY
    var infowindow14 = new google.maps.InfoWindow({
      content: "Ponte Vecchio"
    });

	var marker14 = new google.maps.Marker({
	    position: {lat: 43.767952, lng: 11.253127},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Ponte Vecchio",
  	});

	marker14.addListener('click', function() {
        infowindow14.open(map, marker14);
	});

	// NEW ENTRY
    var infowindow15 = new google.maps.InfoWindow({
      content: "Piazza della Signoria"
    });

	var marker15 = new google.maps.Marker({
	    position: {lat: 43.769566, lng: 11.256114},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Piazza della Signoria",
  	});

	marker15.addListener('click', function() {
        infowindow15.open(map, marker15);
	});

	// NEW ENTRY
    var infowindow16 = new google.maps.InfoWindow({
      content: "Hotel Caravaggio"
    });

	var marker16 = new google.maps.Marker({
	    position: {lat: 43.779015, lng: 11.253932},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Hotel Caravaggio",
       	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
  	});

	marker16.addListener('click', function() {
        infowindow16.open(map, marker16);
	});

	// NEW ENTRY
    var infowindow17 = new google.maps.InfoWindow({
      content: "Firenze Santa Maria Novella"
    });

	var marker17 = new google.maps.Marker({
	    position: {lat: 43.776164, lng: 11.247833},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Firenze Santa Maria Novella",
       	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
  	});

	marker17.addListener('click', function() {
        infowindow17.open(map, marker17);
	});

	// NEW ENTRY
    var infowindow18 = new google.maps.InfoWindow({
      content: "Duomo Santa Maria del Fiore"
    });

	var marker18 = new google.maps.Marker({
	    position: {lat: 43.772845, lng: 11.255683},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Duomo Santa Maria del Fiore",
  	});

	marker18.addListener('click', function() {
        infowindow18.open(map, marker18);
	});

	// NEW ENTRY
    var infowindow19 = new google.maps.InfoWindow({
      content: "Piazza della Repubblica"
    });

	var marker19 = new google.maps.Marker({
	    position: {lat: 43.771426, lng: 11.254019},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Piazza della Repubblica",
  	});

	marker19.addListener('click', function() {
        infowindow19.open(map, marker19);
	});

	// NEW ENTRY
    var infowindow20 = new google.maps.InfoWindow({
      content: "Mercato Centrale di San Lorenzo"
    });

	var marker20 = new google.maps.Marker({
	    position: {lat: 43.776564, lng: 11.253952},
	    map: map,
	    animation: google.maps.Animation.DROP,
    	title: "Mercato Centrale di San Lorenzo",
  	});

	marker20.addListener('click', function() {
        infowindow20.open(map, marker20);
	});

	// OUR LOCATION
	navigator.geolocation.getCurrentPosition(function(pos) {

		var currentLocation = new google.maps.Marker({
		    position: {lat: Number(pos.coords.latitude), lng: Number(pos.coords.longitude)},
		    map: map,
	    	title: "We're here!",
	    	icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
		});

		setInterval(function() {
			updatePosition(currentLocation)
		}, 5000)

	})

}

function updatePosition(cur) {
	navigator.geolocation.getCurrentPosition(function(pos) {
		cur.setPosition({lat: Number(pos.coords.latitude), lng: Number(pos.coords.longitude)});
		console.log('updated')
	});
}