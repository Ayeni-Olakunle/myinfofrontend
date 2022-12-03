/* eslint-disable prettier/prettier */
import React from "react";
import { Form, Button } from "react-bootstrap";
import addDataStyle from "./addData.module.scss";

export default function AddData() {
    return (
        <section>
            <div className={addDataStyle.holdAll}>
                <h2 className={addDataStyle.head}>Add Information</h2>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
}
