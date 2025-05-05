import React from 'react';


const ChatWindow = ({ contact }) => {
  return (
    <div className="flex-grow-1 bg-light d-flex flex-column"
     style={{ height: '100vh' }}>
      <div className="p-3 border-bottom d-flex align-items-center">
        <img src={contact.avatar} alt={contact.name} className="rounded-circle me-2"
         style={{ width: '40px', height: '40px' }} />
        <div>
          <div className="fw-bold">{contact.name}</div>
          <div className="text-muted small">{contact.online ? 'Online' : 'Offline'}</div>
        </div>
      </div>

      <div className="flex-grow-1 p-3" style={{ overflowY: 'auto' }}>
        <div className="text-center text-muted">No messages yet</div>
      </div>

      <div className="border-top p-3">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Type your message..." />
          <button className="btn btn-success">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
