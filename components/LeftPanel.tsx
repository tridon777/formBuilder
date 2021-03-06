import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Row, Col, ListGroup, ListGroupItem, Image, Nav, NavItem } from "react-bootstrap";
import { Link  } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

let imageCenter = {marginLeft:"auto",marginRight:"auto",display:"block",cursor:"pointer"};
export class LeftPanel extends React.Component<any, any> {
    render () {
       return <Col xs={3} sm={3} md={3} lg={3} >
                <ListGroup className="subListGroup" style={{textAlign: "center"}}>
                    <LinkContainer to="/new">
                        <ListGroupItem  header="Create a New Form"   ><Image src="/components/images/rightSize.png" style={imageCenter} responsive /></ListGroupItem>
                    </LinkContainer>
                    <LinkContainer to="/existing">
                        <ListGroupItem id="existingForm"  header="View Existing Forms" ><Image src="/components/images/folderSize.png" style={imageCenter} responsive /></ListGroupItem>
                     </LinkContainer>
                     <LinkContainer to="/view">
                        <ListGroupItem id="viewDatabase"  header="View Database" ><Image src="/components/images/databaseSize.png" style={imageCenter} responsive /></ListGroupItem>
                    </LinkContainer>
                </ListGroup>
            </Col>

    }
}