import React, { useState } from "react";
import ChatList from "./sidebar/ChatList";
import WelcomePane from "./WelcomePane";
import IconBar from "./IconBar";
import ContactList from "./sidebar/ContactList";
import SidebarContent from "./SidebarContent";
import Settings from "./sidebar/Settings";
import ChatDetails from "./sidebar/ChatDetails";
import { useRef, useEffect } from 'react';
import { ToggleSidebar } from "../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";
import SharedMessages from "./sidebar/SharedMessages";
import { UpdateSidebarType } from "../redux/slices/app";
import CallModal from "./Modals/CallModal";
import VideoModal from "./Modals/VideoModal"
import Archived from "./sidebar/Archived";


function ChatLayout() {
  const [sideIconbar, setSideIconbar] = useState("ChatList");
  const [selectedContact, setSelectedContact] = useState(null);
  const [showProfile, setShowProfile] = useState(true);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showAddMessageModal, setShowAddMessageModal] = useState(false);
  const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    dispatch(UpdateSidebarType("CONTACT"));
  }, []);

  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', text: 'Hey team, any update on the report?', time: '10:05 AM', mine: false, profile: 'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg' },
    { id: 2, sender: 'You', text: 'Working on the charts now. Will share soon!', time: '10:06 AM', mine: true, profile: 'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg' },
    { id: 3, sender: 'Bob', text: 'I’ve uploaded the raw data in the drive.', time: '10:07 AM', mine: false, profile: 'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg' },
    { id: 4, sender: 'You', text: 'Perfect, thanks!', time: '10:08 AM', mine: true, profile: 'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg' }
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const messagesEndRef = useRef(null);

  const [addMessage, setAddMessage] = useState('');
  const handleChange = (e) => {
    setAddMessage(e.target.value);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (addMessage.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      text: addMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mine: true,
      profile: 'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg'
    };

    setMessages([...messages, newMessage]);
    setAddMessage('');
  };

  const handleSidebarChange = (item) => {
    setSideIconbar(item)
  }
  const handleArchiveChange = (item) => {
    setShowArchived(item)
  }

  const dispatch = useDispatch();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <div className="d-flex main-body">
      <div className="d-flex">
        <IconBar onSelectedIcon={handleSidebarChange} />
        {showArchived ? (
          <Archived onSelectContact={setSelectedContact}
            onShowArchived={setShowArchived} />
        ) : (
          <SidebarContent
            sidebar={sideIconbar}
            setSelectedContact={setSelectedContact}
            onShowArchived={setShowArchived}
          />
        )}
      </div>
      <div className="d-flex flex-column vh-100" style={{ width: "100%" }}>
        {selectedContact ? (

          // ChatArea.jsx
          <div className="d-flex flex-column vh-100" style={{ width: "100%" }}>
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom bg-light">
              <div className="d-flex align-items-center">

                <div className="rounded-circle text-white d-flex align-items-center justify-content-center me-2" style={{ width: 40, height: 40 }}>
                  <div className={` ${selectedContact.online ? 'active-dot' : 'away-dot'}`}></div>
                  {selectedContact.avatar ? (
                    <img src={selectedContact.avatar} alt={selectedContact.name} className="rounded-circle me-2" style={{ width: 40, height: 40 }} />
                  ) : (
                    <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-1" style={{ width: 40, height: 40, fontSize: 12 }}>
                      {selectedContact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="text-start">
                  <div
                    onClick={() => {
                      dispatch(ToggleSidebar());
                    }}
                    className="fw-bold">{selectedContact.name}</div>
                  <small className="text-muted">{selectedContact.online ? 'Active' : 'Away'}</small>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4 text-secondary">
                <i className="fas fa-search pointer"></i>
                <button className="p-0 btn btn-white text-secondary"
                  onClick={() => setShowCallModal(true)}>
                  <i className="fa-solid fa-phone-volume"></i>
                </button>
                <CallModal user={selectedContact} show={showCallModal} setShow={setShowCallModal} />

                <button className="p-0 btn btn-white text-secondary"
                  onClick={() => setShowVideoModal(true)}>
                  <i className="fa-solid fa-video"></i>
                </button>
                <VideoModal user={selectedContact} show={showVideoModal} setShow={setShowVideoModal} />
                <i
                  onClick={() => {
                    dispatch(ToggleSidebar());
                  }}
                  className="fas fa-info-circle pointer"></i>
                <div className="dropdown">
                  <button className="btn btn-white border-0  p-0 fs-5 fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-ellipsis-vertical text-secondary"></i>
                  </button>
                  <ul className="dropdown-menu ">
                    <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Archive</span><i className="fa-solid fa-download"></i></a></li>
                    <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Mute</span><i className="fa-solid fa-microphone-slash"></i></a></li>
                    <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Delete</span><i className="fa-regular fa-trash-can"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Banner */}
            <div className="bg-warning bg-opacity-25 text-warning d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
              <span><i className="fas fa-thumbtack me-2"></i>10 Pinned</span>
              <span><i className="fas fa-plus me-3"></i><i className="fas fa-times"></i></span>
            </div>

            {/* ++++++++++++++main++++++++++++++++ */}
            {/* Chat Area */}
            <div className="chat-background flex-grow-1 overflow-auto p-3">
              {messages.map(msg => (
                <div className={`d-flex mb-3  ${msg.mine ? 'justify-content-end  text-end' : 'justify-content-start  text-start '}`} key={msg.id}>
                  <div
                    key={msg.id}
                    className={`d-grid mb-3  ${msg.mine ? 'justify-content-end  text-end order-1' : 'justify-content-start text-start '}`}
                  >
                    <div className={`message-bubble ${msg.mine ? 'bg-success text-white me-4' : 'bg-light border ms-4 shadow-sm'}`}
                      style={{
                        justifySelf: msg.mine ? 'flex-end' : 'flex-start'
                      }}
                    >
                      <div>{msg.text}</div>
                    </div>
                    <div className={`d-flex gap-3 ${msg.mine ? 'flex-row-reverse' : 'flex-row'}`}>
                      {msg.profile && <img src={msg.profile} alt="Profile" className={`rounded-circle`} style={{ width: 30, height: 30 }} />}
                      <div className={`fw-semibold small mt-2`}>{msg.mine ? 'You' : msg.sender}</div>
                      <div className={`text-end small text-muted mt-2  `} style={{ fontSize: '0.75rem' }}>{msg.time}</div>
                    </div>
                  </div>

                  <div className="dropdown">
                    <button className="btn btn-white border-0 chat-dropdown  fs-5 fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa-solid fa-ellipsis-vertical "></i>
                    </button>
                    <ul className="dropdown-menu p-3">
                      <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span className="text-dark">Reply</span><i className="bx bx-share ms-2 text-muted"></i></a></li>
                      <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span className="text-dark">Forward</span><i className="bx bx-share-alt ms-2 text-muted"></i></a></li>
                      <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span className="text-dark">Copy</span><i className="bx bx-copy text-muted ms-2"></i></a></li>
                      <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span className="text-dark">Bookmark</span><i className="bx bx-bookmarks text-muted ms-2"></i></a></li>
                      <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span className="text-dark">Mark as unread</span><i className="bx bx-message-error text-muted ms-2 "></i></a></li>
                      <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span className="text-dark">Delete</span><i className="bx bx-trash text-muted ms-2"></i></a></li>
                    </ul>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

            {/* Footer / Input */}
            <form onSubmit={handleMessageSubmit}>
              <div className="d-flex align-items-center px-3 py-2 border-top bg-white">
                <i className="bx bx-dots-horizontal-rounded text-secondary me-3"></i>
                <i className="bx bx-smile text-secondary me-3"></i>
                <input
                  value={addMessage}
                  onChange={handleChange}
                  type="text"
                  className="form-control me-3"
                  placeholder="Type your message..."
                />
                <i className="bx bx-microphone text-secondary me-3"></i>
                <button type="submit" className="btn btn-success rounded-circle">
                  <i className="fa-regular fa-paper-plane text-white"></i>
                </button>
              </div>
            </form>
          </div>

        ) : (
          <WelcomePane />
        )}
      </div>
      {/* {sidebar.open && < ChatDetails showProfile={showProfile} setShowProfile={setShowProfile} />} */}
      {/* {dispatch(sidebar.open = false)} */}
      {sidebar.open && (() => {
        switch (sidebar.type) {
          case "CONTACT":
            return <ChatDetails showProfile={showProfile} setShowProfile={setShowProfile} />;
          case "SHARED":
            return <SharedMessages />;
          default:
            return null;
        }
      })()}
    </div>

  );
}

export default ChatLayout;
