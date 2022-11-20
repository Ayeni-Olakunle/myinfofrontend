/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginStyle from "./signup-page.module.scss";
import logo from "../../images/logo.jpeg";

export default function SignupPage() {
    const [formDate, setFormDate] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        password2: ""
    });

    const { fullName, email, phone, password, password2 } = formDate

    const onChange = (e) => {
        setFormDate((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section>
            <div className={loginStyle.holdApp}>
                <div className={loginStyle.holdLogin}>
                    <div className={loginStyle.holdImage}>
                        <img src={logo} alt="Logo" className={loginStyle.logo} />
                    </div>
                    <div className={loginStyle.holdInput}>
                        <h1>Sign up</h1>
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="Fullname">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Full name"
                                        id="fullName"
                                        value={fullName}
                                        onChange={onChange}
                                    />
                                </Form.Group>
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
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Phone number"
                                        id="phone"
                                        name="phone"
                                        value={phone}
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
                                <Form.Group className="mb-3" controlId="formBasicPassword1">
                                    <Form.Label>Re-Type Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        id="password2"
                                        name="password2"
                                        value={password2}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" className="btn btn-block" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <p>
                            Already have an account please{" "}
                            <span>
                                <Link to="/">Login</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
