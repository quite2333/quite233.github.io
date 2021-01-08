
    var flag;
    function barinit(){
        flag=document.getElementById("my-slider");
        if(flag==null){
          setTimeout(function() {
            barinit();
          }, 150);
        }
        else{
          $("#my-slider").camRollSlider();
        }
    }
    if(flag!=null){
      $("#my-slider").camRollSlider();
    }
    else{
      barinit();
    }
    
    function gotoTop(minHeight){

        $("#gotoTop").click(
            function(){$('html,body').animate({scrollTop:'0px'},'slow');
        })

        minHeight? minHeight = minHeight:minHeight = 600;

        $(window).scroll(function(){

            var s = $(window).scrollTop();

            if( s > minHeight){
                $("#gotoTop").fadeIn(500);
            }else{
                $("#gotoTop").fadeOut(500);
            };
        });
    };
    gotoTop();
    
    setTimeout(function(){
        var user=getCookie("username");
        var utxt=document.getElementById("usertxt");
        
            if (user!=""){
            utxt.innerHTML="欢迎用户，"+user+"!";
        }
        else{
            utxt.innerHTML="您还未登录，请先登录!";
        }
        
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
          
    },100);
var timeId;
function show(){
  window.clearInterval(timeId);
  $(".drop").css("display","block");
  timeId=setTimeout(function(){$(".drop").css("display","none");},5000);
}