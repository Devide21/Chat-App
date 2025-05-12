import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Sidebar from './components/IconBar';
import ChatArea from './components/ChatLayout';
import ChatList from './components/ChatList';
import Logout from "./components/Logout";
import Login from "./components/Login";
import Register from "./components/Register";
import ContactList from "./components/ContactList";
import ProfileCard from "./components/ProfileCard";
import CallHistory from "./components/CallHistory";
import WelcomePane from "./components/WelcomePane";
import BookmarkList from "./components/BookmarkList";
import ChatLayout from "./components/ChatLayout";
import Settings from "./components/Settings";
import ResetPassword from "./components/ResetPassword";



function App() {


  return (
    <div className="d-md-flex d-grid" style={{ width: "98.9vw", height: "100%" }}>
      <ResetPassword />
      {/* <WelcomePane/> */}

    </div>
  )
}

export default App



