import React from 'react';
import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Columns = (props) => {
    const navigate = useNavigate();
    let user = props.user

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Button variant="outline-primary" size="40px" onClick={() => { navigate(`/details/${user._id}`) }}>

                    <Card.Header>{user.name}</Card.Header>
                    <Card.Img variant="top" src={user.picture} />
                    <Card.Body>
                        <Card.Text>
                            {user.address}
                        </Card.Text>
                    </Card.Body>

                </Button>
            </Card>
        </Col >
    )
}

export default Columns;
