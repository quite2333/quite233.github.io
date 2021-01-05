
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
    
