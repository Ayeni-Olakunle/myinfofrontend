/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createLink, reset } from "../../features/addData/addDataSlice";
import addDataStyle from "./addData.module.scss";
import Loading from "../loading/loading";
import SucceesModal from "../modals/successModal";
import ErrorModal from "../modals/errorModal";

export default function AddData() {
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState("");
    const [errModal, setErrModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [postData, setPostData] = useState({
        linkName: "",
        link: "",
        description: ""
    });

    const { linkName, link, description } = postData;
    const { linkResponse, isError, isSuccess, isLoading, message } = useSelector((stata) => stata.post);

    const onChange = (e) => {
        setPostData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const postDataMe = {
            linkName,
            link,
            description
        }
        dispatch(createLink(postDataMe));
        dispatch(reset())
        setPostData({
            linkName: "",
            link: "",
            description: ""
        })
    };

    useEffect(() => {
        if (isError || linkResponse === null) {
            setErrorMsg(message)
            setErrModal(true)
        }

        if (isSuccess) {
            setSuccessModal(true)
        }

        dispatch(reset())
    }, [linkResponse, isError, isSuccess, isLoading, message, dispatch])

    return (
        <section>
            <div className={addDataStyle.holdAll}>
                <h2 className={addDataStyle.head}>Add Information</h2>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Link name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Link name"
                                name="linkName"
                                value={linkName}
                                onChange={onChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Link"
                                name="link"
                                value={link}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="description"
                                name="description"
                                value={description}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
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
                    setSuccessModal(false);
                }}
            />
        </section>
    );
}
