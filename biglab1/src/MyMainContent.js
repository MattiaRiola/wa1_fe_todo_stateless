import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

/*
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
*/

function MyMainContent(props) {
    //const [tasks,setTasks] = useState(props.tasks);

    return (
      <>
        <Col className="py-2 px-lg-3 border bg-light" id="menu-filter">
          <h1>All</h1>
          <TaskTable tasks={props.tasks}/>
        </Col>
      </>
    );
  }
function TaskTable(props){

    return (
    <>
      <ListGroup as="ul" variant="flush">
        <TaskRow {...props}/> 
        <TaskRow {...props}/> 
        <TaskRow {...props}/> 
      </ListGroup>

    </>
    );
}

  function TaskRow(props) {
    return (
    <>
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
    </>
    );
  }

  export default MyMainContent;