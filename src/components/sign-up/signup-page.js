/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import loginStyle from "./signup-page.module.scss";
import logo from "../../images/logo.jpeg";
import Loading from "../loading/loading";
import SucceesModal from "../modals/successModal";
import ErrorModal from "../modals/errorModal";
import { reset, register } from "../../features/auth/authSlice";

export default function SignupPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [match, setMatch] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [errModal, setErrModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);


    const [formDate, setFormDate] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        password2: ""
    });

    const { name, email, password, password2, phoneNumber } = formDate;
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


    const onChange = (e) => {
        setFormDate((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            setMatch("Password not match");
        } else {
            const userData = {
                name,
                email,
                phoneNumber,
                password
            }
            dispatch(register(userData))
        }
    };

    useEffect(() => {
        if (isError) {
            setErrorMsg(message)
        }

        if (isSuccess || user) {
            setSuccessModal(true)
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch]);
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
                                        value={password2}
                                        onChange={onChange}
                                    />
                                    <Form.Text style={{ color: "tomato !important" }}>{match}</Form.Text>
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
            {isLoading ? <Loading /> : null}
            <ErrorModal
                show={errModal}
                onHide={() => setErrModal(false)}
                errorMsg={errorMsg || "Opps something went wrong"}
            />
            <SucceesModal
                show={successModal}
                onHide={() => {
                    navigate("/")
                    setSuccessModal(false);
                }}
            />
        </section>
    );
}
