/**
 * main.js
 * 
 * **/

;$(function(){
	
	var hash_val  = window.location.hash;
	if(hash_val == "#book"){
		$(".book1").siblings().removeClass("mui-active");
		$(".Home").removeClass("icon-shouye1").addClass("icon-shouyexianxing");
	 	$(".Me").addClass("icon-wo").removeClass("icon-wocur");
	 	$(".book1").addClass("mui-active");
	 	$(".book1").find(".iconfont").removeClass("icon-tongxunlu01").addClass("icon-tongxunluintouch01");
	    $(".mui-title").text("通讯录");
	}else if(hash_val == "#me"){
		$(".me1").siblings().removeClass("mui-active");
		$(".Home").removeClass("icon-shouye1").addClass("icon-shouyexianxing");
	 	$(".Book").addClass("icon-tongxunlu01").removeClass("icon-tongxunluintouch01");
	 	$(".me1").addClass("mui-active");
	 	$(".me1").find(".iconfont").removeClass("icon-wo").addClass("icon-wocur");
	    $(".mui-title").text("我的");
	}else if(hash_val == "#home"){
		$(".home1").siblings().removeClass("mui-active");
		$(".Book").addClass("icon-tongxunlu01").removeClass("icon-tongxunluintouch01");
	 	$(".Me").addClass("icon-wo").removeClass("icon-wocur");
	 	$(".home1").addClass("mui-active");
	 	$(".home1").find(".iconfont").removeClass("icon-shouyexianxing").addClass("icon-shouye1");
	 	$(".mui-title").text("河南众志债事商业服务有限公司");
	}
	
	
	
	
	

	//单页路由 SPA
	vipspa.start({
        view: '#ui-view',
        errorTemplateId: '#error', // 可选
        router: {
            'home': {
                templateUrl: 'views/home.html',
                controller: 'assets/js/home.js'
            },
            'book': {
                templateUrl: 'views/book.html',
                controller: 'assets/js/book.js'
            },
            'me': {
                templateUrl: 'views/me.html',
                controller: 'assets/js/me.js'
            },
            'defaults': 'home' //默认路由
        }
    });
    
    //tab添加class
    $(".mui-bar-tab .mui-tab-item").click(function(){
    	var $index = $(this).index();
    	 $(this).siblings().removeClass("mui-active");
    	 if($index == 0){
    	 	$(".Book").addClass("icon-tongxunlu01").removeClass("icon-tongxunluintouch01");
    	 	$(".Me").addClass("icon-wo").removeClass("icon-wocur");
    	 	$(this).addClass("mui-active");
    	 	$(this).find(".iconfont").removeClass("icon-shouyexianxing").addClass("icon-shouye1");
    	 	$(".mui-title").text("河南众志债事商业服务有限公司");
    	 }else if($index == 1){
    	 	$(".Home").removeClass("icon-shouye1").addClass("icon-shouyexianxing");
    	 	$(".Me").addClass("icon-wo").removeClass("icon-wocur");
    	 	$(this).addClass("mui-active");
    	 	$(this).find(".iconfont").removeClass("icon-tongxunlu01").addClass("icon-tongxunluintouch01");
    	    $(".mui-title").text("通讯录");
    	 }else if($index == 2){
    	 	$(".Home").removeClass("icon-shouye1").addClass("icon-shouyexianxing");
    	 	$(".Book").addClass("icon-tongxunlu01").removeClass("icon-tongxunluintouch01");
    	 	$(this).addClass("mui-active");
    	 	$(this).find(".iconfont").removeClass("icon-wo").addClass("icon-wocur");
    	    $(".mui-title").text("我的");
    	 }
    });
    
});
