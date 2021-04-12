import todo from './todo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
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
    <>
      <MyNavbar></MyNavbar>
      <Container fluid>
        <Row className="row-height">
          <MyAside></MyAside>
          <MyMainContent></MyMainContent>
        </Row> 
        <button class="btn btn-lg btn-primary rounded-circle radius">+</button>
      </Container>
    </>
  );
}

function MyNavbar(props) {
  //Toggle aria-expanded="false" data-target="#menu-filter" data-toggle="collapse"
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="sticky-top">
        <Navbar.Toggle aria-controls="menu-filter" />
        <Navbar.Brand href="#home" className="d-inline-block align-top">
          <img alt="" src={todo} width="30" height="30" className="d-inline-block align-top"/>{' '} Manager
        </Navbar.Brand>

        <Form inline className="m-lg-auto d-none d-sm-block">
          <FormControl type="text" placeholder="Search" className="mr-sm-2 mt-1 mt-sm-0" />
          <Button variant="outline-light" className="my-2 my-sm-0">Search</Button>
        </Form>

        <Nav className="mt-0 mt-lg-0 user-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </Nav>
      </Navbar>
    </>
  );
}

function MyAside(props) {
  return (
    <>
      <Col sm={4} as="aside" className="d-none d-sm-block py-2 px-lg-3 aside-bg" id="menu-filter">
        <ListGroup as="ul" defaultActiveKey="#filter-all" variant="flush">
          <ListGroup.Item as="li" action href="#filter-all">All</ListGroup.Item>
          <ListGroup.Item as="li" action href="#filter-important">Important</ListGroup.Item>
          <ListGroup.Item as="li" action href="#filter-today">Today</ListGroup.Item>
          <ListGroup.Item as="li" action href="#filter-next7days">Next 7 Days</ListGroup.Item>
          <ListGroup.Item as="li" action href="#filter-private">Private</ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  );
}

function MyMainContent(props) {
  return (
    <>
      <Col className="py-2 px-lg-3 border bg-light" id="menu-filter">
        <h1>All</h1>
        <ListGroup as="ul" variant="flush">
          <ListGroup.Item as="li" className="transparent-bg">
            <div className="d-flex justify-content-between">
              <span class="p-0">
                <Form.Check inline type="checkbox" id="gridCheck1"></Form.Check>Complete Lab 2
              </span>
              <span class="p-0">
                Monday 22 March 2021 at 14:30
              </span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="transparent-bg">
            <div className="d-flex justify-content-between">
              <span class="p-0">
                <Form.Check inline type="checkbox" id="gridCheck2"></Form.Check>Buy some groceries
              </span>
              <span class="p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
              </span>
              <span class="p-0">
                Today at 14:00
              </span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="transparent-bg">
            <div className="d-flex justify-content-between">
              <span class="p-0">
                <Form.Check inline type="checkbox" id="gridCheck3"></Form.Check><span className="important-text">Read a good book!</span>
              </span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  );
}



export default App;
