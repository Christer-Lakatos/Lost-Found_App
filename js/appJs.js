$(document).ready(function() {
//	console.log(navigator.geolocation);
	if (navigator.geolocation) 
	{
		navigator.geolocation.getCurrentPosition( 
	 
			function (position) {  
			
			$('#background').css({'background-image':'url("http://maps.google.com/maps/api/staticmap?center='+position.coords.latitude+','+position.coords.longitude+'&zoom=14&size=320x480&sensor=false")'});
			
			// Did we get the position correctly?
			// alert (position.coords.latitude);
	 
			// To see everything available in the position.coords array:
			
//			for (key in position.coords) {alert(position.coords.latitude+' '+position.coords.longitude)}
//	 
//			mapServiceProvider(position.coords.latitude,position.coords.longitude);
			
			$('input[value=Karta]').click(function() {
				
				$('#background').html('').css({'background-image':'url("http://maps.google.com/maps/api/staticmap?center='+position.coords.latitude+','+position.coords.longitude+'&zoom=16&size=320x480&markers=color:red|color:red|label:K|'+position.coords.latitude+','+position.coords.longitude+'&maptype=hybrid&sensor=false")'});
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