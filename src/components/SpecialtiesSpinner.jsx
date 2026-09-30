import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { departmentData } from '../data/departments';
import '../styles/SpecialtiesSpinner.css';

export default function SpecialtiesSpinner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const length = departmentData.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, length]);

  // 2. Manual Mobile Swiping Handlers
  const handleTouchStart = (e) => setTouchStartX(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      // Swiped Left
      setActiveIndex((prev) => (prev + 1) % length);
    }
    if (distance < -swipeThreshold) {
      // Swiped Right
      setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  // 3. Desktop Navigation
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % length);
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));

  return (
    <section className="specialties-section">
      <div className="specialties-header">
        <h4 className="specialties-accent">Specialties</h4>
        <h2 className="specialties-title">Specialties Offered at KMC Hospital</h2>
        <p className="specialties-desc">
          We offer comprehensive multi-specialty care, with teams of board-certified specialists and state-of-the-art facilities.
        </p>
      </div>

      <div 
        className="carousel-view-window"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Manual Nav Buttons */}
        <button className="nav-btn prev-btn" onClick={prevSlide}>&#10094;</button>
        
        <div className="spinner-container">
          {departmentData.map((dept, index) => {
            // Infinite Loop Magic: Calculates distance from the active card
            let offset = (index - activeIndex) % length;
            
            // Wraps the cards smoothly around the back so there is no snap
            if (offset < -Math.floor(length / 2)) offset += length;
            if (offset > Math.floor(length / 2)) offset -= length;

            // Generate a clean class name (e.g., 'offset-1', 'offset--1')
            const positionClass = `offset-${offset}`;
            const activeClass = offset === 0 ? 'active' : '';

            return (
              <div 
                className={`spinner-card ${positionClass} ${activeClass}`} 
                key={dept.id}
                onClick={() => setActiveIndex(index)} // Clicking a side card centers it
              >
                <img src={dept.image} alt={dept.title} className="spinner-img" loading="lazy" />
                <div className="spinner-text-area">
                  <h3 className="spinner-card-title">{dept.title}</h3>
                  <p className="spinner-card-desc">{dept.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="nav-btn next-btn" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="specialties-actions">
        <Link to="/contact#contact-form" className="btn-book-consultation">
          Book a Consultation
        </Link>
        <Link to="/departments" className="link-view-all">
          View All Departments &rarr;
        </Link>
      </div>
    </section>
  );
}