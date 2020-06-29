import * as echarts from '../../ec-canvas/echarts';

Page({
  data: {
    ec: {
      onInit: initChart
    },
    ec2: {
      onInit: initChart2
    },
    ec3: {
      onInit: initChart3
    },
    ec4: {
      onInit: initChart4
    },
    ec5: {
      onInit: initChart5
    },
    ec6: {
      onInit: initChart6
    },
    map: {
      onInit: initChartMap
    }
  }
});

function initChart(canvas, width, height, dpr) {
  // 1.实例化对象
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  // 2.指定配置项和数据  
  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '2%',
      top: '4%',
      right: '2%',
      bottom: '14%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 12
      },
      // x轴样式不显示
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.3)",
          width: 1
        }
      }
    }],
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 1
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [200, 300, 300, 900, 1500, 1200, 600],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  chart.setOption(option);
  return chart;
}

function initChart2(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 2.指定配置项和数据
  var option = {
    grid: {
      top: "4%",
      left: '22%',
      bottom: '18%',
      // containLabel: true
    },
    xAxis: {
      // 不显示x轴相关信息
      show: false
    },
    yAxis: [{
      type: 'category',
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "rgba(255, 255, 255, 0.8)"
      },
      data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"]
    }, {
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      show: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "rgba(255, 255, 255, 0.8)"
      },
      data: [702, 350, 610, 793, 664]
    }],
    series: [{
        // 第一组柱子（条状）
        name: '条',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 层级 相当于z-index
        yAxisIndex: 0,
        // 柱子更改样式
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子的对象
            // dataIndex 是当前柱子的索引号
            // console.log(params);
            return myColor[params.dataIndex];
          }
        },
        data: [70, 34, 60, 78, 69],
        // 显示柱子内的百分比文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动解析为数据（data内的数据）
          formatter: "{c}%"
        }
      },
      {
        // 第二组柱子（框状 border）
        name: '框',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 14,
        // 层级 相当于z-index
        yAxisIndex: 1,
        // 柱子修改样式
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 2,
          barBorderRadius: 15,
        },
        data: [100, 100, 100, 100, 100]
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

function initChart3(canvas, width, height, dpr) {
  // 年份对应数据
  var yearData = [{
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];

  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
      right: '10%',
    },
    grid: {
      top: "12%",
      left: '3%',
      right: '2%',
      bottom: '14%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: 'rgba( 255, 255, 255, 0.5)' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba( 255, 255, 255, 0.8)" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba( 255, 255, 255, 0.8)" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "rgba( 255, 255, 255, 0.2)"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '新增粉丝',
        data: yearData[0].data[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '新增游客',
        data: yearData[0].data[1]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

function initChart4(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      right: '10%',
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '10%',
      left: '10',
      right: '2%',
      bottom: '14%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      // 文本颜色为rgba(255,255,255,.8)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.8)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.8)",
          fontSize: 12
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        name: '邮件营销',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
        //   color: new echarts.graphic.LinearGradient(
        //     0,
        //     0,
        //     0,
        //     1,
        //     [{
        //         offset: 0,
                color: "rgba(1, 132, 213, 0.4)", // 渐变色的起始颜色
        //       },
        //       {
        //         offset: 0.8,
        //         color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
        //       }
        //     ],
        //     false
        //   ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [30, 40, 60, 90, 60, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 80, 100, 60, 40, 30, 40, 30, 40, 20, 60, 50, 40]
      },
      {
        name: "转发量",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            // color: new echarts.graphic.LinearGradient(
            //   0,
            //   0,
            //   0,
            //   1,
            //   [{
            //       offset: 0,
                  color: "rgba(0, 216, 135, 0.4)",
            //     },
            //     {
            //       offset: 0.8,
            //       color: "rgba(0, 216, 135, 0.1)"
            //     }
            //   ],
            //   false
            // ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

function initChart5(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} \n {b}: {c} ({d}%)'
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',
      bottom: '14%',
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: '年龄分布',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ["50%", "42%"],
      // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线
      labelLine: {
        show: false
      },
      data: [{
          value: 1,
          name: "0岁以上"
        },
        {
          value: 4,
          name: "20-29岁"
        },
        {
          value: 2,
          name: "30-39岁"
        },
        {
          value: 2,
          name: "40-49岁"
        },
        {
          value: 1,
          name: "50岁以上"
        }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}

function initChart6(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var option = {
    color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} \n {b} : {c} ({d}%)'
    },
    legend: {
      bottom: '14%',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 10
      }
    },
    series: [{
      name: '地区分布',
      type: 'pie',
      radius: ["10%", "60%"],
      center: ['50%', '40%'],
      // 半径模式  area面积模式
      roseType: 'radius',
      // 图形的文字标签
      label: {
        fontsize: 10
      },
      // 引导线调整
      labelLine: {
        // 连接扇形图线长(斜线)
        length: 6,
        // 连接文字线长(横线)
        length2: 8
      },
      data: [{
          value: 26,
          name: '北京'
        },
        {
          value: 24,
          name: '山东'
        },
        {
          value: 25,
          name: '河北'
        },
        {
          value: 20,
          name: '江苏'
        },
        {
          value: 25,
          name: '浙江'
        },
        {
          value: 30,
          name: '四川'
        },
        {
          value: 42,
          name: '湖北'
        }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}


function initChartMap(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  var colorList = [
    [
      '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
      '#ff69b4', '#cd5c5c', '#ffa500'
    ],
    [
      '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
      '#ff69b4',  '#cd5c5c', '#ffa500'
    ],
    [
      '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
      '#bb60b2', '#f47a75', '#009db2'
    ]
  ][2];

  var option = {
    // backgroundColor: '#fff',
    tooltip: {},
    animationDurationUpdate: function (idx) {
      // 越往后的数据延迟越大
      return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: 250,
        edgeLength: 8
      },
      roam: true,
      label: {
        normal: {
          show: true
        }
      },
      data: [{
        "name": "mini-program",
        "value": 2373,
        "symbolSize": 48,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[0],
            "color": colorList[0],
            "opacity": 0.6
          }
        }
      }, {
        "name": "Angular",
        "value": 5449,
        "symbolSize": 73,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[1],
            "color": colorList[1],
            "opacity": 0.6
          }
        }
      }, {
        "name": "React",
        "value": 2289,
        "symbolSize": 67,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[2],
            "color": colorList[2],
            "opacity": 0.7
          }
        }
      }, {
        "name": "Html",
        "value": 2518,
        "symbolSize": 50,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[3],
            "color": colorList[3],
            "opacity": 0.6
          }
        }
      }, {
        "name": "端午快乐！",
        "value": 4730,
        "symbolSize": 88,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[4],
            "color": colorList[4],
            "opacity": 0.7
          }
        }
      }, {
        "name": "JavaScript",
        "value": 1952,
        "symbolSize": 55,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[5],
            "color": colorList[5],
            "opacity": 0.6
          }
        }
      }, {
        "name": "css",
        "value": 926,
        "symbolSize": 70,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[6],
            "color": colorList[6],
            "opacity": 0.6
          }
        }
      }, {
        "name": "vue",
        "value": 4536,
        "symbolSize": 67,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[7],
            "color": colorList[7],
            "opacity": 0.7
          }
        }
      }]
    }]
  }

  chart.setOption(option);
  return chart;
}