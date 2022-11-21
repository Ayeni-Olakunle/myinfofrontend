/* eslint-disable prettier/prettier */
import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, } from "react-router-dom";
// import { reset } from "../../features/auth/authSlice";
import loginStyle from "./signup-page.module.scss";
import logo from "../../images/logo.jpeg";
// import Loading from "../loading/loading";

export default function SignupPage() {
    const [formDate, setFormDate] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        password2: ""
    });

    const { fullName, email, phone, password, password2 } = formDate
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    // useEffect(() => {
    //     if (isError) {
    //         console.log(message);
    //     }

    //     if (isSuccess || user) {
    //         navigate("/signup-page")
    //     }
    //     dispatch(reset())
    // }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormDate((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
        console.log(formDate);
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
                                <Form.Group className="mb-3" controlId="formBasicFullName">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Full name"
                                        name="fullName"
                                        value={fullName}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
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
                                        name="phone"
                                        value={phone}
                                        onChange={onChange}

                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
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
            {/* {isLoading ? <Loading /> : null} */}
        </section>
    );
}
