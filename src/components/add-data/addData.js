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
                        <Form.Group className="mb-3">
                            <Form.Label>Link name</Form.Label>
                            <Form.Control type="text" placeholder="Link name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="text" placeholder="Link" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
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
