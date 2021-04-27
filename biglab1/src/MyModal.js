import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import dayjs from 'dayjs';
import AddTaskForm  from './AddTaskForm';

function MyModal(props) {

  const [description, setDescription] = useState('');
  const [date, setDate] = useState('') ;
  const [taskprivate, setTaskprivate] = useState(false);
  const [urgent, setUrgent] = useState(false);

  const handleAdd = (event) => {
      props.setLastId((old) => old+1);

      const task = {id: props.lastId, description: description, date:( dayjs(date).isValid()) ?  dayjs(date) : undefined , urgent: urgent, private: taskprivate};
      console.log("adding this task: ");
      console.log(task);

      props.addTask(task);
      props.handleClose();
      //clear fields
      setDescription('');
      setDate('');
      setTaskprivate(false);
      setUrgent(false);
  };

  /**
   * DEPRECATED: (it was used by the close button in modal footer )
   * close the modal in a clean way
   */
  // const handleCancel = (event) => {
  //   props.handleClose();
  //   setDescription('');
  //   setDate('');
  //   setTaskprivate(false);
  //   setUrgent(false);
  // }
  
  const changePrivate = () => setTaskprivate(!taskprivate);
  const changeUrgent = () => setUrgent(!urgent);

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddTaskForm handleAdd={handleAdd} setDescription={setDescription} setDate={setDate} changePrivate={changePrivate} changeUrgent={changeUrgent}/>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default MyModal;