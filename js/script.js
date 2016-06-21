$(document).ready(function(){
	//$('#button').click()
   //$('html').css('background-image', 'url(images/BG.jpg)');
   $('.materialboxed').materialbox();
   $('.carousel').carousel({
   			dist:0,
            shift:0,
            padding:30,
            //full_width: true;


   });
   $('.carousel').hide();
  // $('.carousel').full_width();
   $('#button').click(function(){
   		$('.carousel').show();
   		$('#button').addClass();
   		

   });
   


});
