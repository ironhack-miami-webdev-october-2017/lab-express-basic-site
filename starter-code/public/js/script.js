$(document).ready( function () {

  var homePage = $("body");
  var button = $(".btn");

  homePage.css("display", "none");
  homePage.fadeIn(5000);

  button.click( function (){
    newLocation = $('.links a').attr("href");
    homePage.fadeOut(5000, newpage);
  });
  
  function newpage() {
    window.location = newLocation;
  }
});
