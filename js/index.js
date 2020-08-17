$(function(){

	$(".im li").click(function(){
		var cl = $(this).attr("class");
		$(this).css("background-color", "#eee").siblings().css("background-color", "");
		$(this).parent().siblings().children("li").css("background-color", "");
		$(".itemo>." + cl).fadeIn();
		$(".itemo>div:not(." + cl + ")").hide();
	})
	
	$(".im img").click(function(){
		$(".itemo>div").fadeIn();
		$(".im li").css("background-color", "");
	})
	
})
