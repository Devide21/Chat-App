import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import { ThreeDotsVertical } from 'react-bootstrap-icons';

const contacts = [
    { id: 1, name: "Alvarez Luna", avatar: null },
    { id: 2, name: "Carla Serrano", avatar: "https://i.pravatar.cc/36?u=carla" },
    { id: 3, name: "Brain o Conner", avatar: "https://i.pravatar.cc/36?u=braino" },
    { id: 4, name: "Dean Vargas", avatar: null },
    { id: 5, name: "Donaldson Riddle", avatar: "https://i.pravatar.cc/36?u=donaldson" },
    { id: 6, name: "Daniels Webster", avatar: null },
    { id: 8, name: "Earnestine Sears", avatar: "https://i.pravatar.cc/36?u=earnestine" },
    { id: 9, name: "Earnestine Sears", avatar: "https://i.pravatar.cc/36?u=earnestine" },
    { id: 10, name: "Earnestine Sears", avatar: "https://i.pravatar.cc/36?u=earnestine" },
];

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

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedContacts = groupContacts(filteredContacts);

    return (
        <div className="p-3" style={{ width: '300px', height: '100vh', borderRight: '1px solid #eee' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 fw-bold">Contacts</h5>
                <button className="btn text-success btn-sm rounded-2" style={{ padding: "7px 12px", backgroundColor: "rgb(78 172 109 / 28%)" }}>+</button>
            </div>

            <div className="input-group mb-3">
                <FormControl
                    placeholder="Search Contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="input-group-text bg-white">
                    <i className="bi bi-search"></i>
                </span>
            </div>
            <div style={{ height: "79vh", overflowY: "scroll" }}>
                {Object.keys(groupedContacts).sort().map(letter => (
                    <div key={letter}>
                        <div className="d-flex text-muted small mb-1 mt-3">
                            <span className="px-2 text-success">{letter}</span>
                            <span className="flex-grow-1 border-bottom" />
                        </div>
                        {groupedContacts[letter].map(({ id, name, avatar }) => (
                            <div key={id} className="d-flex align-items-center justify-content-between py-2">
                                <div className="d-flex align-items-center">
                                    {avatar ? (
                                        <img src={avatar} alt={name} className="rounded-circle me-2" style={{ width: 36, height: 36 }} />
                                    ) : (
                                        <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style={{ width: 36, height: 36, fontSize: 12 }}>
                                            {name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                        </div>
                                    )}
                                    <span
                                        onClick={() => onSelectContact(name)}
                                    >{name}</span>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-white border-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <ThreeDotsVertical />
                                    </button>
                                    <ul className="dropdown-menu ">
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
    );
};

export default ContactList;
