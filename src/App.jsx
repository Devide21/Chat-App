import React, { useState } from "react";
import CallModal from "./components/Modals/CallModal";

function App() {
  const [showCallModal, setShowCallModal] = useState(false);

  const selectedUser = {
    name: "Carla Serrano",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  };

  return (
    <>
      <button className="btn btn-white" onClick={() => setShowCallModal(true)}>
        <i className="fa-solid fa-phone-volume"></i>
      </button>

      <CallModal user={selectedUser} show={showCallModal} setShow={setShowCallModal} />
    </>
  );
}
export default App;
