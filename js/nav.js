var flag=fasle;
$.get("./tpl/head.tpl", function(result){      
    $("#header").html(result);
});
flag=true;

