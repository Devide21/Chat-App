import React from 'react';
import { ThreeDots, ThreeDotsVertical } from 'react-bootstrap-icons';
import { FaFileAlt, FaImage, FaLink, FaFileArchive, FaEllipsisV, FaEllipsisH } from 'react-icons/fa';

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
        <div className="p-3 pe-0 pt-0 bg-white rounded shadow-sm book-mark vh-100 " style={{ width: "300px" }}>
            <div className='position-sticky top-0 z-3 bg-white p-4 ps-3 pb-2'>
                <h6 className=" fw-bold text-start fs-4 text-dark-emphasis position-sticky top-0 ">Bookmark</h6>
            </div>
            <ul className="list-group border-0  overflow-auto" style={{height:"89vh"}}>
                {bookmarks.map((item, index) => (
                    <li key={index} className="list-group-item d-flex align-items-center justify-content-between border-0 border-bottom px-0 py-3">
                        <div className="d-flex text-start small">
                            <div className="icon-circle me-2 text-success ">
                                {getIcon(item.type)}
                            </div>
                            <div>
                                <div className="fw-medium text-truncate">{item.name}</div>
                                <div className="text-muted small">
                                    {item.url ? item.url : item.size}
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-white border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <ThreeDots />
                            </button>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item small p-2 d-flex justify-content-between text-secondary border-0" href="#"><span>Open</span><i className="bx bx-folder-open ms-2 text-muted"></i></a></li>
                                <li><a className="dropdown-item small p-2 d-flex justify-content-between text-secondary border-bottom" href="#"><span>Edit</span><i className="bx bx-pencil ms-2 text-muted"></i></a></li>
                                <li><a className="dropdown-item small p-2 d-flex justify-content-between text-secondary border-0" href="#"><span>Delete</span><i className="bx bx-trash ms-2 text-muted"></i></a></li>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookmarkList;
