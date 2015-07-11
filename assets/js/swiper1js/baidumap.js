// 百度地图API功能
$(function(){
	var map = new BMap.Map("map");            
	var point = new BMap.Point(117.03125, 36.641444);  // 创建点坐标  
	map.centerAndZoom(point, 15);       

	    
	map.enableScrollWheelZoom();          
	var pt = new BMap.Point(117.03125, 36.641444);
	
	var myIcon = new BMap.Icon("assets/img/redflag.png", new BMap.Size(32, 42), {    
		offset: new BMap.Size(10, 25),    
		anchor: new BMap.Size(10, 30)  
 });      
// 创建标注对象并添加到地图   
 	var marker = new BMap.Marker(pt, {icon: myIcon});    
 	  
map.addOverlay(marker); 

 	  
	


	 	//marker.addEventListener("click", function(o){    
//alert(o.point.lng + "," + o.point.lat); 

//});
});