/**
 * home.js
 * ***/


// href  link 链接
$(".home_body ._content ").click(function(){
       var Html =  $(this).siblings(".sub").text();
       var Link =  $(this).data("link");
       console.log(Html);
       console.log(Link);
       href_link(Link) //链接
});



// href_link 链接
 function href_link(Link){
 	  window.location.href = Link;
 }
