$(document).ready(function() {
	var latitude = 0;
	var longitude = 0;
//	alert(navigator.platform);
	if (navigator.platform == "Linux armv7l" || navigator.platform == "iPhone"){
		navigator.geolocation.getCurrentPosition(function (position){
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
			$('#home').css({'background-image':'url("http://maps.google.com/maps/api/staticmap?center='+latitude+','+longitude+'&zoom=14&size=320x480&sensor=false")'});
			$('#map_button').click(function() {
				initialize();
			});
		});
	}else{
		$.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data){

//			console.log(data.geoplugin_latitude);
				latitude = data.geoplugin_latitude;
				longitude = data.geoplugin_longitude;
				$('#home').css({'background-image':'url("http://maps.google.com/maps/api/staticmap?center='+latitude+','+longitude+'&zoom=13&size=320x480&sensor=false")'});
				$('#map_button').click(function() {
					initialize();
				});
			});
			
//		});
	}
	
	function initialize() {
		var latlng = new google.maps.LatLng(latitude, longitude);
		var myOptions = {
				zoom: 13,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map_page"),
				myOptions);
		var image = 'images/lost-icon.png';
		var myLatLng = new google.maps.LatLng(latitude, longitude);
		var beachMarker = new google.maps.Marker({
		      position: latlng,
		      map: map,
		      icon: image
		});

	}
});