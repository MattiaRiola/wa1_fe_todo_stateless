import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './MyNavbar.js';
import MyAside from './MyAside.js';
import MyMainContent from './MyMainContent.js';
import MyModal from './MyModal.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import dayjs from 'dayjs';
import { useState } from 'react';
import UpdateTask from './createContexts.js';

const fakeTasks = [
  {id: 1, description: 'laundry', date: dayjs('2021-03-29T23:59'), urgent: false, private: false},
  {id: 2, description: 'monday lab', date: dayjs('2021-03-16T10:00') , urgent: false, private: false},
  {id: 3, description: 'phone call', date: dayjs('2021-03-08T16:20') , urgent: true, private: false},
  {id: 4, description: 'dinner', date: dayjs('2021-03-28T18:00') , urgent: true, private: true},
  {id: 5, description: 'Meet Douglas', date: dayjs('2021-03-31T13:00') , urgent: false, private: false},
  {id: 6, description: 'TODAY task', date: dayjs('2021-04-26T16:20'), urgent: true, private: true},
  {id: 7, description: 'My Task1', date: dayjs().add(1,'day') , urgent: true, private: true},
  {id: 8, description: 'task the day after tomorrow', date: dayjs().add(2,'day') , urgent: true, private: true},
  {id: 9, description: 'My Task2', date: dayjs().add(-1,'day') , urgent: true, private: false},
  {id: 10, description: 'My Task3', date: dayjs().add(8,'day'), urgent: false, private: false },
  {id: 11, description: 'My Task in 7 days', date: dayjs().add(7,'day'), urgent: false, private: false },
  {id: 12, description: 'my task 12h ago', date: dayjs().add(-12,'hour'), urgent: false, private: false },
  {id: 13, description: 'my task  in 1h', date: dayjs().add(1,'hour'), urgent: false, private: false },
  {id: 14, description: 'No date task', date: undefined, urgent: true, private: true }
];


function App() {
  //https://react-bootstrap.github.io/utilities/transitions/
  const [open, setOpen] = useState(false);
  let [filter, setFilter] = useState('All');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tasks, setTasks] = useState(fakeTasks);
  console.log("I have " + tasks.length + " tasks");
  const [lastId, setLastId] = useState(tasks.length);
  const addTask = (task) => {
    setTasks(oldTasks => [...oldTasks, task]);
  }

  const deleteTask = (id) => {
    setTasks(oldTasks => oldTasks.filter(task => task.id !== id));
  }
  

  return (
    <>
    <UpdateTask.Provider value={}>
      <MyNavbar setOpen={setOpen} open={open}/>
      <Container fluid>
        <Row className="row-height">
          <MyAside open={open} setFilter={setFilter}/>
          <MyMainContent tasks = {tasks} filter={filter} deleteTask={deleteTask} handleShow={handleShow}/>
        </Row>
        <MyModal show={show} handleClose={handleClose} addTask={addTask} lastId={lastId} setLastId={setLastId} /> 
        <button className="btn btn-lg btn-primary rounded-circle radius" variant="primary" onClick={handleShow}>+</button>
      </Container>
    </UpdateTask.Provider>
    </>
  );
}


export default App;
