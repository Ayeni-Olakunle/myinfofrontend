/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import axios from "axios";
import loginStyle from "./signup-page.module.scss";
import logo from "../../images/logo.jpeg";
// import Loading from "../loading/loading";

export default function SignupPage() {
    // const [match, setMatch] = useState("")
    // const [load, setLoad] = useState(false)
    const [formDate, setFormDate] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        password2: ""
    });

    const { name, email, password, phoneNumber } = formDate
    // const navigate = useNavigate();

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
                        <h1>Sign up</h1>
                        <div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicFullName">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Full name"
                                        name="name"
                                        autoComplete="true"
                                        value={name}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        autoComplete="true"
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
                                        name="phoneNumber"
                                        autoComplete="true"
                                        value={phoneNumber}
                                        onChange={onChange}

                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        autoComplete="true"
                                        value={password}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword2">
                                    <Form.Label>Re-Type Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="true"
                                        name="password2"
                                    // value={password2}
                                    // onChange={onChange}
                                    />
                                    {/* <Form.Text style={{ color: "tomato !important" }}>{match}</Form.Text> */}
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
            {/* {load ? <Loading /> : null} */}
        </section>
    );
}
