import React from 'react';
// import { Button } from 'react-bootstrap';

const Logout = () => {
    return (
        <div className="logout-page d-flex" style={{ width: "100vw" }}>
            <div className="sidebar d-flex flex-column justify-content-center align-items-start p-5">
                <h4 className="text-white fw-bold mb-2">
                    <i class="fa-regular fa-comment-dots"></i>
                    Doot</h4>
                <p className="text-white-50">Responsive Bootstrap 5 Chat App</p>
                <div className="mt-auto">
                    <img className='logout-img'
                        src='src\assets\chat-Apk-auth-img..png'
                        alt="Logout Illustration"
                    />

                </div>
            </div>
            <div className="logout-box d-grid justify-content-center align-items-center flex-grow-1">
                <div className="text-center p-4">
                    <div className="avatar rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}>
                        <i class="fa-solid fa-user fs-1 text-success"></i>
                    </div>
                    <h5 className="mb-2">You are Logged Out</h5>
                    <p className='text-secondary'>Thank you for using <strong className='text-dark'>Doot</strong></p>
                    {/* <Button variant="success" className="px-4 mt-3">Sign In</Button> */}
                    <button className='btn btn-success px-4 mt-3 w-100'>Sign In</button>
                </div>
                <footer className=" text-muted small  ">
                    © 2025 Doot. Crafted with <span className="text-danger">♥</span> by Themesbrand
                </footer>
            </div>
        </div >
    );
};

export default Logout;
