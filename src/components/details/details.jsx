import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ListGroup } from "react-bootstrap"
import _ from "lodash"

const Details = (props) => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const [userKeys, setUserKeys] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
            const userResp = await response.json();
            delete userResp.friends
            delete userResp.tags
            setUser(userResp);
            setUserKeys(Object.keys(userResp))
        };
        fetchUser();
    }, [id]);

    return (
        <>
            <h1>Details for {user.name}</h1>
            <ListGroup>
                {
                    userKeys.map((key, index) => (<ListGroup.Item key={index}><b>{_.capitalize(key)}</b>: {user[key]}</ListGroup.Item>))
                }
            </ListGroup>
        </>
    )
}

export default Details
