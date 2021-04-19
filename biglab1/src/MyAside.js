import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';

function MyAside(props) {
    return (
      <>
        <Col sm={4} as="aside" className="d-none d-sm-block py-2 px-lg-3 aside-bg" id="menu-filter">
          <ListGroup as="ul" defaultActiveKey="#filter-all" variant="flush">
            <ListGroup.Item as="li" action href="#filter-all">All</ListGroup.Item>
            <ListGroup.Item as="li" action href="#filter-important">Important</ListGroup.Item>
            <ListGroup.Item as="li" action href="#filter-today">Today</ListGroup.Item>
            <ListGroup.Item as="li" action href="#filter-next7days">Next 7 Days</ListGroup.Item>
            <ListGroup.Item as="li" action href="#filter-private">Private</ListGroup.Item>
          </ListGroup>
        </Col>
      </>
    );
  }

export default MyAside;