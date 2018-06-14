/***
 * 债事资料
 * inforation.js
 * 
 * **/


  $(function(){
  	var $width = $(".information_left_bar").width();
  	 $(".information_bar_bottom").css("width",$width);
  	  //tab
  	  $(".tab_btn").click(function(){
  	  	  var $width = $(this).width();
  	  	  var $index = $(this).index();
  	  	  $(".information_bar_bottom").css({"left":"auto","right":"auto"});
  	  	  
  	  	  if($index == 0){
  	  	  	 $(".information_bar_bottom").animate({left:0,width:$width},200);
  	  	  	 $(".share_information_box").hide();
  	  	     $(".my_information_box").show();
  	  	  }else if($index == 1){
  	  	  	$(".information_bar_bottom").animate({right:0,width:$width},200);
  	  	  	$(".my_information_box").hide();
  	  	    $(".share_information_box").show();
  	  	  }
  	  });
  })
