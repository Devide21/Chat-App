import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { contacts as allContacts } from "../sidebar/contacts";

const groupContacts = (filteredList) => {
    const grouped = {};
    filteredList.forEach(contact => {
        const letter = contact.name.charAt(0).toUpperCase();
        if (!grouped[letter]) grouped[letter] = [];
        grouped[letter].push(contact);
    });
    return grouped;
};

function AddMessage({ show, setShow, onSelectContact }) {
    const [searchTerm, setSearchTerm] = useState("");

    const individualContacts = allContacts.filter(c => !c.isGroup);
    const filteredContacts = individualContacts.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const groupedContacts = groupContacts(filteredContacts);

    return (
        <div className={`modal fade ${show ? "show d-block" : ""}`}
            style={{ background: "#00000036" }}
            tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered" >
                <div className="modal-content rounded-3" style={{ height: "520px" }}>
                    <div className="modal-header bg-success text-white rounded-top">
                        <h5 className="modal-title">Contacts</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setShow(false)}
                        ></button>
                    </div>

                    <div className="modal-body px-3 pt-3">
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-white border-end-0">
                                <FaSearch />
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0"
                                placeholder="Search here.."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div style={{ maxHeight: "300px", overflowY: "auto", textAlign: "start" }}>
                            {Object.keys(groupedContacts).sort().map(letter => (
                                <div key={letter}>
                                    <div className="message-modal text-success ps-2">{letter}</div>
                                    {groupedContacts[letter].map(({ id, name }) => (
                                        <div
                                            key={id}
                                            className="py-2 px-3"
                                            role="button"
                                            onClick={() => onSelectContact({ id, name })}
                                        >
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-light text-success"
                            onClick={() => setShow(false)}
                        >
                            Cancel
                        </button>
                        <button className="btn btn-success">
                            <i className="bx bxs-send"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMessage;
