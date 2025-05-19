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
            <div style={{ height: "100vh", width: "300px" }}>
                <div className="position-sticky top-0 z-3  p-3 pb-2">
                    <div className="px-2 py-3 d-flex justify-content-between position-sticky top-0 z-3  p-3 pb-2">
                        <h5 className="mb-0">Chats</h5>
                        <button
                            className="btn btn-sm rounded-1 add-btn">+
                        </button>
                    </div>

                    <div className=" py-2 ">
                        <div className="input-group position-relative rounded-2">
                            <input
                                type="text"
                                className="form-control border-0 rounded-3   fw-lighter fs-6"
                                placeholder="Search here..."
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <i className="bx bx-search position-absolute"
                                style={{ top: "10px", right: "12px" }}>
                            </i>
                        </div>
                    </div>
                </div>
                <div style={{ overflow: "auto", height: "78vh" }}>
                    <small className="d-flex px-3 py-2  small fw-lighter text-start"
                        onClick={() => onShowArchived(false)}
                    >Archived</small>
                    <div className="px-4 small">
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
