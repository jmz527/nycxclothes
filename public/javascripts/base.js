jQuery(document).ready(function(){

	$('#slideshow3').cycle({ 
	    delay:  2000, 
	    speed:  500, 
	    before: onBefore 
	}); 
	 
	function onBefore() { 
	    $('#title') 
	        .html(this.alt); 
	};

});