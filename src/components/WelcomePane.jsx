import React from "react";
import { FaCommentDots } from "react-icons/fa";

const WelcomePane = () => (
  <div className="d-flex flex-column justify-content-center align-items-center text-center bg-light flex-grow-1 welcome-pane chat-background" >
    <div className="text-success display-3 mb-3">
      <FaCommentDots />
    </div>
    <h2 className="mb-3">Welcome to Doot Chat App</h2>
    <p className="text-muted px-4 mb-4" style={{ maxWidth: "500px" }}>
      Select a contact from the left panel to start a conversation.
    </p>
    <button className="btn btn-success">Get Started</button>
  </div>
);

export default WelcomePane;
