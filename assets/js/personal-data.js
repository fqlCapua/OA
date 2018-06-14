/**
 * 
 * 个人资料 js
 * personal-data.js
 * **/

//Echarts
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('Echarts'));


// 指定图表的配置项和数据
var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '受理',
            type: 'pie',
            radius : '75%',
            center: ['50%', '50%'],
            data:[
                {value:35, name:'油卡'},
                {value:10, name:'房产'},
                {value:34, name:'数码'},
                {value:48, name:'现金'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);