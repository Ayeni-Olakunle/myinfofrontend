/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs"
import { Dropdown } from "react-bootstrap";
import dataListStyle from "./index.module.scss";
import DataList from "../data-list/dataList";
import AddData from "../add-data/addData";

export default function Index() {
    const [display, setDisplay] = useState(0);

    const changeScreen = (index) => {
        setDisplay(index)
    }
    return (
        <section>
            <div className={dataListStyle.holdAll}>
                <div className={dataListStyle.header}>
                    <h3>Sticky Note</h3>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className={dataListStyle.holdDrop}>
                                <span className={dataListStyle.ico}>
                                    <BsPersonCircle />
                                </span>
                                <span className={dataListStyle.name}>
                                    {JSON.parse(sessionStorage.getItem("userLogin")).name}
                                </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => { changeScreen(2) }}>
                                    <span className={dataListStyle.likTage}>
                                        Settings
                                    </span>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <span>
                                        <Link to="/" className={dataListStyle.logout}>Logout</Link>
                                    </span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                </div>
                <div className={dataListStyle.holdData}>
                    <div className={dataListStyle.holdButton}>
                        <button
                            type="button"
                            className={display === 0 ? dataListStyle.active : null}
                            onClick={() => {
                                changeScreen(0)
                            }}
                        >Data List</button>
                        <button
                            type="button"
                            className={display === 1 ? dataListStyle.active : null}
                            onClick={() => {
                                changeScreen(1)
                            }}
                        >Add Data</button>
                    </div>
                </div>
                <div className={dataListStyle.condi}>
                    {display === 0 ? <DataList /> : null}
                    {display === 1 ? <AddData /> : null}
                    {display === 2 ? <h1>Settings Page</h1> : null}
                </div>
            </div>
        </section>
    );
}

