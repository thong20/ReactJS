import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button, Container, Row, Col,
  Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText
} from 'reactstrap';



TodoApp.propTypes = {
  // name_prop: PropTypes.type
  todos: PropTypes.func, // passed from to binding/TodoApp.js
  addTodo: PropTypes.func // passed from to binding/TodoApp.js
};

function TodoApp(props) {
  const [text, setText] = useState("");
  return (
    <Container>
      <Row>
        <Col className="myCell">.col</Col>
      </Row>
      <Row>
        <Col className="myCell">.col</Col>
        <Col className="myCell">.col</Col>
        <Col className="myCell">.col</Col>
        <Col className="myCell">.col</Col>
      </Row>
      <Row>
        <Col className="myCell" xs="3">.col-3</Col>
        <Col className="myCell" xs="auto">.col-auto - variable width content</Col>
        <Col className="myCell" xs="3">.col-3</Col>
      </Row>
      <Row>
        <Col className="myCell" xs="6">.col-6</Col>
        <Col className="myCell" xs="6">.col-6</Col>
      </Row>
      <Row>
        <Col className="myCell" xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col className="myCell" xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col className="myCell" sm="4">.col-sm-4</Col>
      </Row>
      <Row>
        <Col className="myCell" sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
      </Row>
      <Row>
        <Col className="myCell" sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
      </Row>
      <Row>
        <Col className="myCell" sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col className="myCell" sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row>
    </Container>
  );
}


export default TodoApp;
