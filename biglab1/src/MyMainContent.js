import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import dayjs from 'dayjs';

function MyMainContent(props) {
  //const [tasks,setTasks] = useState(props.tasks);

  return (
    <>
      <Col className="py-2 px-lg-3 border bg-light" id="menu-filter">
        <Title />
        <TaskTable tasks={props.tasks} />
      </Col>
    </>
  );
}

function Title(props) {
  return (<h1>All</h1>);
}

function TaskTable(props) {

  return (
    <>
      <ListGroup as="ul" variant="flush">
        {props.tasks.map(task => <TaskRow
          key={task.id}
          description={task.description}
          date={task.date}
          urgent={task.urgent}
          private={task.private} />)}
      </ListGroup>

    </>
  );
}

function TaskRow(props) {
  return (
    <>
      <ListGroup.Item as="li" className="transparent-bg">
        <div className="d-flex justify-content-between">
          <TaskDescription description={props.description} urgent={props.urgent} />
          <TaskPrivate private={props.private} />
          <TaskDate date={props.date} />
        </div>
      </ListGroup.Item>
    </>
  );
}

function TaskDescription(props) {
  return (
    <>
      <span class="p-0">
        <Form.Check inline type="checkbox" id="gridCheck3"></Form.Check>
        {(props.urgent) ? (<span className="important-text">{props.description}</span>) : props.description}
      </span>
    </>
  );
}

function TaskPrivate(props) {
  return (
    <>
      {(props.private) ? (
        <span class="p-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </span>
      ) : (<></>)}
    </>
  );
}

function TaskDate(props) {
  return (
    <>
      <span class="p-0">
        {(props.date === undefined) ? "Missing date" : props.date.format('dddd D MMMM YYYY [at] HH:mm')}
      </span>
    </>
  );
}

export default MyMainContent;