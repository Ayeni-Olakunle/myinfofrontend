/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs"

export default function DataList() {
    return (
        <section>
            <div>
                <div>
                    <h1>Sticky Note</h1>
                    <div>
                        <span>
                            <Link to="/">Logout</Link>
                        </span>
                        <span>
                            <BsPersonCircle />
                        </span>
                    </div>
                </div>
                <h1>Data List</h1>
            </div>
        </section>
    );
}
