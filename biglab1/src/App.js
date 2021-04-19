import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './MyNavbar.js';
import MyAside from './MyAside.js';
import MyMainContent from './MyMainContent.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import dayjs from 'dayjs';

const fakeTasks = [
  {id: '1', description: 'laundry', date: dayjs('2021-03-29T23:59'), urgent: false, private: false},
  {id: '2', description: 'monday lab', date: dayjs('2021-03-16T10:00') , urgent: false, private: false},
  {id: '3', description: 'phone call', date: dayjs('2021-03-08T16:20') , urgent: true, private: false},
  {id: '4', description: 'dinner', date: dayjs('2021-03-28T18:00') , urgent: true, private: true},
  {id: '5', description: 'Meet Douglas', date: dayjs('2021-03-31T13:00') , urgent: false, private: false},
  {id: '6', description: 'My Task1', date: dayjs().add(1,'day') , urgent: true, private: true},
  {id: '7', description: 'My Task2', date: dayjs().add(-1,'day') , urgent: true, private: false},
  {id: '8', description: 'My Task3', date: dayjs().add(8,'day'), urgent: false, private: false },
  {id: '9', description: 'No date task', date: undefined, urgent: true, private: true }
];


function App() {
  return (
    <>
      <MyNavbar />
      <Container fluid>
        <Row className="row-height">
          <MyAside />
          <MyMainContent tasks = {fakeTasks}/>
        </Row> 
        <button class="btn btn-lg btn-primary rounded-circle radius">+</button>
      </Container>
    </>
  );
}


export default App;
