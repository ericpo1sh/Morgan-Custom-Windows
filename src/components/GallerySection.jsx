import React, { useState, useEffect } from 'react';
import '../styles/GallerySection.css';
import InterriorDoubleHungWindow from '../assets/InterriorDoubleHungWindow.jpg';
import InterriorCustomWindow from '../assets/InterriorCustomWindow.jpg';
import InterriorDiningRoomWindow from '../assets/InterriorDiningRoomWindow.jpg';
import InterriorTeaTableWindows from '../assets/InterriorTeaTableWindows.jpg';
import ExterriorDiningRoomWindow from '../assets/ExterriorDiningRoomWindow.jpg';
import ExterriorViewOfClientHouse from '../assets/ExterriorViewOfClientHouse.jpg';
import InterriorCloseUpViewOfWindow from '../assets/InterriorCloseUpViewOfWindow.jpg';

// New images
import NewHouseProject1 from '../assets/New House Project-1.webp';
import NewHouseProject2 from '../assets/New House Project-2.webp';
import NewHouseProject3 from '../assets/New House Project-3.webp';
import NewHouseProject4 from '../assets/New House Project-4.webp';
import NewHouseProject5 from '../assets/New House Project-5.webp';
import NewHouseProject6 from '../assets/New House Project-6.webp';
import NewHouseProject7 from '../assets/New House Project-7.webp';
import NewHouseProject8 from '../assets/New House Project-8.webp';

const GallerySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesPerPage, setImagesPerPage] = useState(6);

  const galleryData = [
    // New house project images
    { path: NewHouseProject1, alt: "Black-framed window installation on white brick exterior by Morgan Custom Windows." },
    { path: NewHouseProject2, alt: "Arched black-framed window installed on white brick building by Morgan Custom Windows." },
    { path: NewHouseProject3, alt: "Custom arched window installation on white painted brick wall by Morgan Custom Windows." },
    { path: NewHouseProject4, alt: "Exterior view of home with custom black-framed arched and rectangular windows by Morgan Custom Windows." },
    { path: NewHouseProject5, alt: "Front view of building with black-framed windows and arched glass door installed by Morgan Custom Windows." },
    { path: NewHouseProject6, alt: "Custom black-trimmed window installations on white brick home exterior by Morgan Custom Windows." },
    { path: NewHouseProject7, alt: "Black-framed window with arched brick detail on white painted exterior by Morgan Custom Windows." },
    { path: NewHouseProject8, alt: "Modern black-trimmed window installations on white brick home by Morgan Custom Windows." },
    { path: InterriorDoubleHungWindow, alt: "Modern Double Hung Window Installation - Interior" },
    { path: InterriorCustomWindow, alt: "Elegant Window Design for Homes - Interior" },
    { path: InterriorDiningRoomWindow, alt: "Beautiful Dining Room Window - Interior" },
    { path: InterriorTeaTableWindows, alt: "Custom Window Design - Interior" },
    { path: ExterriorDiningRoomWindow, alt: "Custom Window Design - Exterior" },
    { path: ExterriorViewOfClientHouse, alt: "Custom Window Replacement - Exterior" },
    { path: InterriorCloseUpViewOfWindow, alt: "Close Up Of New Installation - Interior View" },
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
