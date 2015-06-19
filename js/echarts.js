// 基于准备好的dom，初始化echarts图表
    var myChart01 = echarts.init(document.getElementById('chart01'));
    var option = {
        title: {
           text: "六月苯酐价格变化指数",
           subtext: "",
           textStyle: {
               fontSize: 14,
               fontStyle: "normal"
           }
       },
       tooltip: {
           trigger: "axis"
       },
       legend: {
           data: ["最高价格", "最低价格"],
           selectedMode: false,
           x: "right",
           y: "top"
       },
       toolbox: {
           feature: {
               dataView: {
                   readOnly: true
               },
               magicType: {
                   type: ["line", "bar"],
                   show: false
               }
           }
       },
       xAxis: [
           {
               type: "category",
               boundaryGap: false,
               name:"(时间)",
               data: ["6-01", "6-05", "6-10", "6-15", "6-20", "-"],
               name: "",
               nameLocation: "end",
               nameTextStyle:{
                    color: "rgb(102, 103, 104)",
                    align: "right"
               }
           }
       ],
       yAxis: [
           {
               type: "value",
               name: "（元/吨）",
               position: "top",
               nameLocation: "end",
               nameTextStyle: {
                   color: "rgb(102, 103, 104)",
                   align: "right"
               }
           }
       ],
       series: [
           {
               name: "最高价格",
               type: "line",
               data: [7838, 6000, 8050, 7228, 7683, "-"]
           },
           {
               name: "最低价格",
               type: "line",
               data: [5929, 4089, 7228, 5928, 6030, "-"]
           }
       ]
    };
    // 为echarts对象加载数据
    myChart01.setOption(option);

    var myChart02 = echarts.init(document.getElementById('chart02'));
    var option = {
        title: {
           text: "六月苯酐价格变化指数",
           subtext: "",
           textStyle: {
               fontSize: 14,
               fontStyle: "normal"
           }
       },
       tooltip: {
           trigger: "axis"
       },
       legend: {
           data: ["最高价格", "最低价格"],
           selectedMode: false,
           x: "right",
           y: "top"
       },
       toolbox: {
           feature: {
               dataView: {
                   readOnly: true
               },
               magicType: {
                   type: ["line", "bar"],
                   show: false
               }
           }
       },
       xAxis: [
           {
               type: "category",
               boundaryGap: false,
               name:"(时间)",
               data: ["6-01", "6-05", "6-10", "6-15", "6-20", "-"],
               name: "",
               nameLocation: "end",
               nameTextStyle:{
                    color: "rgb(102, 103, 104)",
                    align: "right"
               }
           }
       ],
       yAxis: [
           {
               type: "value",
               name: "（元/吨）",
               position: "top",
               nameLocation: "end",
               nameTextStyle: {
                   color: "rgb(102, 103, 104)",
                   align: "right"
               }
           }
       ],
       series: [
           {
               name: "最高价格",
               type: "line",
               data: [8838, 6540, 8050, 7274, 6683, "-"]
           },
           {
               name: "最低价格",
               type: "line",
               data: [6929, 4589, 7328, 5428, 7530, "-"]
           }
       ]
    };
    // 为echarts对象加载数据
    myChart02.setOption(option);

    var myChart03 = echarts.init(document.getElementById('chart03'));
    var option = {
        title: {
           text: "六月苯酐价格变化指数",
           subtext: "",
           textStyle: {
               fontSize: 14,
               fontStyle: "normal"
           }
       },
       tooltip: {
           trigger: "axis"
       },
       legend: {
           data: ["最高价格", "最低价格"],
           selectedMode: false,
           x: "right",
           y: "top"
       },
       toolbox: {
           feature: {
               dataView: {
                   readOnly: true
               },
               magicType: {
                   type: ["line", "bar"],
                   show: false
               }
           }
       },
       xAxis: [
           {
               type: "category",
               boundaryGap: false,
               name:"(时间)",
               data: ["6-01", "6-05", "6-10", "6-15", "6-20", "-"],
               name: "",
               nameLocation: "end",
               nameTextStyle:{
                    color: "rgb(102, 103, 104)",
                    align: "right"
               }
           }
       ],
       yAxis: [
           {
               type: "value",
               name: "（元/吨）",
               position: "top",
               nameLocation: "end",
               nameTextStyle: {
                   color: "rgb(102, 103, 104)",
                   align: "right"
               }
           }
       ],
       series: [
           {
               name: "最高价格",
               type: "line",
               data: [7838, 6540, 8960, 7328, 7683, "-"]
           },
           {
               name: "最低价格",
               type: "line",
               data: [4929, 4039, 6228, 5938, 7630, "-"]
           }
       ]
    };
    // 为echarts对象加载数据
    myChart03.setOption(option);