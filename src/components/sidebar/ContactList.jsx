import React, { useState } from 'react';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { FaSearch } from 'react-icons/fa';
import { contacts as allContacts } from "./contacts";
import CreateContact from "../Modals/CreateContact";



const groupContacts = (filteredList) => {
    const grouped = {};
    filteredList.forEach(contact => {
        const letter = contact.name.charAt(0).toUpperCase();
        if (!grouped[letter]) grouped[letter] = [];
        grouped[letter].push(contact);
    });
    return grouped;
};

const ContactList = ({ onSelectContact }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showCreateContactModal, setShowCreateContactModal] = useState(false);

    const individualContacts = allContacts.filter(contact => contact.isGroup === false);


    const filteredContacts = individualContacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedContacts = groupContacts(filteredContacts);


    return (
        <>
            <div style={{ height: "100vh", width: "300px" }}>
                <div className="position-sticky top-0 z-3  p-3 pb-2">
                    <div className="px-2 py-3 d-flex justify-content-between position-sticky top-0 z-3  p-3 pb-2">
                        <h5 className="mb-0">Contacts</h5>
                        <button
                            onClick={() => setShowCreateContactModal(true)}
                            className="btn btn-sm rounded-1 add-btn">+
                        </button>
                        {showCreateContactModal && (
                            <CreateContact
                                show={showCreateContactModal}
                                setShow={setShowCreateContactModal}
                            />
                        )}
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
                <div className='p-4 py-1 ' style={{ height: "78vh", overflow: "auto" }}>
                    {Object.keys(groupedContacts).sort().map(letter => (
                        <div key={letter}>
                            <div className="d-flex text-muted small mb-1 mt-3">
                                <span className="px-2 text-success">{letter}</span>
                                <span className="flex-grow-1 bottom-border" />
                            </div>

                            {groupedContacts[letter].map(({ id, name, avatar }) => (
                                <div
                                    key={id}
                                    className="d-flex align-items-center justify-content-between py-1"
                                    role="button"
                                    onClick={() => onSelectContact({ id, name, avatar })}
                                >
                                    <div className="d-flex align-items-center">
                                        {avatar ? (
                                            <img src={avatar} alt={name} className="rounded-circle me-2" style={{ width: 36, height: 36 }} />
                                        ) : (
                                            <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style={{ width: 36, height: 36, fontSize: 12 }}>
                                                {name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                            </div>
                                        )}
                                        <span className='small'>{name}</span>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn btn-white border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis-vertical text-success"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Edit</span><i className="fa-solid fa-pencil"></i></a></li>
                                            <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Block</span><i className="fa-solid fa-ban"></i></a></li>
                                            <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Remove</span><i className="fa-regular fa-trash-can"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default ContactList;
