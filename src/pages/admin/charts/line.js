/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import Map from './map';
import { Row, Col, Card } from 'antd';

import './line.less';
require('echarts/map/js/china.js');

const option = {
    title: {
        // text: '异常航班原因统计',
        bottom: 10,
        left: 'center',
        textStyle: {
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false,
            color: '#707070'
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#4D4D4D'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#707070'
            }
        },
        data: ['低能见度1', '低能见度2', '低能见度3', '低能见度4', '低能见度5', '低能见度6'],
    }],
    yAxis: {
        type: 'value',
        name: '航班数量',
        nameTextStyle: {
            fontSize: 14,
            color: '#4D4D4D'
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#4D4D4D'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#707070'
            }
        }
    },
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [{
                name: '低能见度1',
                value: '70',
                itemStyle: {
                    color: '#1F78B4'
                }
            },
            {
                name: '低能见度2',
                value: '50',
                itemStyle: {
                    color: '#A6CEE3'
                }
            },
            {
                name: '低能见度3',
                value: '30',
                itemStyle: {
                    color: '#B2DF8A'
                }
            },
            {
                name: '低能见度4',
                value: '25',
                itemStyle: {
                    color: '#33A02C'
                }
            },
            {
                name: '低能见度5',
                value: '15',
                itemStyle: {
                    color: '#FB9A99'
                }
            },
            {
                name: '低能见度6',
                value: '5',
                itemStyle: {
                    color: '#E31A1C'
                }
            }
        ]
    }]
};

class Line extends React.Component {
    render() {
        return (
            <div className='echart_wrapper'>
                <Row>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                        <Card title="折线图" bordered={false}>
                            <ReactEcharts
                                option={option}
                                style={{height: '200px', width: '100%', background: "#fff"}}
                                className={'react_for_line'}
                            />
                        </Card>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                        <Card title="地图" bordered={false}>
                            <Map />
                        </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Line;