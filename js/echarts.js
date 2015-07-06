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
                     data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
                     name: "时间",
                     nameLocation: "end"
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
                     data: [7838, 6000, 8050, 7228, 7683, 7683, 7228]
                 },
                 {
                     name: "最低价格",
                     type: "line",
                     data: [5929, 4089, 7228, 5928, 6030, 7683, 5928]
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
               data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
               data: [8838, 6540, 8050, 7274, 6683, 9283,8372]
           },
           {
               name: "最低价格",
               type: "line",
               data: [6929, 4589, 7328, 5428, 7530, 7623,9928]
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
               data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
               data: [7838, 6540, 8960, 7328, 7683, 8372,9310]
           },
           {
               name: "最低价格",
               type: "line",
               data: [4929, 4039, 6228, 5938, 7630, 8872,9283]
           }
       ]
    };
    // 为echarts对象加载数据
    myChart03.setOption(option);


    //charts04
    var myChart04 = echarts.init(document.getElementById('chart04'));
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
               data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
               data: [7838, 6540, 8960, 7328, 7683, 8372,9310]
           },
           {
               name: "最低价格",
               type: "line",
               data: [4929, 4039, 6228, 5938, 7630, 8872,9283]
           }
       ]
    };
    // 为echarts对象加载数据
    myChart04.setOption(option);


    //chart05
    var myChart05 = echarts.init(document.getElementById('chart05'));
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
               data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
               data: [7838, 6540, 8900, 7028, 7683, 8072,9310]
           },
           {
               name: "最低价格",
               type: "line",
               data: [4929, 4039, 6208, 5938, 7030, 8870,9083]
           }
       ]
    };
    // 为echarts对象加载数据
    myChart05.setOption(option);

    //chart06
    var myChart06 = echarts.init(document.getElementById('chart06'));
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
               data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
               data: [7838, 6540, 8900, 7308, 7083, 8372,9310]
           },
           {
               name: "最低价格",
               type: "line",
               data: [4929, 4039, 6028, 5938, 7630, 8802,9083]
           }
       ]
    };
    // 为echarts对象加载数据
    myChart06.setOption(option);

    //charts07
    var myChart07 = echarts.init(document.getElementById('chart07'));
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
               data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
               data: [7838, 6500, 8960, 7308, 7603, 8372,9010]
           },
           {
               name: "最低价格",
               type: "line",
               data: [4929, 4030, 6208, 5930, 7630, 8072,9083]
           }
       ]
    };
    // 为echarts对象加载数据
    myChart07.setOption(option);

    //charts08
    var myChart08 = echarts.init(document.getElementById('chart08'));
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
               data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
               data: [7838, 6040, 8960, 7328, 7603, 8372,9010]
           },
           {
               name: "最低价格",
               type: "line",
               data: [4900, 4039, 6228, 5938, 7030, 8072,9083]
           }
       ]
    };
    // 为echarts对象加载数据
    myChart08.setOption(option);

    //chart09
    var myChart09 = echarts.init(document.getElementById('chart09'));
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
               data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
               data: [7838, 6040, 8060, 7028, 7003, 8372,9310]
           },
           {
               name: "最低价格",
               type: "line",
               data: [4929, 4039, 6228, 5038, 7030, 8872,9283]
           }
       ]
    };
    // 为echarts对象加载数据
    myChart09.setOption(option);