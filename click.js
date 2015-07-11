var mask_height = $("#mask").height();
var mask_width = $("#mask").width();
var alert_width = mask_width*0.5;
var alert_height = mask_height*0.6;
function clickAction(i){
    for(var num = 1; num < i; num++ )
        $(".img-box2  .img"+num+"").click(function(){
            openNew();
            $("#mask").fadeIn();        
            $("#alert").css({"background":"url(./assets/img/stars/2-"+num+".png) no-repeat top center","background-size":"100% 100%"});
            $("#alert").animate({"width":alert_width,"height":alert_height,"left":alert_width/2,"top":alert_height/2.8},500);
        });
}
clickAction(7);   