import React, { useState, useEffect } from 'react';
import '../styles/GallerySection.css';
import InterriorDoubleHungWindow from '../assets/InterriorDoubleHungWindow.jpg';
import InterriorCustomWindow from '../assets/InterriorCustomWindow.jpg';
import InterriorDiningRoomWindow from '../assets/InterriorDiningRoomWindow.jpg';
import InterriorTeaTableWindows from '../assets/InterriorTeaTableWindows.jpg';
import ExterriorDiningRoomWindow from '../assets/ExterriorDiningRoomWindow.jpg';
import ExterriorViewOfClientHouse from '../assets/ExterriorViewOfClientHouse.jpg';
import InterriorCloseUpViewOfWindow from '../assets/InterriorCloseUpViewOfWindow.jpg';

const GallerySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesPerPage, setImagesPerPage] = useState(6);

  // Updated gallery data with imported image paths
  const galleryData = [
    {
      path: InterriorDoubleHungWindow,
      alt: "Modern Double Hung Window Installation - Interior",
    },
    {
      path: InterriorCustomWindow,
      alt: "Elegant Window Design for Homes - Interior",
    },
    {
      path: InterriorDiningRoomWindow,
      alt: "Beautiful Dining Room Window - Interior",
    },
    {
      path: InterriorTeaTableWindows,
      alt: "Custom Window Design - Interior",
    },
    {
      path: ExterriorDiningRoomWindow,
      alt: "Custom Window Design - Exterior",
    },
    {
      path: ExterriorViewOfClientHouse,
      alt: "Custom Window Replacement - Exterior",
    },
    {
      path: InterriorCloseUpViewOfWindow,
      alt: "Close Up Of New Installation - Interior View",
    },
  ];

  const updateImagesPerPage = () => {
    if (window.innerWidth <= 768) {
      setImagesPerPage(2);
    } else if (window.innerWidth <= 1024) {
      setImagesPerPage(4);
    } else {
      setImagesPerPage(6);
    }
  };

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
