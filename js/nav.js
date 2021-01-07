$.get("./tpl/head.tpl", function(result){      
    $("#header").html(result);

    setTimeout(function(){
    var user=getCookie("username");
    var utxt=document.getElementById("usertxt");
    
        if (user!=""){
        utxt.innerHTML="欢迎用户，"+user+"!";
    }
    else{
        utxt.innerHTML="您还未登录，请先登录!";
    }
    

        
    
     
      
},100);



    
});
$("#my-slider").camRollSlider();
    function getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
        }
        return "";
    }
    function logout(){
        if (user!=""){
        document.cookie="username="+user+";expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        location.reload();
         }
var timeId;
function show(){
  window.clearInterval(timeId);
  $(".drop").css("display","block");
  timeId=setTimeout(function(){$(".drop").css("display","none");},5000);
}
