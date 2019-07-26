import React from 'react';
import TableList from '../../components/table.jsx';
import { Row, Col, Card } from 'antd';
import './user.less';
import { user } from '../../../api/user';
class User extends React.Component{
    state = {
        user: []
    }
    componentWillMount() {
        user().then(res => {
            this.setState({
                user: res
            })
        }).catch(err => {
            console.log(err, 'err');
        })
    }
    render () {
        return (
            <div className='userWrapper'>
                <Row>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                            <Card title="table表格" bordered={false}>
                                <TableList data={this.state.user}/>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default User;
