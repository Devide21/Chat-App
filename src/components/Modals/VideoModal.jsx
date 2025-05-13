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
            className="modal fade"
            tabIndex="-1"
            ref={modalRef}
            aria-labelledby="callModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered videoCall-modal">
                <div className="modal-content text-center" style={{ borderRadius: "9px", overflow: "hidden", height: "500px" }}>
                    <div className="modal-body p-0">
                        <img
                            src={user?.avatar || "https://via.placeholder.com/100"}
                            alt="Avatar"
                            className=""
                        />

                        <div className="d-flex justify-content-center gap-4 mt-3 position-absolute z-3 btn-collection">
                            <div>
                                <div className="call-icon  text-secondary fs-5 mb-2" >
                                    < i className='bx bx-microphone-off'></i>
                                </div>
                            </div>
                            <div>
                                <div className="call-icon  text-secondary fs-5 mb-2" >
                                    <i className="bx bx-volume-full"></i>
                                </div>
                            </div>
                            <div>
                                <div className="call-icon text-secondary fs-5 mb-2" >
                                    <i className="bx bx-user-plus"></i>
                                </div>
                            </div>
                            <div>
                                <div className="call-icon text-secondary fs-5 mb-2" >
                                    <i className="bx bx-refresh"></i>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center position-absolute" >
                            <button
                                className="btn btn-danger rounded-circle callend-btn"
                                onClick={handleEndCall}
                            >
                                <i className="fa-solid fa-phone fs-4"></i>
                            </button>
                        </div>
                    </div>

                    <div className="bg-success text-white pt-5 pb-3">
                        <h5 className="mb-0">{user?.name || "Unknown"}</h5>
                    </div>
                </div>
            </div >
        </div >
    );
}


export default CallModal;
