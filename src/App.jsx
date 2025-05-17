import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css"
import ChatLayout from "./components/ChatLayout";
import AddMessage from "./components/Modals/AddMessage";
import ThemeToggle from "./ThemeBtn";

function App() {
  


  return (
    <>
      <ChatLayout />
      {/* <ThemeToggle /> */}
    </>
  );
}
export default App;
