/* eslint-disable prettier/prettier */
import React from "react";
import { Button } from "react-bootstrap";
import dataListStyle from "./dataList.module.scss";

export default function DataList() {
    return (
        <section>
            <div className={dataListStyle.holdAll}>
                <div className={dataListStyle.holdContent}>
                    <div>
                        <h4>The Header Text</h4>
                        <p>ewfefwefwefwef</p>
                        <p>Date</p>
                    </div>
                    <div className={dataListStyle.holdButton}>
                        <Button className="mb-3" variant="success">View</Button>
                        <Button variant="danger">Delete</Button>
                    </div>
                </div>
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
        </section>
    );
}
