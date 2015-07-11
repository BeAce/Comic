$(function(){
$.fn.Fontadaptive = function(options) {
	var windowwidth=$(window).width();

    var defaults = {
        'fontSizerate': 0.1
    };
    var settings = $.extend({},defaults, options);
    var Sizerate=settings.fontSizerate*windowwidth;
    return this.css({
        'font-Size': Sizerate
    });
}

});