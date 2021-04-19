import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';

function MyAside(props) {
    return (
        <>
            <Collapse in={props.open}>
                <Col lg={4} as="aside" className="d-lg-block py-2 px-lg-3 aside-bg" id="menu-filter">
                    <ListGroup as="ul" defaultActiveKey="#filter-all" variant="flush">
                        <ListGroup.Item as="li" action href="#filter-all">All</ListGroup.Item>
                        <ListGroup.Item as="li" action href="#filter-important">Important</ListGroup.Item>
                        <ListGroup.Item as="li" action href="#filter-today">Today</ListGroup.Item>
                        <ListGroup.Item as="li" action href="#filter-next7days">Next 7 Days</ListGroup.Item>
                        <ListGroup.Item as="li" action href="#filter-private">Private</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Collapse>
        </>
    );
}

export default MyAside;