/**
 * book.js
 * 
 * **/

   //下拉列表
   var slide_state =true;
  $(".book_head_content").click(function(){
//	 var aaa =  $(this).siblings(".book_ul_box")
     $(this).parent(".book_list_box").siblings().children(".book_ul_slide").slideUp();
  	 if(slide_state){
  	 	 slide_state =false;
  	     $(this).siblings(".book_ul_box").slideToggle(function(){
  	  	  slide_state =true;
  	  });
  	 }
  	  
  });

