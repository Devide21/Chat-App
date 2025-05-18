import React from "react";
import { FaCommentDots } from "react-icons/fa";

const WelcomePane = () => (
  <div className="d-flex flex-column justify-content-center align-items-center text-center  flex-grow-1 welcome-pane chat-background" >
    <div className="bg-success-subtle rounded-circle display-3 p-3 pb-2 mb-3 ">
      <i className="bx bxs-message-alt-detail display-4 text-success m-0"></i>
    </div>
    <h2 className="mb-3">Welcome to Doot Chat App</h2>
    <p className="text-muted px-4 mb-4" style={{ maxWidth: "500px" }}>
      Select a contact from the left panel to start a conversation.
    </p>
    <button className="btn btn-success px-4">Get Started</button>
  </div>
);

export default WelcomePane;
