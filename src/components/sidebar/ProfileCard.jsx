import React from 'react';
import MediaGallery from '../MediaGallery';
import AttachedFiles from '../AttachedFile';
import { ThreeDotsVertical } from 'react-bootstrap-icons';


const ProfileCard = () => {
    return (
        <div className="bg-white" style={{ width: '300px', height: '100vh', }}>
            <div className="position-sticky border-bottom border-tertiary top-0 z-3 bg-white  pb-4">
                <div className="text-center position-relative">
                    <div className='d-flex position-absolute text-white justify-content-between'>
                        <p className='fs-5 p-2'>My Profile</p>
                        <div className="dropdown ">
                            <button className="btn btn-white profile-btn text-white fs-5 border-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <ThreeDotsVertical />
                            </button>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Info</span><i className="fa-solid fa-circle-info"></i></a></li>
                                <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Settings</span><i className="fa-solid fa-gear"></i></a></li>
                                <li className='border-top border-tertiary mt-1 pt-1'><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Help</span><i className="fa-regular fa-circle-question"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <img
                        src="src\assets\doot-prfile-img.jpg"
                        className="w-100"
                        style={{ height: '160px', objectFit: 'cover' }}
                        alt="header"
                    />
                    <img
                        src="src\assets\adam-zampa-avtar.jpg"
                        className="rounded-circle position-absolute"
                        style={{ top: '110px', left: '50%', transform: 'translateX(-50%)', width: '85px', border: '6px solid #ebebeb' }}
                        alt="avatar"
                    />
                </div>
                <div className=" mt-5">
                    <h6 className="mb-0 fw-bold">Adam Zampa</h6>
                    <small className="text-muted">Front end Developer</small>
                </div>
            </div>

            <div style={{ overflowY: "scroll", height: "55vh" }}>
                <div className="mt-4 p-3  text-start small">
                    <p className="text-secondary ">If several languages coalesce, the grammar of the resulting language is more simple.</p>
                    <div className='d-flex gap-3 mt-3'>
                        <i className="bx bx-user align-middle text-muted"></i>
                        <p className="mb-1 text-secondary"><i className="bi bi-person"></i> Adam Zampa</p>
                    </div>

                    <div className='d-flex gap-3'>
                        <i className="bx bx-message-rounded-dots align-middle text-muted"></i>
                        <p className="mb-1 text-secondary"><i className="bi bi-envelope"></i> admin@themesbrand.com</p>
                    </div>
                    <div className='d-flex gap-3'>
                        <i class="bx bx-location-plus align-middle text-muted"></i>
                        <p className="mb-1 text-secondary"><i className="bi bi-geo-alt"></i> California, USA</p>
                    </div>
                </div>

                <MediaGallery />
                <AttachedFiles />
            </div>
        </div >
    );
};

export default ProfileCard;
