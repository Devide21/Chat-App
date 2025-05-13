import React, { useState } from 'react';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { FaSearch } from 'react-icons/fa';

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
        <>
            <div className="border-end bg-white" style={{ height: "100vh", width: "300px" }}>
                <div className="position-sticky top-0 z-3 bg-white p-3 pb-2">
                    <div className="px-2 py-3 d-flex justify-content-between position-sticky top-0 z-3 bg-white p-3 pb-2">
                        <h5 className="mb-0">Contacts</h5>
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
                <div className='p-3 py-1' style={{ height: "78vh", overflow: "auto" }}>
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
        </>
    );
};
// 
export default ContactList;
