import { ListGroup, Col, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyAside(props) {
    return (
        <>
            <Collapse in={props.open}>
                <Col lg={4} as="aside" className="d-lg-block py-2 px-lg-3 aside-bg" id="menu-filter">
                    <ListGroup as="ul" defaultActiveKey="#filter-all" variant="flush">
                        <Link to={"/All"}>
                            <ListGroup.Item as="li" action href="#filter-all" onClick={() => (props.setFilter('All'))}>All</ListGroup.Item>
                        </Link>
                        <Link to={"/Important"}>
                            <ListGroup.Item as="li" action href="#filter-important" onClick={() => (props.setFilter('Important'))}>Important</ListGroup.Item>
                        </Link>
                        <Link to={"/Today"}>
                            <ListGroup.Item as="li" action href="#filter-today" onClick={() => (props.setFilter('Today'))}>Today</ListGroup.Item>
                        </Link>
                        <Link to={"/Next7Days"}>
                            <ListGroup.Item as="li" action href="#filter-next7days" onClick={() => (props.setFilter('Next 7 Days'))}>Next 7 Days</ListGroup.Item>
                        </Link>
                        <Link to={"/Private"}>
                            <ListGroup.Item as="li" action href="#filter-private" onClick={() => (props.setFilter('Private'))}>Private</ListGroup.Item>
                        </Link>
                    </ListGroup>
                </Col>
            </Collapse>
        </>
    );
}

export default MyAside;