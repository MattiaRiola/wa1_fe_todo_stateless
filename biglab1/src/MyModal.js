import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import dayjs from 'dayjs';
import AddTaskForm  from './AddTaskForm';

function MyModal(props) {
  //console.log("this is the current task: " + props.currentTask.description);
  const [description, setDescription] = useState(props.currentTask ? props.currentTask.description : '');
  const [date, setDate] = useState(props.currentTask ? 
    (props.currentTask.date ? dayjs(props.currentTask.date) : '' )
    : '') ;
  const [taskprivate, setTaskprivate] = useState(props.currentTask ? props.currentTask.private : false);
  const [urgent, setUrgent] = useState(props.currentTask ? props.currentTask.urgent : false);

  const [hours, setHours] = useState(props.currentTask ? (props.currentTask.date ? dayjs(props.currentTask.date).format('HH:mm').toString() : '') : '');

  const handleAdd = (event) => {
    const time = hours ? hours.split(":") : "23:59".split(":");
    const hour = time[0];
    const minutes = time[1];

    const task = {id: props.lastId+1, description: description, date:( dayjs(date).isValid()) ?  dayjs(date).set('h',hour).set('m',minutes) : undefined , urgent: urgent, private: taskprivate};
    
    
    console.log("adding this task: ");
    console.log(task);
    
    props.addTask(task);
  
    setDescription('');
    setDate('');
    setHours('');
    setTaskprivate(false);
    setUrgent(false);

    props.handleClose();
    
    props.setLastId((old) => old+1);
  };

  const handleEdit = (event) => {
    const time = hours.split(":");
    const hour = time[0];
    const minutes = time[1];
    
    const task = {id: props.currentTask.id, description: description, date:( dayjs(date).isValid()) ?  dayjs(date).set('h',hour).set('m',minutes) : undefined , urgent: urgent, private: taskprivate};
    
    
    console.log("editing this task: ");
    console.log(task);
    
    props.editTask(task);
    props.handleClose();
    
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
          <Modal.Title>{props.currentTask ? "Edit task" : "Add a new task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddTaskForm handleAddOrEdit={props.currentTask ? handleEdit : handleAdd} setDescription={setDescription} setDate={setDate} changePrivate={changePrivate} changeUrgent={changeUrgent} setHours={setHours} hours={hours} description={description} date={date} taskprivate={taskprivate} urgent={urgent}/>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default MyModal;