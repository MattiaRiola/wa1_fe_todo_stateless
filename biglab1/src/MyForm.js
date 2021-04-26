import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MyForm(props) {


    return (
        <>
            <Form>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Task description</Form.Label>
                    <Form.Control type="description" placeholder="Enter task description" onChange={td => props.setDescription(td.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicDate">

                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="date" onChange={td => props.setDate(td.target.value)}/>
                </Form.Group>
                <Form.Group controlId="privateCheckbox">
                    <Form.Check type="checkbox" label="Private" onClick={props.changePrivate} />
                </Form.Group>
                <Form.Group controlId="urgentCheckbox">
                    <Form.Check type="checkbox" label="Urgent" onClick={props.changeUrgent} />
                </Form.Group>
            </Form>
        </>);
}

export default MyForm;