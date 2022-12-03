/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, login } from "../../features/auth/loginSlice";
import loginStyle from "./login.module.scss";
import logo from "../../images/logo.jpeg";
import Loading from "../loading/loading";


export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [match, setMatch] = useState("");

    const [formDate, setFormDate] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formDate;
    const { userLogin, isLoading, isError, isSuccess, message } = useSelector((state) => state.login)

    const onChange = (e) => {
        setFormDate((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            email,
            password
        }
        dispatch(login(loginData))
    };

    useEffect(() => {
        if (isError) {
            setMatch("Incorrect email address or password")
        }

        if (isSuccess || userLogin) {
            navigate("/information")
        }

        dispatch(reset())

    }, [userLogin, isError, isSuccess, message, navigate, dispatch]);
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
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
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

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                    />
                                    <Form.Text style={{ color: "tomato !important" }}>{match}</Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <p>
                            Don&rsquo;t have an account please{" "}
                            <span>
                                <Link to="signup-page">sign up</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {isLoading ? <Loading /> : null}
        </section>
    );
}
