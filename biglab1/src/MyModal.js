import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MyForm from './MyForm.js';
import dayjs from 'dayjs';

function MyModal(props) {

  const [description, setDescription] = useState('');
  const [date, setDate] = useState('') ;
  const [taskprivate, setTaskprivate] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleAdd = (event) => {
      event.preventDefault();
      const task = {id:'3567', description: description, date: dayjs(date), urgent: urgent, private: taskprivate};
      // VALIDATE !!!
      /* Validation rules: course != '', course not already in props.courses */
      //if(valid)
      props.addTask(task);
      props.handleClose();
      //clear fields
      setDescription('');
      setDate('');
      setTaskprivate(false);
      setUrgent(false);
  };

  const handleCancel = (event) => {
    props.handleClose();
    setDescription('');
    setDate('');
    setTaskprivate(false);
    setUrgent(false);
  }
  const changePrivate = () => setTaskprivate(!taskprivate);
  const changeUrgent = () => setUrgent(!urgent);

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <MyForm setDescription={setDescription} setDate={setDate} changePrivate={changePrivate} changeUrgent={changeUrgent}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;