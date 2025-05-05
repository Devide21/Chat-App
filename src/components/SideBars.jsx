// Sidebar.js
import React from 'react';

function Sidebar({ pages, onSelectPage }) {
    return (
        <div className="sidebar">
            {pages.map((page) => (
                <div
                    key={page.id}
                    className="sidebar-item"
                    onClick={() => onSelectPage(page)}
                >
                    <i className={page.icon}></i>
                    <span>{page.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
