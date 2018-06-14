/***
 * 客户管理
 * my-client.js
 * 
 * **/


  $(function(){
  	var $width = $(".client_left_bar").width();
  	 $(".client_bar_bottom").css("width",$width);
  	  //tab
  	  $(".tab_btn").click(function(){
  	  	  var $width = $(this).width();
  	  	  var $index = $(this).index();
  	  	  $(".client_bar_bottom").css({"left":"auto","right":"auto"});
  	  	  
  	  	  if($index == 0){
  	  	  	 $(".client_bar_bottom").animate({left:0,width:$width},200);
  	  	  	 $(".share_client_box").hide();
  	  	     $(".my_client_box").show();
  	  	  }else if($index == 1){
  	  	  	$(".client_bar_bottom").animate({right:0,width:$width},200);
  	  	  	$(".my_client_box").hide();
  	  	    $(".share_client_box").show();
  	  	  }
  	  });
  })
