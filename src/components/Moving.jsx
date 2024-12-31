import React, { useEffect, useRef } from 'react';
import "../styles/moving.scss"

const Moving = () => {
  const scrollRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current || !contentRef.current) return;

    const scrollContainer = scrollRef.current;
    const scrollContent = contentRef.current;
    
    // Clone the content for seamless looping
    const clonedContent = scrollContent.cloneNode(true);
    scrollContainer.appendChild(clonedContent);

    // Calculate animation duration based on content width
    const contentWidth = scrollContent.offsetWidth;
    const duration = contentWidth * 0.02; // Adjust speed factor as needed

    const animate = () => {
      if (scrollContainer.scrollLeft >= contentWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="scroll-container">
      <div
        ref={scrollRef}
        className="scroll-text"
        style={{ scrollBehavior: 'auto' }}
      >
        <div ref={contentRef} className="text-content">
          <span className="mx-4"> *FREE SHIPPING ABOVE 10K*</span>
          <span className="mx-4">*FREE SHIPPING ABOVE 10K*</span>
          <span className="mx-4">*FREE SHIPPING ABOVE 10K*</span>
          <span className="mx-4">*FREE SHIPPING ABOVE 10K*</span>
          <span className="mx-4">*FREE SHIPPING ABOVE 10K*</span>
          <span className="mx-4">*FREE SHIPPING ABOVE 10K*</span>
        </div>
      </div>
    </div>
  );
};

export default Moving;

