/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import errStyle from "./errorModal.module.scss";
// import errStyle {}

function ErrorModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body style={{ textAlign: "center" }}>
                <div>
                    <AiOutlineCloseCircle className={errStyle.close} />
                </div>
                <p className={errStyle.errText}>
                    {props.errorMsg}
                </p>

                <Button
                    type="button"
                    className={errStyle.closeButin}
                    onClick={props.onHide}
                >
                    Close
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default ErrorModal;
