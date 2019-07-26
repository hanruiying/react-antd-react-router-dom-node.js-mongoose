/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import Graph from './graph';
import { Row, Col, Card } from 'antd';
import './pie.less';

const option = {
    backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#c86589'
        },
        {
            offset: 1,
            color: '#06a7ff'
        }
    ], false),
    title: {
        text: "OCTOBER 2015",
        left: "center",
        bottom: "5%",
        textStyle: {
            color: "#fff",
            fontSize: 16
        }
    },
    grid: {
        top: '20%',
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        axisLabel: {
            margin: 30,
            color: '#ffffff63'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: true,
            length: 25,
            lineStyle: {
                color: "#ffffff1f"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ffffff1f'
            }
        }
    },
    yAxis: [{
        type: 'value',
        position: 'right',
        axisLabel: {
            margin: 20,
            color: '#ffffff63'
        },

        axisTick: {
            show: true,
            length: 15,
            lineStyle: {
                color: "#ffffff1f",
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ffffff1f'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 2
            }
        }
    }],
    series: [{
        name: '注册总量',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
            normal: {
                color: "#fff", // 线条颜色
            },
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#fff',
            }
        },
        itemStyle: {
            color: "red",
            borderColor: "#fff",
            borderWidth: 3
        },
        tooltip: {
            show: false
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#eb64fb'
                    },
                    {
                        offset: 1,
                        color: '#3fbbff0d'
                    }
                ], false),
            }
        },
        data: [393, 438, 485, 631, 689, 824, 987, 1000, 1100, 1200]
    }]
};

class Pie extends React.Component {
    render() {
        return (
            <div className='pie-wrapper'>
                <Row>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                        <Card title="柱状图" bordered={false}>
                        <ReactEcharts
                            option={option}
                            style={{height: '200px', width: '100%', background: "#fff"}}
                            className={'react_for_pie'}
                        />
                        </Card>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                        <Card title="关系图" bordered={false}>
                        <Graph />
                        </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Pie;