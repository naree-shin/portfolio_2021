$(function(){

	$("div.contentsList>div").slick({
        autoplay: true,
        autoplaySpeed: 1200,
        dots: true,
 		variableWidth: true,
        pauseOnHover: true,
        prevArrow: false,
    nextArrow: false,
 		/*arrows: false,*/
		infinite: true,
		slidesToScroll: 2,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    }
		]   
    });
	
	



});




