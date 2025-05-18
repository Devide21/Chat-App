import React, { useState } from 'react';
import { pages } from './pages';


function IconBar({ onSelectedIcon }) {
    const [selectedIcon, setSelectedIcon] = useState("DummyIcon");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [chnagePassword, setChangePassword] = useState(false);
    const [isLogOut, setLogOut] = useState(false);

    return (
        <>
            <div className="d-flex flex-column  justify-content-between align-items-center bg-dark  py-md-2 py-0 px-4 fs-3 side-bar">
                <div className="text-center py-2">
                    <i className="bx bxs-message-detail fs-4 text-success"></i>
                </div>
                {pages.map((page) => (
                    <div key={page.id}
                        className="text-center py-2">
                        <i className={`position-relative ${selectedIcon === page.component ? 'text-success' : 'text-secondary'} ${page.icon} `}
                            onClick={() => {
                                setSelectedIcon(page.component);
                                onSelectedIcon(page.component);
                            }}>
                            <div className={`side-icon ${selectedIcon === page.component ? 'bg-success' : 'bg-dark'}`}></div>
                        </i>
                    </div>
                ))}
                <div className="text-center py-2">
                    <i 
                    onClick={() => isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true)}
                    className={`bx  bx-${isDarkMode? "sun" : "moon"} text-secondary fs-4 text-secondary`}></i>
                </div>
                <div className="dropdown">
                    <button className="btn btn-white border-0 m-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className='side-menu-user'>
                            <img src="src\assets\adam-zampa-avtar.jpg" alt="" />
                        </div>
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a
                                onClick={() => {
                                    setSelectedIcon("ProfileCard")
                                    onSelectedIcon("ProfileCard");
                                }}
                                className="dropdown-item small d-flex justify-content-between text-secondary border-0" href="#">
                                <span>Profile</span>
                                <i className="bx bx-user-circle"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    setSelectedIcon("Settings")
                                    onSelectedIcon("Settings");
                                }}
                                className="dropdown-item small d-flex  justify-content-between text-secondary border-0" href="#"><span>Setting</span><i className="bx bx-cog"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setChangePassword(true)}
                                className="dropdown-item small d-flex  justify-content-between text-secondary border-0" href="#"><span>Change password</span><i className="bx bx-lock-open "></i>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setLogOut(true)}
                                className="dropdown-item small d-flex  justify-content-between text-secondary border-0" href="#"><span>Log out</span><i className="bx bx-log-out-circle"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div >
        </>
    )
}

export default IconBar;
