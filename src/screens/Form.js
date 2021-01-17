import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

TodoApp.propTypes = {
  // name_prop: PropTypes.type
  todos: PropTypes.func, // passed from to binding/TodoApp.js
  addTodo: PropTypes.func, // passed from to binding/TodoApp.js
};

function TodoApp(props) {
  const [text, setText] = useState("");
  return (
    <Container className='myCell'>
      <Row>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Row>
      <Row ></Row>
      <Row>
        <p>lakjsdlfjalsdkjflkjlkj</p>
      </Row>
    </Container>
  );
}

export default TodoApp;
