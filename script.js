$(document).ready(function(){
    $(".webbtn").css("color", "#03203C");

    $(".logobtn").click(function(){
    $(this).css("color", "#03203C");
    $(".webbtn").css("color", "rgba(3, 32, 60, 0.7)");
    $(".webcontainer").hide();
    $(".logocontainer").show();
});

$(".webbtn").click(function(){
    $(this).css("color", "#03203C");
    $(".logobtn").css("color", "rgba(3, 32, 60, 0.7)");
    $(".logocontainer").hide();
    $(".webcontainer").show();
});

$(".next").on("click", function(){
    let currentImg = $(".active");
    let nextImg = currentImg.next();
    
    if(nextImg.length === 0) {
      currentImg.removeClass("active");
      $(".logoslide").first().addClass("active");
       } else {
         currentImg.removeClass("active");
         nextImg.addClass("active");
       }
  });

$(".prev").on("click", function (){
    let currentImg = $(".active");
    let prevImg = currentImg.prev();

    if(prevImg.length === 0) {
        currentImg.removeClass("active");
        $(".logoslide").last().addClass("active");
    } else {
        currentImg.removeClass("active");
        prevImg.addClass("active");
    }
});


$("#viewlogo").on("click", function (){
    $(".webcontainer").hide();
    $(".logocontainer").show();
    $(".logobtn").css("color", "#03203C");
    $(".webbtn").css("color", "rgba(3, 32, 60, 0.7)");
});

});