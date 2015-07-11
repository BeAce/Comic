window.onload = function(){
	$(".img-people ul li img").mouseover(function(){
				$(this).animate({top:"8%"},300);
				$(this).animate({top:"2%"},300);
			})
	$(".img-people ul li img").click(function(){
		var _index = $(this).parent().index()+1;
		openNew();  
        var mask_height = $("#mask").height();
        var mask_width = $("#mask").width();
        var alert_width = mask_width*0.5;
        var alert_height = mask_height*0.6;
        $("#mask").fadeIn();        
        $("#alert").css({"background":"url('images/act-alert-"+_index+".png') no-repeat top center","background-size":"100% 100%"});
        $("#alert").animate({"width":alert_width,"height":alert_height,"left":alert_width/2.5,"top":alert_height/2.8},500);
	})
}
