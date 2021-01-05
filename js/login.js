
        var user=getCookie("username");
        var txt=document.getElementById("user");
        window.onload=function(){
            if (user!=""){
            txt.innerHTML="欢迎用户，"+user+"!";
        }
        else{
            txt.innerHTML="您还未登录，请先登录!";
        }
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
