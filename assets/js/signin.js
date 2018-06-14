/**
 * signin.js
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
   $(".signin_date_title").html(Today_date);
   
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
				
	$(".signin_date_list").append(html);
	// 时间（时钟）
	var oClock = document.getElementById("clock");
    var aSpan = oClock.getElementsByTagName("span");
	setInterval(getTimes, 1000);
	getTimes();
	// 获取time
	function getTimes (){
		var oDate = new Date();
		var aDate = [oDate.getHours(), oDate.getMinutes(), oDate.getSeconds()];
		for (var i in aDate) {
			aSpan[i].innerHTML = format(aDate[i]);
		}
	};
	function format(a){
	    return a.toString().replace(/^(\d)$/, "0$1");
	}
	
	//打卡btn
	var card_state =true;
	$(".punch_card_btn_content").click(function(){
		  var time = getNowFormatDate();
		  var time_text = time.slice(11,21)
		  if(card_state){
		  	 $(".punch_card").text("下线打卡");
		  	 $("._Online").text(time_text);
		  	 card_state = false;
		  }else{
		  	$(".punch_card").text("上线打卡");
		  	 $("._OffLine").text(time_text);
		  	 card_state = true;
		  }
	});
	
	
	
	//时间格式化
	function getNowFormatDate() {
	    var date = new Date();
	    var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1; //月
	    var strDate = date.getDate(); //日
	    var hours = date.getHours();  //时
	    var minutes = date.getMinutes(); //分
	    var seconds = date.getSeconds(); //秒
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;  //月
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate; //日
	    }
	    if (hours >= 0 && hours <= 9) {
	        hours = "0" + hours; // 时
	    }
	    if (minutes >= 0 && minutes <= 9) {
	        minutes = "0" + minutes; //分
	    }
	    if (seconds >= 0 && seconds <= 9) {
	        seconds = "0" + seconds;  //秒
	    }
	    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
	            + " " + hours + seperator2 + minutes
	            + seperator2 + seconds;
	    return currentdate;
}
	
	
	
});