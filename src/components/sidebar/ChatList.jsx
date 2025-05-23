import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { contacts as initialContacts } from '../sidebar/contacts';
import AddGroup from "../Modals/AddGroup";
import AddMessage from "../Modals/AddMessage";
import CreateContact from "../Modals/CreateContact";

function ChatList({ onSelectContact, onShowArchived }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [showAddMessageModal, setShowAddMessageModal] = useState(false);
  const [showAddGroupModal, setShowAddGroupModal] = useState(false);
  const [showCreateContactModal, setShowCreateContactModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contacts, setContacts] = useState(initialContacts);


  const filterContacts = (list) =>
    list.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleNewDirectMessage = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
    setSelectedContact(newContact);
  };

  return (
    <>
      <div className=" " style={{ height: "100vh", width: "300px" }}>
        <div className="position-sticky top-0 z-3  p-3 pb-2 white-bg">
          <div className="px-2 py-3 d-flex justify-content-between position-sticky top-0 z-3 white-bg p-3  pb-2">
            <h5 className="mb-0">Chats</h5>
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
        <div style={{ overflow: "auto", height: "78vh" }}>
          <small className="d-flex px-3 py-2  small  text-start">FAVOURITES</small>
          <div className="px-4 small">
            {filterContacts(contacts).map((contact) => (
              contact.isFavourite && contact.isDirectMessage === false && (
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
                </div>)
            ))}
          </div>

          <div className="px-3 py-2 d-flex justify-content-between align-items-center small fw-lighter-">
            <small>DIRECT MESSAGES</small>

            <button
              onClick={() => setShowAddMessageModal(true)}
              className="btn btn-sm rounded-1 add-btn">+</button>
          </div>
          {showAddMessageModal && (
            <AddMessage
              show={showAddMessageModal}
              setShow={setShowAddMessageModal}
              onSelectContact={handleNewDirectMessage}
            />
          )}


          <div className="px-4">
            {filterContacts(contacts).map((contact) => (
              contact.isDirectMessage && contact.isGroup === false && (
                <div
                  key={contact.id}
                  className="d-flex align-items-center mb-2 small"
                  onClick={() => onSelectContact(contact)}
                  style={{ cursor: "pointer" }}
                >
                  {contact.avatar ? (
                    <img src={contact.avatar} alt={contact.name} className="rounded-circle me-2" style={{ width: 36, height: 36 }} />
                  ) : (
                    <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style={{ width: 36, height: 36, fontSize: 12 }}>
                      {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                  )}
                  <span className="small">{contact.name}</span>
                </div>
              )
            ))}
          </div>

          <div className="px-3 py-2 d-flex justify-content-between align-items-center  small fw-lighter">
            <small>CHANNELS</small>
            <button
              onClick={() => setShowAddGroupModal(true)}
              className="btn btn-sm rounded-1 add-btn">+</button>

            {showAddGroupModal && (
              <AddGroup
                show={showAddGroupModal}
                setShow={setShowAddGroupModal}
                onSelectGroup={(contact) => {
                  console.log("Selected contact:", contact);
                  setSelectedContact(contact);
                  setShowAddGroupModal(false);
                }}
              />
            )}


          </div>
          <div className="px-4 text-start">
            {contacts.map((contact, idx) => (
              contact.isGroup && !contact.isArchived && (
                <div
                  key={idx}
                  className="mb-2 d-flex align-items-center small"
                  onClick={() => onSelectContact({ name: contact.name, id: idx })}
                >
                  {contact.avatar ? (
                    <img src={contact.avatar} alt={contact.name} className="rounded-circle me-2" style={{ width: 36, height: 36 }} />
                  ) : (
                    <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style={{ width: 36, height: 36, fontSize: 12 }}>
                      {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                  )}
                  <span className="fw-medium"># {contact.name}</span>
                </div>
              )
            ))}
          </div>

          <small className="px-3 py-2 text-success small pointer"
            onClick={() => onShowArchived(true)}
          >Archived Contacts<i className="ms-2 fa-solid fa-download"></i></small>
        </div>
      </div >
    </>
  );
}

export default ChatList;