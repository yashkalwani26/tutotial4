import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup } from "react-bootstrap"


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);

        callApi(email, password)
            .then(resp => {
                console.log(200)
                if (resp.status === 200) {
                    console.log("Login Successful!")
                    navigate("/profiles")
                }
            })

    }

    const callApi = (username, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": username,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        return fetch("https://express-t4.onrender.com/api/login", requestOptions)
    }


    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }


    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Form.Label>
                        <h6>Email</h6>
                    </Form.Label>
                    <Form.Control name="email" type="email" value={email} id="email" onChange={handleEmail} />
                </FormGroup>
                <FormGroup>
                    <Form.Label>
                        <h6> Password</h6>
                    </Form.Label>
                    <Form.Control name="password" type="password" value={password} id="password" onChange={handlePassword} />
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>

        </div>
    )
}

export default Login;
