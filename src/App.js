import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="_container">
        <Row>
          <Col className="item">Header</Col>
        </Row>
        <Row>
          <Col xs={4} className="item" align-middle>
            <Button variant="primary">Menu</Button>
          </Col>
          <Col>
            <Row>
              <Col className="item">Content</Col>
              <Col className="item">Right</Col>
            </Row>
            <Row>
              <Col className="item">Footer</Col>
            </Row>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
