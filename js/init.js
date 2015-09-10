$(document).ready(function(){
	// init
	var $container = $('#container').isotope({resizable: true});
	$('#filtersTopSmph').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	});
	$("#rightPanel").hide();
	applyResize();
	$(window).resize(function() {
		if($("#linksPanel").is(":visible")){
			applyResize();
		}
	});
	function applyResize(){
		var winsize= $(window).width();
		if(winsize>0 & winsize < 859){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
		}
		if(winsize>860 & winsize < 1151){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
		}
		if(winsize>1152 & winsize < 1322){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
		}
		if(winsize>1323 & winsize < 1482){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
		}
		if(winsize>1483 & winsize < 1759){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
		}
		if(winsize>1760 & winsize < 2000){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
		}
	}
	
	$("#collapseOut").click(function () {
		var winsize= $(window).width();
		if(winsize>0 & winsize < 859){
			$("#linksPanel").width("12%");
			$("#content").width("63%");
            $(".rightColumn").css('display', 'none');
            $(".leftColumn").css('width', '20%');
            $(".muro").css('width', '70%');
		}
		if(winsize>860 & winsize < 1151){
			$("#linksPanel").width("12%");
			$("#content").width("63%");
            $(".rightColumn").css('display', 'none');
            $(".leftColumn").css('width', '20%');
            $(".muro").css('width', '70%');
		}
		if(winsize>1152 & winsize < 1322){
			$("#linksPanel").width("12%");
			$("#content").width("68%");
            $(".rightColumn").css('display', 'none');
            $(".leftColumn").css('width', '20%');
            $(".muro").css('width', '70%');
		}
		if(winsize>1323 & winsize < 1482){
			$("#linksPanel").width("30%");
			$("#content").width("70%");
		}
		if(winsize>1483 & winsize < 1759){
			$("#linksPanel").width("20%");
			$("#content").width("75%");
		}
		if(winsize>1760 & winsize < 2000){
			$("#linksPanel").width("20%");
			$("#content").width("75%");
		}
		$("#linksPanel").hide();
		$("#rightPanel").show();
		$container.isotope( 'reloadItems' ).isotope();
	});
	$("#collapseIn").click(function () {
		var winsize= $(window).width();
		if(winsize>0 & winsize < 859){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
            $(".rightColumn").css('display', 'block');
            $(".rightColumn").css('float', 'right');
            $(".leftColumn").css('width', '12%');
            $(".muro").css('width', '60%');  
		}
		if(winsize>860 & winsize < 1151){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
            $(".rightColumn").css('display', 'block');
            $(".rightColumn").css('float', 'right');
            $(".leftColumn").css('width', '12%');
            $(".muro").css('width', '60%');            
		}
		if(winsize>1152 & winsize < 1322){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
            $(".rightColumn").css('display', 'block');
            $(".rightColumn").css('float', 'right');
            $(".leftColumn").css('width', '12%');
            $(".muro").css('width', '60%');  
		}
		if(winsize>1323 & winsize < 1482){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
		}
		if(winsize>1483 & winsize < 1759){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
		}
		if(winsize>1760 & winsize < 2000){
			$("#linksPanel").width("4%");
			$("#content").width("95%");
		}
		$("#linksPanel").show();
		$("#rightPanel").hide();
		$container.isotope( 'reloadItems' ).isotope();	
	});
});
/* end document ready */



