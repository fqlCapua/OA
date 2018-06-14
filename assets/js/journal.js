/***
 * 工作日志
 * journal.js
 * 
 * **/

$(function(){
   //获取时间
   function get_date(num){
   	var day_object = {};
   	   var day = new Date();
           day.setDate(day.getDate() +num);
        var  day_date  = day.getDate();//几号
        var  day_week  =  day.getDay();//周几
             day_object.GYear = day.getFullYear(); //年
             day_object.month = day.getMonth()+1; //月
        
        if(day_date <10){
        	day_object.Gdate = "0"+ day_date;
        }else{
        	day_object.Gdate = day_date;
        }
       switch (day_week){
		case 0:
		  day_object.week="周日";
		  break;
		case 1:
		  day_object.week="周一";
		  break;
		case 2:
		  day_object.week="周二";
		  break;
		case 3:
		  day_object.week="周三";
		  break;
		case 4:
		  day_object.week="周四";
		  break;
		case 5:
		  day_object.week="周五";
		  break;
		case 6:
		  day_object.week="周六";
		  break;
		}
       return day_object;
    }
   
   
    /**
   * get_date(0).Gdate  几号
   * get_date(0).week  周几
   *   0：今天
   * ***/
   
   //today的日期
   var Today_date = get_date(0).GYear +'年'+ get_date(0).month +'月'+ get_date(0).Gdate +'日';
   $(".journal_date_title").html(Today_date);
   
  // 时间模板
   var html = `<div class="_date_list">
					<!--week-->
					<div class="_week">`+ get_date(-3).week +`</div>
					<div class="_day"><span class="">`+ get_date(-3).Gdate +`</span></div>
				</div>
				<div class="_date_list">
					<!--week-->
					<div class="_week">`+ get_date(-2).week +`</div>
					<div class="_day"><span class="">`+ get_date(-2).Gdate +`</span></div>
				</div>
				<div class="_date_list">
					<!--week-->
					<div class="_week">`+ get_date(-1).week +`</div>
					<div class="_day"><span class="">`+ get_date(-1).Gdate +`</span></div>
				</div>
				<div class="_date_list">
					<!--week-->
					<div class="_week">`+ get_date(0).week +`</div>
					<div class="_day"><span class="native_today">`+ get_date(0).Gdate +`</span></div>
				</div>
				<div class="_date_list">
					<!--week-->
					<div class="_week">`+ get_date(1).week +`</div>
					<div class="_day"><span class="">`+ get_date(1).Gdate +`</span></div>
				</div>
				<div class="_date_list">
					<!--week-->
					<div class="_week">`+ get_date(2).week +`</div>
					<div class="_day"><span class="">`+ get_date(2).Gdate +`</span></div>
				</div>
				<div class="_date_list">
					<!--week-->
					<div class="_week">`+ get_date(3).week +`</div>
					<div class="_day"><span class="">`+ get_date(3).Gdate +`</span></div>
				</div>`;
				
	$(".journal_date_list").append(html);
	
	var $width = $(".journal_left_bar").width();
  	 $(".journal_bar_bottom").css("width",$width);
  	  //tab
  	  $(".tab_btn").click(function(){
  	  	  var $width = $(this).width();
  	  	  var $index = $(this).index();
  	  	  $(".journal_bar_bottom").css({"left":"auto","right":"auto"});
  	  	  if($index == 0){
	  	  	  	 $(".journal_bar_bottom").animate({left:0,width:$width},200);
	  	  	  	 $(".journal_ul_box").hide();
	  	  	  	 $(".my_journal_box").show();
  	  	  }else if($index == 1){
	  	  	  	$(".journal_bar_bottom").animate({right:0,width:$width},200);
	  	  	  	$(".my_journal_box").hide();
	  	  	  	$(".journal_ul_box").show();
  	  	  }
  	  });
	
});