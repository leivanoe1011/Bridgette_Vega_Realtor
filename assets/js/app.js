

 var scrollRange = 100;

 $(document).ready(function(){

   // Initialize the Side Nav
   $(".sidenav").sidenav();
   $(".materialboxed").materialbox();
   $(".parallax").parallax();
   $(".tabs").tabs();
   $(".datepicker").datepicker({
     disableWeekends: true
   });
   $(".tooltipped").tooltip();
   $(".scrollspy").scrollSpy();

   $(window).scroll(function(){

     if($(window).scrollTop() > scrollRange){
       $("nav").addClass("white");
       $(".brand-logo").addClass("black-text");
       $("#nav_menu a").addClass("black-text");
       $("nav").removeClass("transparent white-text");

       $("#menu_icon").addClass("black-text");
     }else{
       $("nav").addClass("transparent white-text");
       $(".brand-logo").removeClass("black-text");
       $("#nav_menu a").removeClass("black-text");

       $("#menu_icon").removeClass("black-text");
     }

   });

 });