/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs"
import { Dropdown } from "react-bootstrap";
import dataListStyle from "./index.module.scss";

export default function Index() {
    return (
        <section>
            <div className={dataListStyle.holdAll}>
                <div className={dataListStyle.header}>
                    <h3>Sticky Note</h3>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                <span className={dataListStyle.ico}>
                                    <BsPersonCircle />
                                </span>
                                <span className={dataListStyle.name}>
                                    {JSON.parse(sessionStorage.getItem("userLogin")).name}
                                </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <span>
                                        <Link to="/" className={dataListStyle.likTage}>Settings</Link>
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
                        <button type="button">Data List</button>
                        <button type="button">Add Data</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

