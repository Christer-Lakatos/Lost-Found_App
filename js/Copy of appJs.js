$(document).ready(function() {
//	console.log(navigator.geolocation);
	var height = 0;
	var width = 0;
			
		navigator.geolocation.getCurrentPosition(function (position){
			
			console.log(width);
			$('#map').css({'background-image':'url("http://maps.google.com/maps/api/staticmap?center='+position.coords.latitude+','+position.coords.longitude+'&zoom=14&size=320x480&sensor=false")'});
			
			// Did we get the position correctly?
			// alert (position.coords.latitude);
	 
			// To see everything available in the position.coords array:
			
//			for (key in position.coords) {alert(position.coords.latitude+' '+position.coords.longitude)}
//	 
//			mapServiceProvider(position.coords.latitude,position.coords.longitude);
			
			$('input[value=Karta]').click(function() {
				
				var initialLocation;
				var siberia = new google.maps.LatLng(60, 105);
				var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
				var browserSupportFlag =  new Boolean();
				var map;
				var infowindow = new google.maps.InfoWindow();
				  
				function initialize() {
				  $('#map_canvas').html('');
				  var myOptions = {
				    zoom: 17,
				    mapTypeId: google.maps.MapTypeId.HYBRID
				  };
				  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
				  
				  // Try W3C Geolocation method (Preferred)
				  if(navigator.geolocation) {
				    browserSupportFlag = true;
				    navigator.geolocation.getCurrentPosition(function(position) {
				      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
				      contentString = "Location found using W3C standard";
				      map.setCenter(initialLocation);
				      infowindow.setContent(contentString);
				      infowindow.setPosition(initialLocation);
				      infowindow.open(map);
				    }, function() {
				      handleNoGeolocation(browserSupportFlag);
				    });
				  } else if (google.gears) {
				    // Try Google Gears Geolocation
				    browserSupportFlag = true;
				    var geo = google.gears.factory.create('beta.geolocation');
				    geo.getCurrentPosition(function(position) {
				      initialLocation = new google.maps.LatLng(position.latitude,position.longitude);
				      contentString = "Location found using Google Gears";
				      map.setCenter(initialLocation);
				      infowindow.setContent(contentString);
				      infowindow.setPosition(initialLocation);
				      infowindow.open(map);
				    }, function() {
				      handleNoGeolocation(browserSupportFlag);
				    });
				  } else {
				    // Browser doesn't support Geolocation
				    browserSupportFlag = false;
				    handleNoGeolocation(browserSupportFlag);
				  }
				}

				function handleNoGeolocation(errorFlag) {
				  if (errorFlag == true) {
				    initialLocation = newyork;
				    contentString = "Error: The Geolocation service failed.";
				  } else {
				    initialLocation = siberia;
				    contentString = "Error: Your browser doesn't support geolocation. Are you in Siberia?";
				  }
				  map.setCenter(initialLocation);
				  infowindow.setContent(contentString);
				  infowindow.setPosition(initialLocation);
				  infowindow.open(map);
				}
			});
	 
			}, 
			// next function is the error callback
			function (error)
			{
				switch(error.code) 
				{
					case error.TIMEOUT:
						alert ('Timeout');
						break;
					case error.POSITION_UNAVAILABLE:
						alert ('Position unavailable');
						break;
					case error.PERMISSION_DENIED:
						alert ('Permission denied');
						break;
					case error.UNKNOWN_ERROR:
						alert ('Unknown error');
						break;
				}
			}
			);
		}
	
	
});