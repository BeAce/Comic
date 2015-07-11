function swiper2(){

    var img_width = $(".img-box .img1").width();
    $(".img-box img").css({"left":-img_width-8});
    var body_width = $(document).width();
    var count = 8;
    var left1=body_width/count-img_width/2;
    var left2=2*(body_width/count)-img_width/2;
    var left3=3*(body_width/count)-img_width/2;
    var left4=4*(body_width/count)-img_width/2;
    var left5=5*(body_width/count)-img_width/2;
	var left6=6*(body_width/count)-img_width/2;
	var left7=7*(body_width/count)-img_width/2;
	var top2=$(".img-box2 .img1").offset().top;
	var top1=$(".img-box1 .img1").offset().top;
	var top3=$(".img-box3 .img1").offset().top;
	var left0=left4+$(".img-box1 .img4").width();
    var nd_width = $(".name-decoration").width();
	var nd_width2 = $(".name-decoration2").width();
    var i=1;
 //划出效果开始
    function scoller(i){
        var _img = $(".img-box"+i+"");
        for(var num= 1; num<=7;num++){
        	var times = 1000-(num-1)*100;
        	var _left = num*(body_width/count)-img_width/2; 
    		_img.find(".img"+num+"").stop(true,false).animate({"left":_left},times);
        }
    }

    scoller(i);
    setInterval(function(){
        i++;
        scoller(i);
    },500);
  //划出效果结束

//第一行
   	hover(".img-box1 .img1",left1,"url(./assets/img/namedecoration/xxbk.png) no-repeat top center",top1);
    hover(".img-box1 .img2",left2,"url(./assets/img/namedecoration/xsk.png) no-repeat top center",top1);
    hover(".img-box1 .img3",left3,"url(./assets/img/namedecoration/ykmk.png) no-repeat top center",top1);
	hover(".img-box1 .img6",left6,"url(./assets/img/namedecoration/cck.png) no-repeat top center",top1);
	hover(".img-box1 .img7",left7,"url(./assets/img/namedecoration/ssk.png) no-repeat top center",top1);
	
	//第二行 i 循环次数 classname选择器名 imgIndex图片列 _top定位
	function forsOfImg(i,className,imgIndex,_top){
		for(var _index = 1;_index<=i;_index++){
			var _left = _index*(body_width/count)-img_width/2; 
			hover(className+_index+"",_left,"url(./assets/img/namedecoration/"+imgIndex+"-"+_index+".png) no-repeat top center",_top);
		}
	}
	forsOfImg(7,".img-box2 .img",2,top2);
	forsOfImg(7,".img-box3 .img",3,top3);


	$(".img-box1 .img4,.img-box1 .img5").hover(function(){
		$(".name-decoration4,.name-decoration3,.name-decoration5").css({"left":left0-(nd_width2/2)+img_width/2,"background-size":"100% 100%"});
		$(".name-decoration4,.name-decoration3,.name-decoration5").stop(true,true).fadeIn();	
	},function(){
		$(".name-decoration4,.name-decoration3,.name-decoration5").stop(true,true).fadeOut();
	});
    function hover(className,left,background_images,top){
        	$(className).hover(function(){
    		$(".name-decoration").css({"left":left-nd_width/2+img_width/2,"background":background_images,"background-size":"100% 100%","top":top});
    		$(".name-decoration").stop(true,true).fadeIn();	
    	},function(){
			$(".name-decoration").css({"left":left-nd_width/2+img_width/2});
    		$(".name-decoration").stop(true,true).fadeOut();
		});
	}
	
}
//弹窗效果

function openNew(){
	//获取页面的高度和宽度
	var sWidth=document.body.scrollWidth;
	var sHeight=document.body.scrollHeight;
	//获取页面的可视区域高度和宽度
	var wHeight=document.documentElement.clientHeight;
	
	var oMask=document.createElement("div");
		oMask.id="mask";
		oMask.style.height=sHeight+"px";
		oMask.style.width=sWidth+"px";
		document.body.appendChild(oMask);
	var oLogin=document.createElement("div");
		var innerHTML = oLogin.innerHTML;
		oLogin.id="alert";
		oLogin.innerHTML="<div id='close'></div>";		
		document.body.appendChild(oLogin);
	//获取框的宽和高
	var dHeight=oLogin.offsetHeight;
	var dWidth=oLogin.offsetWidth;
		//设置框的left和top
		oLogin.style.left=sWidth/2-dWidth/2+"px";
		oLogin.style.top=wHeight/2-dHeight/2+"px";
	//点击关闭按钮
	var oClose=document.getElementById("close");
		//点击框以外的区域也可以关闭框
		oMask.onclick=oClose.onclick=function(){
			document.body.removeChild(oLogin);
			document.body.removeChild(oMask);
		};
	};	



