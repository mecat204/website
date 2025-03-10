// JavaScript Document
(function($){
	$.fn.miaovTab=function(){
		
		var This=this;
		
		$(this).find('input').click(function(){
			$(This).find('input').attr('class','');
			$(This).find('div').css('display','none');
			
			$(this).attr('class','active');	
			$(This).find('div').eq($(this).index()).css('display','block');
		});	
	}
})(jQuery);