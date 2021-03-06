import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bootstrap from "bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Row, Col, Image, Panel, Tab } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import { LeftPanel } from './LeftPanel';
import { NewForm, ExistingForm, ViewDatabase} from './MiddlePanel';


let abStyle = {marginLeft: "15px", marginTop: "20px", height:"300px", border: "2px solid #b7544d"};

let correction = {marginBottom: 0, borderRadius: 0};
let correction2 = {marginBottom: 0, borderRadius: 0,marginTop: 50};
let faFix = {color: "white", marginTop: 18, display: "block", textAlign: "right"};
interface test{
    middle: React.Component<any,any>;
}

export class MainWindow extends React.Component<test, any> {
    render() {
        const middle = this.props.middle;
return          <Row style={correction2}>
                    <Col xs={11}  md={11} style={{left:"1.125em",right:"1.125em", border:"1px solid #b7544d"}} >
                        <Row style={{height: 50, backgroundColor: "#0f504e"}}>
                            <Col xs={11} md={11} style={{textAlign: "left",verticalAlign: "center", fontSize: 24, lineHeight:2, color:"white" }}>
                                Compliance Datastore System
                            </Col>
                            <Col  xs={1} md={1}>
                                <i className="fa fa-cog fa-1"  style={faFix}></i>
                            </Col>
                        </Row>
                        <Row >
                            <Tab.Container id="verticalTab" defaultActiveKey="left">
                                <Row >
                                    <LeftPanel />
                                    {middle}

                                </Row>
                            </Tab.Container>
                        </Row>
                    </Col>
                </Row >
    }
}



