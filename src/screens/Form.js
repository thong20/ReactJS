/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import {connect} from 'react-redux'
import {actionAddItem, actionAddTodo} from '../redux/actions'
import store from '../redux/store'

import PropTypes from "prop-types";
import {
  Button, Form, FormGroup, Input,
  Container, Row, Col,
} from "reactstrap";

const consoleLog = n => console.log('=== FormScreen.js - line: ' + n + ' ================================')

FormScreen.propTypes = {
  // name_prop: PropTypes.type
  // item: PropTypes.array, // passed from to redux/connect.js thông qua Redux
  // actionAddItem: PropTypes.func, // passed from to redux/connect.js thông qua Redux
}; 

function FormScreen(props) {
  const {rootReducerList, actionAddItem} = props
  const [text, setText] = useState("");

  

  const addItem = (str) => {
    actionAddItem(str)
  }

  return (
    <Container>
      <h1>Redux & react-redux</h1>
      <Row> 
        <Form>
          <FormGroup row >
            <Col />
            <Col xs={6}>
              <Input
                type="text"
                name="todo"
                id="todo"
                value={text}
                placeholder="Type todo"
                onChange={(str) => setText(str.target.value)}
              />
            </Col>
            <Col>
              <Button color="primary" onClick={() => {
                addItem(text)
                setText('')
              }}>Submit</Button>
            </Col>
            <Col />
          </FormGroup>
          
        </Form>
      </Row>
      {
        rootReducerList.map((item, idx) => (
          <Row key={`${idx}`}><p className='item'>{item}</p></Row>
        ))
      }
    </Container>
  );
}

const mapStateToProp = (state) => {
  console.log('state:', state)
  return state
}

console.log('store.getState:', store.getState())

export default connect(mapStateToProp, {actionAddItem: actionAddItem})(FormScreen)




