/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLink, reset } from "../../features/addData/addDataSlice";
import Loading from "../loading/loading";
import ErrorModal from "../modals/errorModal";
import dataListStyle from "./dataList.module.scss";

export default function DataList() {
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState("");
    const [errModal, setErrModal] = useState(false);
    const { linkResponse, isLoading, isError, message } = useSelector((state) => state.post);

    useEffect(() => {
        if (isError) {
            setErrorMsg(message);
        }

        dispatch(getLink())

        return () => {
            dispatch(reset())
        }
    }, [isError, message, dispatch])
    return (
        <section>
            <div className={dataListStyle.holdAll}>
                {
                    linkResponse.map((item) => {
                        return (
                            <div className={dataListStyle.holdContent} key={item._id}>
                                <div>
                                    <h4>{item.linkName}</h4>
                                    <p>{item.description}</p>
                                    <p>{new Date(item.createdAt).toLocaleString("lookup")}</p>
                                </div>
                                <div className={dataListStyle.holdButton}>
                                    <Button className="mb-3" variant="success">View</Button>
                                    <Button variant="danger">Delete</Button>
                                </div>
                            </div>
                        )
                    })
                }

                <div className={dataListStyle.holdContent}>
                    <div>
                        <h4>The Header Text</h4>
                        <p>ewfefwefwefw</p>
                        <p>Date</p>
                    </div>
                    <div className={dataListStyle.holdButton}>
                        <Button className="mb-3" variant="success">View</Button>
                        <Button variant="danger">Delete</Button>
                    </div>
                </div>
            </div>
            {isLoading ? <Loading /> : null}
            <ErrorModal
                show={errModal}
                onHide={() => setErrModal(false)}
                errorMsg={errorMsg || "Opps something went wrong"}
            />
        </section>
    );
}
