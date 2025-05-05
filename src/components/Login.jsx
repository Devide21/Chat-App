import React from 'react';
// import { Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div className="logout-page d-flex" style={{ width: "100vw", height: "100%" }}>
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
            <div className="logout-box py-4 pt-5 h-100 d-grid justify-content-center align-items-center flex-grow-1">
                <div className="d-flex flex-column  justify-content-center align-items-center" style={{ width: "31vw" }}>
                    <h4 className="fw-bold mb-2 fs-1">Welcome Back!</h4>
                    <p className="text-secondary mb-5" style={{ fontFamily: "sans-serif" }}>Sign in to continue to Doot.</p>
                    <form className="d-flex flex-column text-start w-100 p-3 gap-3">
                        <label htmlFor="username">Username</label>
                        <input type="email" placeholder="Enter Username" className="form-control shadow-none" />
                        <div className='d-flex  justify-content-between '>
                            <label htmlFor="username">Password</label>
                            <a className=' text-decoration-none text-secondary' style={{ fontSize: "small" }} href="">Forgot Password?</a>

                        </div>
                        <input type="password" placeholder="Password" className="shadow-none form-control" />
                        <div className='d-flex'>
                            <input type="checkbox" className='form-check-input me-2' />
                            <label htmlFor="username">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-success">Login</button>
                        <div className='d-flex justify-content-center mt-4'>
                            <div className='signup-ruler'></div>
                            <div className='w-100 text-center'><p>Sign up with</p></div>
                            <div className='signup-ruler'></div>
                        </div>
                        <div className='d-flex gap-3'>
                            <div className='bg-body-secondary rounded-2 w-100 text-center py-2  px-4' style={{cursor:"pointer"}}>
                                <i class="fa-brands fa-facebook"></i>
                            </div>
                            <div className='bg-body-secondary rounded-2  w-100 text-center py-2  px-4' style={{cursor:"pointer"}}>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div className='bg-body-secondary rounded-2  w-100 text-center py-2  px-4' style={{cursor:"pointer"}}>
                                <i class="fa-brands fa-google"></i>
                            </div>
                        </div>
                    </form>
                    <p className=" mt-3 mb-5">Don't have an account? <a href="#" className="text-primary text-success pointer">Register</a></p>
                </div>
            </div>
        </div >
    );
};

export default Login;
