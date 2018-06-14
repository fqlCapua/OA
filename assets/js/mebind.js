/**
 * 绑定
 * mebind.js
 * 
 * **/

    var id = GetQueryString("id");
    
     if(id == 0){
     	$(".weixin").show();
     	
     }else if(id == 1){
     	$(".phone").show();
     	$(".phone_num").show();
     	$(".phone_btn").show();
     }else if(id == 2){
     	$(".qq").show();
     	$(".qq_num").show();
     	$(".qq_btn").show();
     }else if(id == 3){
     	$(".weibo").show();
     }
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

function GetQueryString(name) {

   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");

   var r = window.location.search.substr(1).match(reg);

   if (r!=null){
   	  return unescape(r[2]); 
   } else{
   	  return null;
   }

}