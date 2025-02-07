import React, { useState, useEffect } from 'react';
import '../styles/GallerySection.css';

const GallerySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesPerPage, setImagesPerPage] = useState(6);

  const galleryData = [
    {
      "path": "src/assets/InterriorDoubleHungWindow.jpg",
      "alt": "Modern Double Hung Window Installation - Interrior"
    },
    {
      "path": "src/assets/InterriorCustomWindow.jpg",
      "alt": "Elegant Window Design for Homes - Interrior"
    },
    {
      "path": "src/assets/InterriorDiningRoomWindow.jpg",
      "alt": "Beautiful Dining Room Window - Interrior"
    },
    {
      "path": "src/assets/InterriorTeaTableWindows.jpg",
      "alt": "Custom Window Design - Interrior"
    },
    {
      "path": "src/assets/ExterriorDiningRoomWindow.jpg",
      "alt": "Custom Window Design - Exterrior"
    },
    {
      "path": "src/assets/ExterriorViewOfClientHouse.jpg",
      "alt": "Custom Window Replacement - Exterrior"
    },
    {
      "path": "src/assets/InterriorCloseUpViewOfWindow.jpg",
      "alt": "Close Up Of New Intallation - Interrior View"
    }
  ]

  // Function to update images per page based on screen width
  const updateImagesPerPage = () => {
    if (window.innerWidth <= 768) {
      setImagesPerPage(2);
    } else if (window.innerWidth <= 1024) {
      setImagesPerPage(4);
    } else {
      setImagesPerPage(6);
    }
  };

  // Run on mount and listen for screen resizing
  useEffect(() => {
    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);
    return () => {
      window.removeEventListener('resize', updateImagesPerPage);
    };
  }, []);

  const totalImages = galleryData.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    return galleryData.slice(start, end);
  };

  return (
    <section className="gallery-section">
      <h2>Our Recent Projects</h2>
      <div className="gallery-grid">
        {getPaginatedData().map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.path} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.path} alt={selectedImage.alt} />
            <p>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
