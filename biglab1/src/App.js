import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <MyNavbar></MyNavbar>
  );
}

function MyNavbar(props) {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="sticky-top">
        <Navbar.Toggle aria-controls="menu-filter" />
        <Navbar.Brand href="#home" className="d-inline-block align-top">ToDo Manager</Navbar.Brand>

        <Form inline className="m-lg-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2 mt-1 mt-sm-0" />
          <Button variant="outline-light" className="my-2 my-sm-0 d-none d-sm-block">Search</Button>
        </Form>

        <Nav className="mt-0 mt-lg-0 user-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </Nav>

      </Navbar>

      <Container fluid>
        <Row className="my-2">
          <Col className="col-sm-3 py-2 px-lg-3 collapse leftcol-bg d-sm-block" id="menu-filter">
            <ListGroup className="list-group-flush">
              <button type="button" class="list-group-item list-group-item-action activelist" aria-current="true">All</button>
              <button type="button" class="list-group-item list-group-item-action trans">Important</button>
              <button type="button" class="list-group-item list-group-item-action trans">Today</button>
              <button type="button" class="list-group-item list-group-item-action trans">Next 7 Days</button>
              <button type="button" class="list-group-item list-group-item-action trans">Private</button>
            </ListGroup>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
