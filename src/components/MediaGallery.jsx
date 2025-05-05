import React from 'react';

const MediaGallery = () => {
  return (
    <div className="mt-4 p-3 border-top border-tertiary">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <small className="fw-lighter text-secondary ">MEDIA</small>
        <small className="text-success" style={{ cursor: 'pointer' }}>Show all</small>
      </div>
      <div className="d-flex gap-2 justify-content-around">
        <img src="src\assets\media-img-1.jpg" alt="media1" className="rounded-2" width="75" height="70" style={{ objectFit: 'cover' }} />
        <img src="src\assets\media-img-2.jpg" alt="media2" className="rounded-2" width="75" height="70" style={{ objectFit: 'cover' }} />
        <div
          className="rounded-2 text-white d-flex justify-content-center align-items-center"
          style={{ width: '75px', height: '70px', backgroundImage: 'url(src/assets/doot-prfile-img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <span className="bg-dark opacity-25 p-4 rounded-2">+15</span>
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
