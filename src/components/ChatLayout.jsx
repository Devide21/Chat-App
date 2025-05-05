import React, { useState } from "react";
import ChatList from "./ChatList";
import WelcomePane from "./WelcomePane";
import IconBar from "./IconBar";
import ContactList from "./ContactList";
import SidebarContent from "./SidebarContent";
import Settings from "./Settings";
import ChatDetails from "./ChatDetails";
import { useRef, useEffect } from 'react';


// import {Pages} from "./pages"

function ChatLayout() {
  const [sidebar, setSidebar] = useState("ChatList");
  const [selectedContact, setSelectedContact] = useState(null);
  const [showProfile, setShowProfile] = useState(true);
  

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


  const handleSubmit = (e) => {
    e.preventDefault();
    if (addMessage.trim() !== "") {
      // Add the new message to the messages array
      const newMessage = {
        id: messages.length + 1,
        sender: 'You',
        text: addMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mine: true,
        profile: 'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg'
      };
      messages.push(newMessage);
      setAddMessage(""); // Clear the input field
      console.log(newMessage);
      console.log(messages);
    }

  }
  const handleSidebarChange = (item) => {
    setSidebar(item)
  }

  return (
    <div className="d-flex main-body">
      <div className="d-flex" style={{ borderRight: "1px solid #ddd" }}>
        <IconBar onSelectedIcon={handleSidebarChange} />
        <SidebarContent sidebar={sidebar} setSelectedContact={setSelectedContact} />
      </div>
      <div className="d-flex flex-column vh-100" style={{ width: "100%" }}>
        {selectedContact ? (

          // ChatArea.jsx
          <div className="d-flex flex-column vh-100" style={{ width: "100%" }}>
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom bg-light">
              <div className="d-flex align-items-center">

                <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center me-2" style={{ width: 40, height: 40 }}>
                  <div className={` ${selectedContact.online ? 'active-dot' : 'away-dot'}`}></div>
                  <img src={selectedContact.avatar} alt={selectedContact.name} className="rounded-circle" style={{ width: 40, height: 40 }} />
                </div>

                <div className="text-start">
                  <div className="fw-bold">{selectedContact.name}</div>
                  <small className="text-muted">{selectedContact.online ? 'Active' : 'Away'}</small>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4 text-secondary">
                <i className="fas fa-search "></i>
                <i className="fa-solid fa-video"></i>
                <i className="fa-solid fa-phone-volume"></i>
                <i className="fas fa-info-circle"></i>
                <i className="fas fa-ellipsis-v"></i>
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
                <div
                  key={msg.id}
                  className={`d-grid mb-3  ${msg.mine ? 'justify-content-end  text-end' : 'justify-content-start text-start '}`}
                >
                  <div className={`message-bubble ${msg.mine ? 'bg-success text-white me-4' : 'bg-light border ms-4 shadow-sm'}`}>
                    <div>{msg.text}</div>
                  </div>
                  <div className={`d-flex gap-3 ${msg.mine ? 'flex-row-reverse' : 'flex-row'}`}>
                    {msg.profile && <img src={msg.profile} alt="Profile" className={`rounded-circle`} style={{ width: 30, height: 30 }} />}
                    <div className={`fw-semibold small mt-2`}>{msg.mine ? 'You' : msg.sender}</div>
                    <div className={`text-end small text-muted mt-2  `} style={{ fontSize: '0.75rem' }}>{msg.time}</div>
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
      <ChatDetails showProfile={showProfile} setShowProfile={setShowProfile} />
    </div>

  );
}

export default ChatLayout;
