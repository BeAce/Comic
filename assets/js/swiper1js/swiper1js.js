var candywidth=$("#candy").width();
var candyheight=$("#candy").height();
//
	var originalpixelhead = new Array();
	var originalpixelhair = new Array();
	var originalpixelhair1 = new Array();
	var originalpixelhair2 = new Array();
	var originalpixelhair3 = new Array();
	var originalpixelbell = new Array();
	var originalpixelbody = new Array();
	var originalpixelpage2candy = new Array();
//originalpixel
	var pixelratehead = new Array();
	var pixelratehair = new Array();
	var pixelratehair1 = new Array();
	var pixelratehair2 = new Array();
	var pixelratehair3 = new Array();
	var pixelratebell = new Array();
	var pixelratebody = new Array();
	var pixelratepage2candy = new Array();
//pixelrate
	var finalpixelhead = new Array();
	var finalpixelhair = new Array();
	var finalpixelhair1 = new Array();
	var finalpixelhair2 = new Array();
	var finalpixelhair3 = new Array();
	var finalpixelbell = new Array();
	var finalpixelbody = new Array();
	var finalpixelpage2candy = new Array();
//finalpixel
	var widthorheight;
	var coordshead=$(".candyhead").attr("coords");
	var coordshair=$(".candyhair").attr("coords");
	var coordshair1=$(".candyhair1").attr("coords");
	var coordshair2=$(".candyhair2").attr("coords");
	var coordshair3=$(".candyhair3").attr("coords");
	var coordsbell=$(".bell").attr("coords");
	var coordscandybody=$(".candybody").attr("coords");
	var coordspage2candy =$(".page2candy").attr("coords");
//console.log();
	originalpixelhead=coordshead.split(",");
	originalpixelhair=coordshair.split(",");
	originalpixelhair1=coordshair1.split(",");
	originalpixelhair2=coordshair2.split(",");
	originalpixelhair3=coordshair3.split(",");
	originalpixelbell=coordsbell.split(",");
	originalpixelbody=coordscandybody.split(",");
	originalpixelpage2candy=coordspage2candy.split(",");


	pixelratehead=areachangerate(originalpixelhead);
	pixelratehair=areachangerate(originalpixelhair);
	pixelratehair1=areachangerate(originalpixelhair1);
	pixelratehair2=areachangerate(originalpixelhair2);
	pixelratehair3=areachangerate(originalpixelhair3);
	pixelratebell=areachangerate(originalpixelbell);
	pixelratebody=areachangerate(originalpixelbody);
	pixelratepage2candy=areachangerate(originalpixelpage2candy);

	finalpixelhead = finalpixel(pixelratehead,candywidth,candyheight);
	finalpixelhair = finalpixel(pixelratehair,candywidth,candyheight);
	finalpixelhair1 = finalpixel(pixelratehair1,candywidth,candyheight);
	finalpixelhair2 = finalpixel(pixelratehair2,candywidth,candyheight);
	finalpixelhair3 = finalpixel(pixelratehair3,candywidth,candyheight);
	finalpixelbell = finalpixel(pixelratebell,candywidth,candyheight);
	finalpixelbody = finalpixel(pixelratebody,candywidth,candyheight);
	finalpixelpage2candy=finalpixel(pixelratepage2candy,candywidth,candyheight);


function finalpixel(arrayrate,width,height){
	var finalpixel = new Array();
	for (i=0;i<arrayrate.length ;i++ ) 
{ 
	widthorheight=i%2;
	if(widthorheight==0){finalpixel[i]=arrayrate[i]*width;}
	else if(widthorheight==1){finalpixel[i]=arrayrate[i]*height;}
		
} 

return finalpixel;
}



function areachangerate(array){
	var pixelratehead = new Array();
	for (i=0;i<array.length ;i++ ) 
{ 
	widthorheight=i%2;
	if(widthorheight==0){pixelratehead[i]=array[i]/400;}
	else if(widthorheight==1){pixelratehead[i]=array[i]/500;}
		
} 

return pixelratehead;
}
	finalpixelhead = finalpixel(pixelratehead,candywidth,candyheight);
	finalpixelhair = finalpixel(pixelratehair,candywidth,candyheight);
	finalpixelhair1 = finalpixel(pixelratehair1,candywidth,candyheight);
	finalpixelhair2 = finalpixel(pixelratehair2,candywidth,candyheight);
	finalpixelhair3 = finalpixel(pixelratehair3,candywidth,candyheight);
	finalpixelbell = finalpixel(pixelratebell,candywidth,candyheight);
	finalpixelbody = finalpixel(pixelratebody,candywidth,candyheight);
	finalpixelpage2candy=finalpixel(pixelratepage2candy,candywidth,candyheight);

$(".candyhead").attr("coords",finalpixelhead);
	$(".candyhair").attr("coords",finalpixelhair);
	$(".candyhair1").attr("coords",finalpixelhair1);
	$(".candyhair2").attr("coords",finalpixelhair2);
	$(".candyhair3").attr("coords",finalpixelhair3);
	$(".bell").attr("coords",finalpixelbell);
	$(".candybody").attr("coords",finalpixelbody);
	$(".page2candy").attr("coords",finalpixelpage2candy);
//

constrain("#buyticket",200,94);//start logoshow
var buyticketheight=$("#buyticket").height();
	$("#buyticket img").css("height",buyticketheight-1);
constrain("#logoshow",10,7);//start logoshow
constrain("#navtitle",683,35);
constrain("#navtitle1",683,35);
constrain("#navtitle2",683,35);
constrain("#navtitle3",683,35);
constrain("#navtitle4",683,35);
constrain("#navtitle5",683,35);
constrain("#navtitle6",683,35);

constrain(".nav-1",683,35);
constrain(".nav-2",683,35);
constrain(".nav ul",990,53);	//start nav 
constrain("span",990,53);
constrain(".logoimg",143,25);
constrain(".logo",32,7);
constrain("#candy",4,5);
constrain("#handtip",87,88);
//header	

constrain(".videotitle",683,35);
constrain(".top",683,35);
//videotitle
constrain(".name-decoration",222,60);
constrain(".img-box img",132,132);
constrain(".activitytitle1",683,35);

//actyvity1

constrain(".activitytitle2",683,35);
//map
constrain("#map",612,455);
constrain("#mapbox",612,455);
constrain(".alertway",200,176);

	constrain(".img-people",1092,515);
	constrain(".img-people img.img-people1",271,450);
	constrain(".img-people img.img-people2",468,530);
	constrain(".img-people img.img-people3",230,420);
	constrain(".img-people img.img-people4",360,471);
//actyvity2
constrain(".needtitle",683,35);
constrain(".need-title1",230,39);	
constrain(".need-title2",230,39);
constrain(".download-href a img",244,80);constrain("#video_swf",326,200);
constrain(".contact",683,35);
constrain(".imfornpc",100,65);
constrain(".imfornpc-com",362,500);
constrain(".erweima",480,513);
constrain(".erweima",480,513);
constrain(".logoimg-box",580,461);
constrain(".logoimg-box ul.logoimg-box1",272,444);
constrain(".logoimg-box ul.logoimg-box2",272,444);
constrain("ul.logoimg-box2 li",305,111);
constrain("ul.logoimg-box1 li",305,111);
constrain(".copyright",1366,80);
//need	

$(window).resize(function() { 
candywidth=$("#candy").width();
candyheight=$("#candy").height();


	finalpixelhead = finalpixel(pixelratehead,candywidth,candyheight);
	finalpixelhair = finalpixel(pixelratehair,candywidth,candyheight);
	finalpixelhair1 = finalpixel(pixelratehair1,candywidth,candyheight);
	finalpixelhair2 = finalpixel(pixelratehair2,candywidth,candyheight);
	finalpixelhair3 = finalpixel(pixelratehair3,candywidth,candyheight);
	finalpixelbell = finalpixel(pixelratebell,candywidth,candyheight);
	finalpixelbody = finalpixel(pixelratebody,candywidth,candyheight);
	finalpixelpage2candy=finalpixel(pixelratepage2candy,candywidth,candyheight);
constrain("#buyticket",200,94);//start logoshow
var buyticketheight=$("#buyticket").height();
	$("#buyticket img").css("height",buyticketheight-1);
	constrain("#logoshow",10,7);
	constrain("#navtitle",683,35);
constrain("#navtitle1",683,35);
constrain("#navtitle2",683,35);
constrain("#navtitle3",683,35);
constrain("#navtitle4",683,35);
constrain("#navtitle5",683,35);
constrain("#navtitle6",683,35);

	//logoshow self-adaption
	constrain(".nav-1",683,35);
	constrain(".nav-2",683,35);
	//header-1 self-adaption
	constrain(".nav ul",990,53);
	//nav self-adaption
	constrain(".logo",32,7);
	constrain("#candy",4,5);
	constrain(".logoimg",143,25);

	$(".candyhead").attr("coords",finalpixelhead);
	$(".candyhair").attr("coords",finalpixelhair);
	$(".candyhair1").attr("coords",finalpixelhair1);
	$(".candyhair2").attr("coords",finalpixelhair2);
	$(".candyhair3").attr("coords",finalpixelhair3);
	$(".bell").attr("coords",finalpixelbell);
	$(".candybody").attr("coords",finalpixelbody);
	$(".page2candy").attr("coords",finalpixelpage2candy);
candywidth=$("#candy").width();
candyheight=$("#candy").height();

	finalpixelhead = finalpixel(pixelratehead,candywidth,candyheight);
	finalpixelhair = finalpixel(pixelratehair,candywidth,candyheight);
	finalpixelhair1 = finalpixel(pixelratehair1,candywidth,candyheight);
	finalpixelhair2 = finalpixel(pixelratehair2,candywidth,candyheight);
	finalpixelhair3 = finalpixel(pixelratehair3,candywidth,candyheight);
	finalpixelbell = finalpixel(pixelratebell,candywidth,candyheight);
	finalpixelbody = finalpixel(pixelratebody,candywidth,candyheight);
	finalpixelpage2candy=finalpixel(pixelratepage2candy,candywidth,candyheight);

$(".candyhead").attr("coords",finalpixelhead);
	$(".candyhair").attr("coords",finalpixelhair);
	$(".candyhair1").attr("coords",finalpixelhair1);
	$(".candyhair2").attr("coords",finalpixelhair2);
	$(".candyhair3").attr("coords",finalpixelhair3);
	$(".bell").attr("coords",finalpixelbell);
	$(".candybody").attr("coords",finalpixelbody);
	$(".page2candy").attr("coords",finalpixelpage2candy);

constrain("#handtip",87,88);
	//header index
	constrain(".videotitle",683,35);
	//videotitle
	constrain(".activitytitle1",683,35);
	constrain("#map",612,455);
	constrain("#mapbox",612,455);
	constrain(".alertway",200,176);
	//actyvity1
	constrain(".activitytitle2",683,35);
	constrain(".name-decoration",222,60);
	constrain(".img-box img",132,132);
	//actyvity2
	constrain(".img-people",1092,515);
	constrain(".img-people img.img-people1",271,450);
	constrain(".img-people img.img-people2",468,530);
	constrain(".img-people img.img-people3",230,420);
	constrain(".img-people img.img-people4",360,471);
	constrain(".top",683,35);
	constrain(".needtitle",683,35);
	constrain(".need-title1",230,39);	
	constrain(".need-title2",230,39);
	constrain(".download-href a img",244,80);constrain("#video_swf",326,200);
	constrain(".contact",683,35);
	constrain(".imfornpc",100,65);
	constrain(".imfornpc-com",362,500);
	constrain(".erweima",480,513);
	constrain(".logoimg-box",580,461);
	constrain(".logoimg-box ul.logoimg-box1",272,444);
	constrain(".logoimg-box ul.logoimg-box2",272,444);
	constrain("ul.logoimg-box2 li",305,111);
	constrain("ul.logoimg-box1 li",305,111);
	//need
	constrain(".copyright",1366,80);
});//resize function


var animatecontrol=0;
$("#buyticket img").mouseover(function(){
	if(animatecontrol==0)
	{	
		$("#buyticket img").attr("src","./assets/img/buyticket.png");
		animatecontrol=1;
			$("#buyticket").animate({width:"25.4%"});
	}
});

$("#buyticket img").mouseout(function(){
	if(animatecontrol==1)
	{	
		animatecontrol=2;
		$("#buyticket").animate({width:"12.5%"},function(){animatecontrol=0;$("#buyticket img").attr("src","./assets/img/buyticket0.png").css("height",buyticketheight-1);});
	}
});//buyticket animate

var handcontrol=0;
function handmove(){$("#handtip").animate({left:"29%",top:"17%"},function(){ $("#handtip").animate({left:"30%",top:"15%"},function(){handmove();})});}
//$("#handtip").mouseover(function(){ 
	// handcontrol=0;
	//if(handcontrol==0){
	handmove();
//}
//});

//$("#handtip").mouseout(function(){$("#handtip").stop();});


$.post('', {}, function( data ) {
var  swipercount=0;
$(".swiper-pagination-bullet").each(function(){
	$(this).attr("id",swipercount);
	swipercount++;
});// set swiperpoint id
});//ajax downspeed



var headercontrol=0;
$("body").mouseover(function(e){
	var h2height=$(".nav-2").height();

	var ev = e.clientY || window.event.y; 
	
	if(ev<h2height)
		{
			if(headercontrol==0)
			{	
				headercontrol=1;
				$(".nav-2").animate({opacity:1.0},500);
			}
	}
	else{
			if(headercontrol==1)
			{	
				headercontrol=2;
				$(".nav-2").animate({opacity:0.0},function(){headercontrol=0;});
			}
	}
});

function constrain(name,widthscale,heightscale){
	var width,height;
	width = $(name).width();
	height = (width/widthscale)*heightscale;
	$(name).css("height",height+"px");
	//start logoshow
}

$("#map").hover(function(){
	$(".alertway").stop(true,true).fadeIn();
},function(){
	$(".alertway").stop(true,true).fadeOut();
});//mapShow

//头部点击
var _index1 = 0;
$(".candyhead").click(function(){

	for(var audios1 = 4; audios1<21; audios1++){
		$("audio")[audios1].pause();
	}

	if(_index1==4){_index1 = 0;}
	_index1++;
	var aduios_head = $("#audio-head-"+_index1+"")[0];
	var $audios1 = $("audio")[0];
	var $audios2 = $("audio")[1];
	var $audios3 = $("audio")[2];
	var $audios4 = $("audio")[3];
	
	switch(_index1){
		case 1:
			$("#candytalk").html("啊恩，大家好，我是糖糖，算是。。。。展娘吧。");
			$("#handtip").css({"display":"none"});
			aduios_head.currentTime = 0;
			$audios4.pause();
			aduios_head.play();
			break;
		case 2:
			$("#candytalk").html("如果不来看我，就不理你了啊，哼。。。");
			aduios_head.currentTime = 0;
			$audios1.pause();
			//$("#audio-head-"+1+"")[0].pause();
			aduios_head.play();
			break;
		case 3:
			$("#candytalk").html("唉，这台词还真是，恩。。。傲娇？大概就是这样的感觉吧。");
			aduios_head.currentTime = 0;
			$audios2.pause();
			//$("#audio-head-2")[0].pause();
			aduios_head.play();
			break;
		case 4:
			$("#candytalk").html("傲娇真的可以吗？感觉自己不是这种属性啊。");
			aduios_head.currentTime = 0;
			$audios3.pause();
			//$("#audio-head-3")[0].pause();
			aduios_head.play();		
			break;
	}	
})

var _index2=0;
$(".candyhair").click(function(){
	for(var audios2 = 0; audios2< 4; audios2++){
		$("audio")[audios2].pause();
	}
	for(var _audios2 = 9; _audios2< 21; _audios2++){
		$("audio")[_audios2].pause();
	}
	if(_index2==5){_index2 = 0;}
	_index2++;
	var aduios_head = $("#audio-hair-"+_index2+"")[0];
	var $audios5 = $("audio")[4];
	var $audios6 = $("audio")[5];
	var $audios7 = $("audio")[6];
	var $audios8 = $("audio")[7];
	var $audios9 = $("audio")[8];
	switch(_index2){
		case 1:
			$("#candytalk").html("啊恩，大家好，我是糖糖，算是。。。。展娘吧。");
			$("#handtip").css({"display":"none"});
			aduios_head.currentTime = 0;
			//$("#audio-hair-5")[0].pause();
			$audios9.pause();
			aduios_head.play();
			break;
		case 2:
			$("#candytalk").html("呜喵~~~喵？那个。。。。（翻纸声）喵？");
			aduios_head.currentTime = 0;
			$audios5.pause();
			//$("#audio-head-"+1+"")[0].pause();
			aduios_head.play();
			break;
		case 3:
			$("#candytalk").html("导演说这是口癖啥的。。让我以后在说话的时候加上喵，因为这样比较萌喵，这样就可以了吗喵？");
			aduios_head.currentTime = 0;
			$audios6.pause();
			//$("#audio-head-2")[0].pause();
			aduios_head.play();
			break;
		case 4:
			$("#candytalk").html("喵（一声）喵（二声）喵（三声）喵（四声）");
			aduios_head.currentTime = 0;
			$audios7.pause();
			//$("#audio-head-3")[0].pause();
			aduios_head.play();		
			break;
		case 5:
			$("#candytalk").html("呀呀，莫名的有趣喵，但好像。。对这个喵。。有点不好的记忆呢喵。");
			aduios_head.currentTime = 0;
			$audios8.pause();
			//$("#audio-head-3")[0].pause();
			aduios_head.play();		
			break;
	}	
})


var _index3=0;
$(".bell").click(function(){
	for(var audios3 = 0; audios3< 9; audios3++){
		$("audio")[audios3].pause();
	}
	for(var _audios3 = 15; _audios3< 21; _audios3++){
		$("audio")[_audios3].pause();
	}
	if(_index3==6){_index3 = 0;}
	_index3++;
	var aduios_head = $("#audio-bell-"+_index3+"")[0];
	var $audios10 = $("audio")[9];
	var $audios11= $("audio")[10];
	var $audios12 = $("audio")[11];
	var $audios13 = $("audio")[12];
	var $audios14 = $("audio")[13];
	var $audios15 = $("audio")[14];
	switch(_index3){
		case 1:
			$("#candytalk").html("Duang~duang~duang~duang~");
			$("#handtip").css({"display":"none"});
			aduios_head.currentTime = 0;
			//$("#audio-hair-5")[0].pause();
			$audios15.pause();
			aduios_head.play();
			break;
		case 2:
			$("#candytalk").html("啊，对，是铃铛啊。。。。。ding…ding…ding….ding…");
			aduios_head.currentTime = 0;
			$audios10.pause();
			//$("#audio-head-"+1+"")[0].pause();
			aduios_head.play();
			break;
		case 3:
			$("#candytalk").html("ding  ding  ding  ding  ding  ding  ding ");
			aduios_head.currentTime = 0;
			$audios11.pause();
			//$("#audio-head-2")[0].pause();
			aduios_head.play();
			break;
		case 4:
			$("#candytalk").html("其实我是一只狼哦。。。恩，和家人住在一起，虽然他们都是猫咪恩。");
			aduios_head.currentTime = 0;
			$audios12.pause();
			//$("#audio-head-3")[0].pause();
			aduios_head.play();		
			break;
		case 5:
			$("#candytalk").html("但是原因导演不然说呢。。他说：这才是买点啊，啊哈哈哈哈！。这样。");
			aduios_head.currentTime = 0;
			$audios13.pause();
			//$("#audio-head-3")[0].pause();
			aduios_head.play();		
			break;
		case 6:
			$("#candytalk").html("会不会有人觉得我像某个一月的某个番的某个不起眼的女主呢？嘛嘛。。。如果像的话那就是因为某个主办方成员的特殊性癖呢。");
			aduios_head.currentTime = 0;
			$audios14.pause();
			//$("#audio-head-3")[0].pause();
			aduios_head.play();		
			break;
	}	
})


var _index4=0;
$(".candybody").click(function(){
	for(var audios4 = 0; audios4<15; audios4++){
		$("audio")[audios4].pause();
	}
	if(_index4==6){_index4 = 0;}
	_index4++;
	var aduios_head = $("#audio-body-"+_index4+"")[0];
	var $audios16 = $("audio")[15];
	var $audios17 = $("audio")[16];
	var $audios18 = $("audio")[17];
	var $audios19 = $("audio")[18];
	var $audios20 = $("audio")[19];
	var $audios21 = $("audio")[20];
	switch(_index4){
		case 1:
			$("#candytalk").html("啊恩，大家好，我是糖糖，算是。。。。展娘吧。");
			$("#handtip").css({"display":"none"});
			if (aduios_head.readyState==1) {
				aduios_head.currentTime = 0;
			}
			//$("#audio-hair-5")[0].pause();
			$audios21.pause();
			aduios_head.play();
			break;
		case 2:
			$("#candytalk").html("说起来，现在我还是有点弄不清状况呢。");
				if (aduios_head.readyState==2) {
				aduios_head.currentTime = 0;
			}
			$audios16.pause();
			//$("#audio-head-"+1+"")[0].pause();
			aduios_head.play();
			break;
		case 3:
			$("#candytalk").html("两天前在街上，突然被一个带着墨镜的犬系大叔搭讪了，聊了几句突然对天长啸：没错！！！就是你啊哈哈哈哈哈哈！");
				if (aduios_head.readyState==3) {
				aduios_head.currentTime = 0;
			}
			$audios17.pause();
			//$("#audio-head-2")[0].pause();
			aduios_head.play();
			break;
		case 4:
			$("#candytalk").html("那奇怪的大叔要了家长的，哦我姐姐的电话，姐姐好像非常开心的答应了啥。");
			if (aduios_head.readyState==4) {
				aduios_head.currentTime = 0;
			}
			$audios18.pause();
			//$("#audio-head-3")[0].pause();
			aduios_head.play();		
			break;
		case 5:
			$("#candytalk").html("然后，我就在这里了，唔，应该是当展娘是吧，（翻纸声），就是台词有点奇怪呢。");
			if (aduios_head.readyState==5) {
				aduios_head.currentTime = 0;
			}
			$audios19.pause();
			//$("#audio-head-3")[0].pause();
			aduios_head.play();		
			break;
		case 6:
			$("#candytalk").html("啊嘞。。。。我是不是好像被姐姐卖了？");
			if (aduios_head.readyState==6) {
				aduios_head.currentTime = 0;
			}
			$audios20.pause();
			//$("#audio-head-3")[0].pause();
			aduios_head.play();		
			break;
	}	
})


$(".page2candy").click(function(){
	$("#candytalk2").html("安心看视频不要点我！");
});
