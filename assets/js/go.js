/**
 * 
 * go.js
 * 
 * **/
    
    // 时间的选择
	var calendar1 = new LCalendar();
	calendar1.init({
		'trigger': '#start_date', //标签id
		'type': 'datetime', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
		'minDate': (new Date().getFullYear()-3) + '-' + 1 + '-' + 1, //最小日期
		'maxDate': (new Date().getFullYear()+3) + '-' + 12 + '-' + 31 //最大日期
	});
	var calendar2 = new LCalendar();
	calendar2.init({
		'trigger': '#end_date', //标签id
		'type': 'datetime', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
		'minDate': (new Date().getFullYear()-3) + '-' + 1 + '-' + 1, //最小日期
		'maxDate': (new Date().getFullYear()+3) + '-' + 12 + '-' + 31 //最大日期
	});
	

    