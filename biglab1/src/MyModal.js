import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import dayjs from 'dayjs';
import AddTaskForm  from './AddTaskForm';
import UpdateTask from './createContexts.js';

function MyModal(props) {

  const [description, setDescription] = useState(props.currentTask.description ? props.currentTask.description : '');
  const [date, setDate] = useState(props.currentTask.date ? props.currentTask.date : '') ;
  const [taskprivate, setTaskprivate] = useState(props.currentTask.private ? props.currentTask.private : false);
  const [urgent, setUrgent] = useState(props.currentTask.urgent ? props.currentTask.urgent : false);
  const setCurrentTask = useContext(UpdateTask);
  
  const handleAdd = (event) => {
    
    const task = {id: props.lastId+1, description: description, date:( dayjs(date).isValid()) ?  dayjs(date) : undefined , urgent: urgent, private: taskprivate};
    
    
    console.log("adding this task: ");
    console.log(task);
    
    props.addTask(task);
    props.handleClose();
    //clear fields
    setDescription('');
    setDate('');
    setTaskprivate(false);
    setUrgent(false);

    
    const resetTask = {id: undefined, description: undefined, date: undefined, urgent: undefined, private: undefined};
    setCurrentTask(resetTask);



    props.setLastId((old) => old+1);
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