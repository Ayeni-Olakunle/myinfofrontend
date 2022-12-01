/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Modal } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";
import successStyle from "./successModal.module.scss";

function SucceesModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body style={{ textAlign: "center" }}>
                <div>
                    <AiOutlineCheckCircle className={successStyle.close} />
                </div>
                <p className={successStyle.successText}>Successful</p>

                <Button type="button" className={successStyle.closeButin} onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default SucceesModal;
