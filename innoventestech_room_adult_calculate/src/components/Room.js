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
        let { room } = this.state;
        this.setState({ room: room + 1 })
        if (room > 4) {
            this.setState({ room: 5 })
        }
    }
    handleRemoveRoom = () => {
        let { room } = this.state;
        if (room > 1) {
            this.setState({ room: room - 1 })
        }
    }

    handleAddAdult = () => {
        let { adult } = this.state;
        this.setState({ adult: adult + 1 })
        if (adult > 3) {
            this.setState({ adult: 4 })
        }
    }

    handleRemoveAdult = () => {
        let { adult } = this.state;
        if (adult > 1) {
            this.setState({ adult: adult - 1 })
        }
    }

    handleAddChild = () => {
        let { child } = this.state;
        this.setState({ child: child + 1 })
        if (child > 3) {
            this.setState({ child: 4 })
        }
    }

    handleRemoveChild = () => {
        let { child } = this.state;
        if (child) {
            this.setState({ child: child - 1 })
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
                                            <i class="fa fa-bed fa-2x" aria-hidden="true"></i>
                                            <span>
                                                <h3 className="roomDivText" >ROOMS</h3>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col className="roomSecondColmn" span={12}>
                                        <div>
                                            <i onClick={this.handleRemoveRoom} class="fa fa-minus-circle" aria-hidden="true"></i>
                                            <span className="roomSecondColumnSpan" >
                                                {room}<i style={{ marginLeft: 8, color: 'red' }} onClick={this.handleAddRoom} class="fa fa-plus-circle fa-1x" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </Col>
                                </List.Item>
                                <List.Item>
                                    <Col className="roomFirstColumn">
                                        <div className="roomDiv">
                                            <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                                            <span>
                                                <h3 className="roomDivText" >ADULTS</h3>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col className="roomSecondColmn" span={12}>
                                        <div>
                                            <i onClick={this.handleRemoveAdult} class="fa fa-minus-circle" aria-hidden="true"></i>
                                            <span className="roomSecondColumnSpan"> {adult}
                                                <i onClick={this.handleAddAdult} style={{ marginLeft: 8, color: 'red' }} class="fa fa-plus-circle" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </Col>
                                </List.Item>
                                <List.Item>
                                    <Col className="roomFirstColumn" span={12}>
                                        <div className="roomDiv">
                                            <i class="fa fa-child fa-2x" aria-hidden="true"></i>
                                            <span>
                                                <h3 className="roomDivText" >CHILDREN</h3>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col className="roomSecondColmn" span={12}>
                                        <div>
                                            <i onClick={this.handleRemoveChild} class="fa fa-minus-circle" aria-hidden="true"></i>
                                            <span className="roomSecondColumnSpan" >{child}
                                                <i onClick={this.handleAddChild} style={{ marginLeft: 8, color: 'red' }} class="fa fa-plus-circle" aria-hidden="true"></i>
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