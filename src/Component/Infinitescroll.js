import React, { useState, useEffect } from "react";

const SliderWithConnectingProgressBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    { id: 1, image: "https://via.placeholder.com/800x400", caption: "Slide 1" },
    { id: 2, image: "https://via.placeholder.com/800x400", caption: "Slide 2" },
    { id: 3, image: "https://via.placeholder.com/800x400", caption: "Slide 3" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgress(0); // Reset progress for the next slide
  };

  // Handle auto-sliding and progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 30); // Progress increments every 30ms (3 seconds total for 100 steps)
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-64 bg-gray-200 flex items-center justify-center"
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Progress Bar Connecting Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        {slides.map((_, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Dot */}
            <div
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></div>

            {/* Connecting Progress Line */}
            {index < slides.length - 1 && (
              <div
                className="absolute top-6 w-12 h-1 bg-gray-400"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.03s linear",
                }}
              >
                {/* This inner div simulates the progress bar */}
                <div
                  className="h-1 bg-blue-500"
                  style={{
                    width: `${(progress / 100) * 100}%`, // Fill the progress line
                  }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderWithConnectingProgressBar;
