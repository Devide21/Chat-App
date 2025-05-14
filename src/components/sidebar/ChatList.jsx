import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { favourites, directMessages, channels } from "./contacts";

function ChatList({ onSelectContact, onShowArchived }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");


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
          <small className="d-flex px-3 py-2 text-muted small fw-lighter text-start">FAVOURITES</small>
          <div className="px-3">
            {filterContacts(favourites).map((contact) => (
              <div
                key={contact.id}
                className="d-flex align-items-center mb-2"
                onClick={() => onSelectContact(contact)}
                style={{ cursor: "pointer" }}
              >
                <div className={` ${contact.online ? 'active-dot' : 'away-dot'}`}></div>
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="rounded-circle me-2"
                  style={{ width: "32px", height: "32px" }}
                />
                <span className="small fw-medium">{contact.name}</span>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 d-flex justify-content-between align-items-center text-muted small fw-lighter-">
            <small>DIRECT MESSAGES</small>
            <button className="btn text-success btn-sm rounded-2" style={{ padding: "7px 12px", backgroundColor: "rgb(78 172 109 / 28%)" }}>+</button>
          </div>
          <div className="px-3">
            {filterContacts(directMessages).map((contact) => (
              <div
                key={contact.id}
                className="d-flex align-items-center mb-2"
                onClick={() => onSelectContact(contact)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="rounded-circle me-2"
                  style={{ width: "32px", height: "32px" }}
                />
                <span className="small">{contact.name}</span>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 d-flex justify-content-between align-items-center text-muted small fw-lighter-">
            <small>CHANNELS</small>
            <button className="btn text-success btn-sm rounded-2" style={{ padding: "7px 12px", backgroundColor: "rgb(78 172 109 / 28%)" }}>+</button>
          </div>
          <div className="px-3 text-muted text-start">
            {channels.map((channel, idx) => (
              <div
                key={idx}
                className="mb-2"
                onClick={() => onSelectContact({ name: channel, id: idx })}
              >
                <span className="fw-medium"># {channel}</span>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 text-success small pointer"
            onClick={() => onShowArchived(true)}
          >Archived Contacts<i className="ms-2 fa-solid fa-download"></i></div>
        </div>
      </div>
    </>
  );
}

export default ChatList;
