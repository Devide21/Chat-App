import React from 'react';
import { FaFileAlt, FaImage, FaLink, FaFileArchive, FaEllipsisV } from 'react-icons/fa';

const bookmarks = [
    { type: 'doc', name: 'design-phase-1-approv...', size: '12.5 MB' },
    { type: 'link', name: 'Bg Pattern', url: 'https://bgpattern.com/' },
    { type: 'image', name: 'Image-001.jpg', size: '4.2 MB' },
    { type: 'link', name: 'Images', url: 'https://images123.com/' },
    { type: 'link', name: 'Bg Gradient', url: 'https://bggradient.com/' },
    { type: 'image', name: 'Image-012.jpg', size: '3.1 MB' },
    { type: 'zip', name: 'analytics dashboard.zip', size: '6.7 MB' },
    { type: 'image', name: 'Image-031.jpg', size: '4.2 MB' },
    { type: 'doc', name: 'design-phase-1-approv...', size: '12.5 MB' },
    { type: 'link', name: 'Bg Pattern', url: 'https://bgpattern.com/' },
    { type: 'image', name: 'Image-001.jpg', size: '4.2 MB' },
    { type: 'link', name: 'Images', url: 'https://images123.com/' },
    { type: 'link', name: 'Bg Gradient', url: 'https://bggradient.com/' },
    { type: 'image', name: 'Image-012.jpg', size: '3.1 MB' },
    { type: 'zip', name: 'analytics dashboard.zip', size: '6.7 MB' },
    { type: 'image', name: 'Image-031.jpg', size: '4.2 MB' },
    { type: 'doc', name: 'design-phase-1-approv...', size: '12.5 MB' },
    { type: 'link', name: 'Bg Pattern', url: 'https://bgpattern.com/' },
    { type: 'image', name: 'Image-001.jpg', size: '4.2 MB' },
    { type: 'link', name: 'Images', url: 'https://images123.com/' },
    { type: 'link', name: 'Bg Gradient', url: 'https://bggradient.com/' },
    { type: 'image', name: 'Image-012.jpg', size: '3.1 MB' },
    { type: 'zip', name: 'analytics dashboard.zip', size: '6.7 MB' },
    { type: 'image', name: 'Image-031.jpg', size: '4.2 MB' },
];

const getIcon = (type) => {
    switch (type) {
        case 'doc': return <FaFileAlt />;
        case 'image': return <FaImage />;
        case 'link': return <FaLink />;
        case 'zip': return <FaFileArchive />;
        default: return <FaFileAlt />;
    }
};

const BookmarkList = () => {
    return (
        <div className="p-3 pt-0 bg-white rounded shadow-sm book-mark vh-100 overflow-auto" style={{ width: "300px" }}>
            <div className='position-sticky top-0 z-3 bg-white p-4 ps-3 pb-2'>
                <h6 className=" fw-bold text-start fs-4 text-dark-emphasis position-sticky top-0 ">Bookmark</h6>
            </div>
            <ul className="list-group border-0">
                {bookmarks.map((item, index) => (
                    <li key={index} className="list-group-item d-flex align-items-center justify-content-between border-0 border-bottom px-0 py-3">
                        <div className="d-flex text-start">
                            <div className="icon-circle me-2 text-success">
                                {getIcon(item.type)}
                            </div>
                            <div>
                                <div className="fw-medium text-truncate">{item.name}</div>
                                <div className="text-muted small">
                                    {item.url ? item.url : item.size}
                                </div>
                            </div>
                        </div>
                        <FaEllipsisV className="text-muted" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookmarkList;
