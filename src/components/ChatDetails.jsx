import React from 'react'
import { useState } from 'react';
import { ThreeDotsVertical, ThreeDots } from 'react-bootstrap-icons';
import MediaGallery from './MediaGallery';
import AttachedFiles from './AttachedFile';


function ChatDetails({ showProfile, setShowProfile }) {
    const [personalInfo, setPersonalInfo] = useState({
        name: 'Kathryn Swarey',
        email: 'adc@123.com',
        location: 'California, USA'
    });

    // const [showProfile, setShowProfile] = useState(false);
    // console.log(showProfile);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const [isEdit, setIsEdit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
    };

    const [show, setShow] = React.useState(false);
    const likeHandler = () => {
        setShow(!show);
    }


    return (
        <div className='vh-100 border-start border-4'>
            <div className='position-sticky p-3 border-bottom border-tertiary top-0 z-3 bg-white  pb-4'>
                <div className='chat-details'>
                    <div className='d-flex justify-content-between position-absolute ' style={{
                        width: "inherit", zIndex: "12"
                    }}>
                        <div className='p-3 fs-5'>
                            <i
                                onClick={() => setShowProfile(false)}
                                className='fa-solid fa-xmark text-white'></i>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-white text-white border-0  p-3 fs-5 fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <ThreeDotsVertical />
                            </button>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Archive</span><i className="fa-solid fa-download"></i></a></li>
                                <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Mute</span><i className="fa-solid fa-microphone-slash"></i></a></li>
                                <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Delete</span><i className="fa-regular fa-trash-can"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div
                        style={{
                            borderRadius: "9px",
                            height: "250px",
                            width: "100%",
                            position: "absolute",
                            backgroundColor: "#000",
                            opacity: "0.3",
                        }}></div>
                    <img
                        className='rounded-2'
                        src='src\assets\avatar-6.jpg' /
                    >
                </div>
            </div>
            <div style={{ height: "50vh", overflow: "auto" }}>
                <div className=''>
                    <div className='d-flex p-4 justify-content-between'>
                        <div className='p-2 bg-body-secondary rounded-1 '>
                            <small>
                                <i className="fa-solid fa-message text-dark mx-1 "></i>
                            </small>
                        </div>
                        <div
                            onClick={likeHandler}
                            className='p-2 bg-body-secondary rounded-1'>
                            {show ? <i className="fa-solid fa-heart text-danger mx-1"></i> : <i className="fa-regular fa-heart text-dark mx-1"></i>}
                            {/* <i className="fa-regular fa-heart mx-1"></i> */}
                        </div>
                        <div className='p-2 bg-body-secondary rounded-1'>
                            <small>
                                <i className="fa-solid fa-phone-volume text-dark mx-1 "></i>
                            </small>
                        </div>
                        <div className='p-2 bg-body-secondary rounded-1'>
                            <small>
                                <i className="fa-solid fa-video text-dark mx-1 "></i>
                            </small>
                        </div>
                        <div className=' bg-body-secondary rounded-1' style={{ padding: "8px 13px" }}>
                            <div className="dropdown">
                                <button className="btn btn-white text-dark p-0  border-0  fs-6 fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <ThreeDots />
                                </button>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Archive</span><i className="fa-solid fa-download"></i></a></li>
                                    <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Mute</span><i className="fa-solid fa-microphone-slash"></i></a></li>
                                    <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Delete</span><i className="fa-regular fa-trash-can"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='border-top mx-3 py-3'>
                    <div className='text-start  '>
                        <p className='text-dark mb-2'>Status:</p>
                        <p className='text-secondary'>If several languages coalesce, the grammar of the resulting.</p>
                    </div>
                    <h2 className="accordion-header">
                        <button className="accordion-button text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className='d-flex justify-content-between'>
                                {isEdit === true ?
                                    (
                                        <form className='text-start'
                                            onSubmit={handleSubmit}>
                                            <small className="mb-2 text-start">
                                                <label htmlFor="exampleInputEmail1" className="form-label ">Name</label>
                                                <input type="text"
                                                    className="form-control text-start"
                                                    id="name"
                                                    name="name"
                                                    value={personalInfo.name}
                                                    onChange={handleChange}
                                                />

                                            </small>
                                            <small className="mb-2 text-start">
                                                <label className="form-label">Email</label>
                                                <input type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    value={personalInfo.email}
                                                    onChange={handleChange}

                                                />
                                            </small>
                                            <small className="mb-2 text-start">
                                                <label className="form-label">Location</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="location"
                                                    name="location"
                                                    value={personalInfo.location}
                                                    onChange={handleChange}

                                                />
                                            </small>
                                            <button type="submit"
                                                className="btn btn-success mt-2">Submit</button>
                                        </form>

                                    ) : (
                                        <div className='d-flex justify-content-between w-100'>
                                            <div className='d-grid'>
                                                <small className='text-secondary text-start'>Name</small>
                                                <small>{personalInfo.name}</small>
                                                <small className='text-secondary text-start mt-3'>Email</small>
                                                <small className='text-start'>{personalInfo.email}</small>
                                                <small className='text-secondary text-start mt-3'>Location</small>
                                                <small className='text-start'>{personalInfo.location}</small>
                                            </div>
                                            <button className="btn text-success btn-sm rounded-2"
                                                onClick={() => setIsEdit(true)}
                                                style={{ height: "fit-content", padding: "5px 11px", backgroundColor: "rgb(78 172 109 / 28%)" }}>
                                                <p className=" mb-0 ">Edit</p>
                                            </button>

                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-top text-start mx-3 pb-0 py-3'>
                    <small className='text-body-tertiary mb-2'>GROUP IN COMMON</small>
                    <div className='d-flex'>
                        <p className='me-3'>#</p>
                        <p>Landing Design</p>
                    </div>
                </div>
                <div className='broder-top  mx-3 py-0'>
                    <MediaGallery />
                </div>
                <div className='broder-top  mx-3 py-0'>
                    <AttachedFiles />
                </div>
            </div>
            <div>
                <button onClick={() => setShowProfile(false)}>Hide Profile</button>
                {showProfile && <p>Profile is visible</p>}
            </div>

        </div >
    )
}

export default ChatDetails;