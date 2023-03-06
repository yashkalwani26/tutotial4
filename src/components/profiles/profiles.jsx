import React, { useEffect, useState } from "react";
import { Form, FormGroup, FloatingLabel, Row, Container } from 'react-bootstrap';
import Columns from "./columns";


const Profiles = () => {
    const [users, setUsers] = useState([]);
    const [searchResults, setSearchResults] = useState(users);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://express-t4.onrender.com/api/users');
            const userResp = await response.json();
            setUsers(userResp)
            setSearchResults(userResp)
        };
        fetchUsers();
    }, []);

    const onSearch = (event) => {
        let searchKey = event.target.value.trim().toUpperCase();
        if (searchKey) {
            setSearchResults(users.filter(user => {
                return user.name.toUpperCase().includes(searchKey)
            }));
        } else {
            setSearchResults(users)
        }
        return
    }

    return (
        <>
            <div>
                <h1>Profiles</h1>

                <Form >
                    <FormGroup>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Search by first or last name"
                            className="mb-3"
                        >
                            <Form.Control type="search" onInput={onSearch} onChange={onSearch} />
                        </FloatingLabel>
                    </FormGroup>
                </Form>
                <hr />
                <Container>
                    <Row lg={3}>
                        {
                            searchResults.map((user) => {
                                return <Columns user={user} />
                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Profiles;
