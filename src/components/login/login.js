/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginStyle from "./login.module.scss";
import logo from "../../images/logo.jpeg";
// import Loading from "../loading/loading";


export default function Login() {
    // const [match, setMatch] = useState("")
    // const [load, setLoad] = useState(false)
    const [formDate, setFormDate] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formDate

    const onChange = (e) => {
        setFormDate((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    return (
        <section>
            <div className={loginStyle.holdApp}>
                <div className={loginStyle.holdLogin}>
                    <div className={loginStyle.holdImage}>
                        <img src={logo} alt="Logo" className={loginStyle.logo} />
                    </div>
                    <div className={loginStyle.holdInput}>
                        <h1>Login</h1>
                        <div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        {/* <p>{match}</p> */}
                        <p>
                            Don&rsquo;t have an account please{" "}
                            <span>
                                <Link to="signup-page">sign up</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* {load ? <Loading /> : null} */}
        </section>
    );
}
