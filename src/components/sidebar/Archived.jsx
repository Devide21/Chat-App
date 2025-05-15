import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { contacts } from "./contacts";

function Archived({ onSelectContact, onShowArchived }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filterContacts = (list) =>
        list.filter((contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <>
            <div className="border-end bg-white" style={{ height: "100vh", width: "300px" }}>
                <div className="position-sticky top-0 z-3 bg-white p-3 pb-2">
                    <div className="px-2 py-3 d-flex justify-content-between position-sticky top-0 z-3 bg-white p-3 pb-2">
                        <h5 className="mb-0">Chats</h5>
                        <button className="btn text-success btn-sm rounded-2" style={{ padding: "7px 12px", backgroundColor: "rgb(78 172 109 / 28%)" }}>+</button>
                    </div>

                    <div className=" py-2 ">
                        <div className="input-group bg-light rounded-2">
                            <span className="input-group-text text-secondary bg-light border-0">
                                <FaSearch />
                            </span>
                            <input
                                type="text"
                                className="form-control border-0 rounded-3  text-body-tertiary bg-light fw-lighter fs-6"
                                placeholder="Search here..."
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ overflow: "auto", height: "78vh" }}>
                    <small className="d-flex px-3 py-2 text-muted small fw-lighter text-start"
                        onClick={() => onShowArchived(false)}
                    >Archived</small>
                    <div className="px-3">
                        {filterContacts(contacts).map((contact) => (
                            contact.isArchived && (
                                <div
                                    key={contact.id}
                                    className="d-flex align-items-center mb-2"
                                    onClick={() => onSelectContact(contact)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className={` ${contact.online ? 'active-dot' : 'away-dot'}`}></div>
                                    {contact.avatar ? (
                                        <img src={contact.avatar} alt={contact.name} className="rounded-circle me-2" style={{ width: 36, height: 36 }} />
                                    ) : (
                                        <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style={{ width: 36, height: 36, fontSize: 12 }}>
                                            {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                        </div>
                                    )}
                                    <span className="small fw-medium">{contact.name}</span>
                                </div>
                            )
                        ))}
                    </div>

                    <div className="px-3 py-2 text-success small pointer"
                        onClick={() => onShowArchived(false)}
                    >Chats<i className="ms-2 fa-solid fa-download"></i></div>
                </div>
            </div>
        </>
    );
}

export default Archived;
