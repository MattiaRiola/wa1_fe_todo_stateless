import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function AddTaskForm(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handle submit from AddTaskForm component");
        console.log("event:");
        console.log(event);
        const form = event.currentTarget;
        console.log("form validity: " + form.checkValidity())
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else{
            console.log("calling handleAdd... ")
             props.handleAdd();
         }
        setValidated(true);
        
    };
    

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formBasicDescrption">
                    <Form.Label>Task description</Form.Label>
                    <Form.Control
                        required
                        type="description"
                        placeholder="Enter task description"
                        onChange={td => props.setDescription(td.target.value)}
                    />
                    <Form.Control.Feedback>ok</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md="8" controlId="formBasicDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="date"
                        onChange={td => props.setDate(td.target.value)}
                    />
                </Form.Group>
                </Form.Row>
                <Form.Row>
                    
                <Form.Group as={Col} md="4" controlId="privateCheckbox">
                    <Form.Check type="checkbox" label="Private" onClick={props.changePrivate}/>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="urgentCheckbox">
                    <Form.Check type="checkbox" label="Urgent" onClick={props.changeUrgent}/>
                </Form.Group>
                </Form.Row>
            <Button type="submit">Add task</Button>

        </Form>
    );
}


export default AddTaskForm;