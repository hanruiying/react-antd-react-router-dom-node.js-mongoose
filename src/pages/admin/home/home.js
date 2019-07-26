import React from 'react';
import { Row, Col, Card, Icon, Timeline, Statistic } from 'antd';
import './home.less';
import Bar from '../../components/echart';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
//   console.log('finished!');
}

class Home extends React.Component{
    render () {
        return (
            <div className='homeWrapper'>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className='icon-left'>
                                    <Icon type='heart' className='icon-heart'></Icon>
                                </div>
                                <div className='icon-text'>
                                    <p>collect things</p>
                                    <p className='icon-number'>301</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className='icon-left'>
                                    <Icon type='mail' className='icon-mail'></Icon>
                                </div>
                                <div className='icon-text'>
                                    <p>daily email</p>
                                    <p className='icon-number'>30</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className='icon-left'>
                                    <Icon type='schedule' className='icon-schedule'></Icon>
                                </div>
                                <div className='icon-text'>
                                    <p>daily schedule</p>
                                    <p className='icon-number'>15</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className='icon-left'>
                                    <Icon type='picture' className='icon-picture'></Icon>
                                </div>
                                <div className='icon-text'>
                                    <p>daily picture</p>
                                    <p className='icon-number'>52</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* data={{ xdata: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    ydata: { ydata1:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        ydata2:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]}
                    }} */}
                    <Bar style={{width: '100%'}}></Bar>
                </Row>
                <Row className='static-wrapper' gutter={16}>
                    <Col className="gutter-row time-static-wrapper" span={12}>
                        <div className="gutter-box timeline-wrapper">
                            <h2>进度</h2>
                            <Timeline>
                                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item color="red">
                                    <p>Solve initial network problems 1</p>
                                    <p>Solve initial network problems 2</p>
                                    <p>Solve initial network problems 3 2015-09-01</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <p>Technical testing 1</p>
                                    <p>Technical testing 2</p>
                                    <p>Technical testing 3 2015-09-01</p>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                    </Col>
                    <Col className="gutter-row time-static-wrapper" span={12}>
                        <div className="gutter-box">
                            <Col span={12} style={{textAlign: 'center'}} className='count-wrapper'>
                                <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
                            </Col>
                            <Col span={12} style={{textAlign: 'center'}} className='count-wrapper'>
                                <Statistic title="Unmerged" value={93} suffix="/ 100" />
                            </Col>
                            <div>
                            <Col span={12} className='count-wrapper' style={{textAlign: 'center'}}>
                            <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                            </Col>
                            <Col span={12} className='count-wrapper' style={{textAlign: 'center'}}>
                            <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                            </Col>
                            <Col span={24} style={{ marginTop: 32 }} className='count-wrapper' style={{textAlign: 'center'}}>
                            <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
                            </Col>
                            </div>
                            <Col span={12}>
                                <Card>
                                    <Statistic
                                        title="Active"
                                        value={11.28}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<Icon type="arrow-up" />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card>
                                    <Statistic
                                    title="Idle"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<Icon type="arrow-down" />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;
