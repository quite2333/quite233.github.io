$.get("./tpl/head.tpl", function(result){      
    $("#header").html(result);
    $("#my-slider").camRollSlider();
});
var timeId;
function show(){
  window.clearInterval(timeId);
  $(".drop").css("display","block");
  timeId=setTimeout(function(){$(".drop").css("display","none");},5000);
}