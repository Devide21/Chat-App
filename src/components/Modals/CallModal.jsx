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

    const handleEndCall = () => {
        setShow(false);
    };

    return (
        <div
            className="modal shadow fade"
            tabIndex="-1"
            ref={modalRef}
            aria-labelledby="callModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content text-center" style={{ borderRadius: "15px", overflow: "hidden" }}>
                    <div className="modal-body py-4 pb-0">
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="rounded-circle me-2" style={{ width: 100, height: 100 }} />
                        ) : (
                            <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style={{ width: 100, height: 100, fontSize: 45, position: "relative", left: "175px" }}>
                                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                            </div>
                        )}

                        <div className="d-flex justify-content-center gap-4 mt-3">
                            <div>
                                <div className="call-icon  text-secondary fs-5 mb-2" >
                                    < i className='bx bx-microphone-off'></i>
                                </div>
                                <small className=" mt-1 text-secondary" style={{ fontSize: "smaller" }}>MUTE</small>
                            </div>
                            <div>
                                <div className="call-icon  text-secondary fs-5 mb-2" >
                                    <i className="bx bx-volume-full"></i>
                                </div>
                                <small className=" mt-1 text-secondary" style={{ fontSize: "smaller" }}>SPEAKER</small>
                            </div>
                            <div>
                                <div className="call-icon text-secondary fs-5 mb-2" >
                                    <i className="bx bx-user-plus"></i>
                                </div>
                                <small className=" mt-1 text-secondary" style={{ fontSize: "smaller" }}>ADD NEW</small>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center position-relative" style={{ top: "40px" }}>
                            <button
                                className="btn btn-danger rounded-circle"
                                style={{ width: "80px", height: "80px", border: "6px solid white" }}
                                onClick={handleEndCall}
                            >
                                <i className="fa-solid fa-phone fs-4"></i>
                            </button>
                        </div>
                    </div>

                    <div className="bg-success bg-opacity-25 pt-5 pb-3">
                        <h5 className="mb-0">{user?.name || "Unknown"}</h5>
                    </div>
                </div>
            </div >
        </div >
    );
}


export default CallModal;
