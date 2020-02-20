import React, { Component } from 'react';
import './Room.css';
import { Row, Col, Card, List } from 'antd';

class Room extends Component {

    constructor() {
        super();
        this.state = {
            room: 1,
            adult: 1,
            child: 0
        }
    }

    handleAddRoom = () => {
        let { room, adult } = this.state;
        this.setState({ room: room + 1 })
        if (room > 4) {
            this.setState({ room: 5 })
        }
        if (room < 4 && room >= adult) {
            this.setState({ adult: room + 1 })
        }
    }

    handleRemoveRoom = () => {
        let { room, adult, child } = this.state;
        if (room > 1) {
            this.setState({ room: room - 1 })
        }
        if (adult > 1 && adult >= room) {
            this.setState({ adult: room - 1 })
        }
        if (child > 1 && child >= room) {
            this.setState({ child: room - 1 })
        }
    }

    handleAddAdult = () => {
        let { adult, child } = this.state;
        if (adult === 1) {
            this.setState({ adult: 2 })
        }
        if (adult < 4 && adult < child) {
            this.setState({ adult: adult + 1, room: child++ })
        } else if (adult < 4 && adult >= child) {
            this.setState({ adult: adult + 1, room: adult + 1 })
        }
    }

    handleRemoveAdult = () => {
        let { adult, child, room } = this.state;
        if (adult > 1) {
            this.setState({ adult: adult - 1 })
        }
        if (adult > 1 && adult < child) {
            this.setState({ room: child })
        } else if (adult > 1 && adult > child) {
            this.setState({ room: adult - 1 })
        } else if (adult === child) {
            this.setState({ room: room })
        }
        if (adult === 0) {
            this.setState({ room: 1 })
        }
    }

    handleAddChild = () => {
        let { child, adult } = this.state;
        if (child < 4 && child < adult) {
            this.setState({ child: child + 1, room: adult++ })
        } else if (child < 4 && child >= adult) {
            this.setState({ child: child + 1, room: child + 1 })
        }
    }

    handleRemoveChild = () => {
        let { child, adult, room } = this.state;
        if (child >= 1) {
            this.setState({ child: child - 1 })
        }
        if (child > 1 && child < adult) {
            this.setState({ room: adult })
        } else if (child > 1 && child > adult) {
            this.setState({ room: child - 1 })
        } else if (child === adult) {
            this.setState({ room: room })
        }
    }

    render() {
        const { room, adult, child } = this.state;
        return (
            <div className="container" >
                <Row>
                    <Col span={12} >
                        <div className="headingcontainer" >
                            <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                            <span>
                                <h3 className="heading" >Chose number of <strong>people</strong></h3>
                            </span>
                        </div>
                        <Card className="cardContainer">
                            <List>
                                <List.Item>
                                    <Col className="roomFirstColumn" span={12}>
                                        <div className="roomDiv" >
                                            <i className="fa fa-bed fa-2x" aria-hidden="true"></i>
                                            <span>
                                                <h3 className="roomDivText" >ROOMS</h3>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col className="roomSecondColmn" span={12}>
                                        <div>
                                            {room > 1 ? <i onClick={this.handleRemoveRoom} className="fa fa-minus-circle" aria-hidden="true"></i> : null}
                                            <span className="roomSecondColumnSpan" >
                                                {room}<i style={{ marginLeft: 8, color: 'red' }} onClick={this.handleAddRoom} className="fa fa-plus-circle fa-1x" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </Col>
                                </List.Item>
                                <List.Item>
                                    <Col className="roomFirstColumn">
                                        <div className="roomDiv">
                                            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                                            <span>
                                                <h3 className="roomDivText" >ADULTS</h3>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col className="roomSecondColmn" span={12}>
                                        <div>
                                            {adult > 1 ? <i onClick={this.handleRemoveAdult} className="fa fa-minus-circle" aria-hidden="true"></i> : null}
                                            <span className="roomSecondColumnSpan"> {adult}
                                                <i onClick={this.handleAddAdult} style={{ marginLeft: 8, color: 'red' }} className="fa fa-plus-circle" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </Col>
                                </List.Item>
                                <List.Item>
                                    <Col className="roomFirstColumn" span={12}>
                                        <div className="roomDiv">
                                            <i className="fa fa-child fa-2x" aria-hidden="true"></i>
                                            <span>
                                                <h3 className="roomDivText" >CHILDREN</h3>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col className="roomSecondColmn" span={12}>
                                        <div>
                                            {child > 0 ? <i onClick={this.handleRemoveChild} className="fa fa-minus-circle" aria-hidden="true"></i> : null}
                                            <span className="roomSecondColumnSpan" >{child}
                                                <i onClick={this.handleAddChild} style={{ marginLeft: 8, color: 'red' }} className="fa fa-plus-circle" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </Col>
                                </List.Item>
                            </List>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Room;