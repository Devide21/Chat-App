import React, { useEffect, useRef } from "react";
import { Modal } from "bootstrap";

function CallModal({ user, show, setShow }) {
    const modalRef = useRef(null);
    const modalInstance = useRef(null);

    useEffect(() => {
        if (modalRef.current) {
            modalInstance.current = new Modal(modalRef.current, {
                backdrop: 'static',
                keyboard: false
            });
        }
    }, []);

    useEffect(() => {
        if (modalInstance.current) {
            show ? modalInstance.current.show() : modalInstance.current.hide();
        }
    }, [show]);

    // Handle modal close via red button
    const handleEndCall = () => {
        setShow(false); // trigger hide
    };

    return (
        <div
            className="modal fade"
            tabIndex="-1"
            ref={modalRef}
            aria-labelledby="callModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content text-center" style={{ borderRadius: "15px", overflow: "hidden" }}>
                    <div className="modal-body py-4">
                        <img
                            src={user?.avatar || "https://via.placeholder.com/100"}
                            alt="Avatar"
                            className="rounded-circle mb-3"
                            style={{ width: "100px", height: "100px", objectFit: "cover", border: "4px solid #f0f0f0" }}
                        />

                        <div className="d-flex justify-content-center gap-4 my-3">
                            <div className="text-center">
                                <i className="fa-solid fa-microphone-slash fs-4 text-muted"></i>
                                <div className="small mt-1">MUTE</div>
                            </div>
                            <div className="text-center">
                                <i className="fa-solid fa-volume-high fs-4 text-muted"></i>
                                <div className="small mt-1">SPEAKER</div>
                            </div>
                            <div className="text-center">
                                <i className="fa-solid fa-user-plus fs-4 text-muted"></i>
                                <div className="small mt-1">ADD NEW</div>
                            </div>
                        </div>

                        {/* 🔴 End Call Button */}
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn btn-danger rounded-circle"
                                style={{ width: "60px", height: "60px" }}
                                onClick={handleEndCall}
                            >
                                <i className="fa-solid fa-phone fs-4"></i>
                            </button>
                        </div>
                    </div>

                    <div className="bg-success bg-opacity-10 py-3">
                        <h5 className="mb-0">{user?.name || "Unknown"}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CallModal;
