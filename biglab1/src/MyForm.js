import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MyForm(props) {
    const [description, setDescription] = useState('') ;  // props.courses[0].coursecode
    const [date, setDate] = useState('') ;
    const [urgent, setUrgent] = useState(false);
    const [taskprivate, setTaskPrivate] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    
    const handleAdd = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Form>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Task description</Form.Label>
                    <Form.Control type="description" placeholder="Enter task description" onChange={td => setDescription(td.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicDate">

                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="date" onChange={td => setDate(td.target.value)} />
                </Form.Group>
                <Form.Group controlId="privateCheckbox">
                    <Form.Check type="checkbox" label="Private" onClick={() => setTaskPrivate(!taskprivate)} />
                </Form.Group>
                <Form.Group controlId="urgentCheckbox">
                    <Form.Check type="checkbox" label="Urgent" onClick={() => setUrgent(!urgent)} />
                </Form.Group>
            </Form>
        </>);
}

export default MyForm;