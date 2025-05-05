import React, { useState } from 'react';
import { FaSearch, FaPlus, FaCommentDots, FaUserFriends, FaPhone, FaFileAlt, FaMoon, FaUserCircle } from "react-icons/fa";
import { pages } from './pages';


function IconBar({ onSelectedIcon }) {
    const [selectedIcon, setSelectedIcon] = useState("DummyIcon");
    console.log(selectedIcon);

    return (
        <>
            <div className="d-flex flex-md-column flex-row justify-content-between align-items-center bg-dark  py-md-2 py-0 px-4 fs-4 side-bar">
                {pages.map((page) => (
                    <div key={page.id}
                        className="text-center py-2">
                        <i className={` ${selectedIcon === page.component ? 'text-success' : 'text-white'} ${page.icon} `}
                            onClick={() => {
                                setSelectedIcon(page.component);
                                onSelectedIcon(selectedIcon);
                            }}>

                        </i>
                    </div>
                ))}
            </div>
        </>
    )
}

export default IconBar;
