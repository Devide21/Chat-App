import React from 'react';
import { FaDownload, FaEllipsisH } from 'react-icons/fa';

const files = [
    { name: 'design-phase-1...', size: '12.5 MB', icon: '🗂️' },
    { name: 'Image-1.jpg', size: '4.2 MB', icon: '🖼️' },
    { name: 'Image-2.jpg', size: '3.1 MB', icon: '🖼️' },
    { name: 'Landing-A.zip', size: '6.7 MB', icon: '🗂️' }
];

const AttachedFiles = () => {
    return (
        <div className="mt-4 py-4 px-3 border-top border-tertiary ">
            <div className='text-start'>
                <small className="fw-lighter text-body-tertiary  ">ATTACHED FILES</small>
            </div>
            {files.map((file, index) => (
                <div key={index} className="d-flex attached-file align-items-center justify-content-between bg-white border-secondary rounded-2 p-2 my-2">
                    <div className="d-flex align-items-center">
                        <span
                            className="bg-success text-white rounded-circle d-inline-block text-center me-3 pt-1 " style={{ width: '32px', height: '32px' }}>
                            {file.icon}
                        </span>
                        <div className="d-grid text-secondary">
                            <small>{file.name}</small>
                            <small className="fw-lighter">{file.size}</small>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <small> <FaDownload className="text-secondary fw-lighter" /></small>
                        <small>
                            <div className="dropdown">
                                <button className="btn btn-white border-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaEllipsisH className="text-secondary fw-lighter" />

                                </button>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Share</span><i className="fa-solid fa-share-nodes"></i></a></li>
                                    <li><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Bookmark</span><i className="fa-regular fa-bookmark"></i></a></li>
                                    <li className='border-top border-tertiary mt-1 pt-1'><a className="dropdown-item d-flex justify-content-between text-secondary border-0" href="#"><span>Delete</span><i className="fa-regular fa-trash-can"></i></a></li>
                                </ul>
                            </div>
                        </small>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AttachedFiles;
