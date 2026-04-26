import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import events from "./data/experiences";

export default function ExperienceSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const handlePrevImage = (index: number) => {
    const images = events[index].images || [events[index].image];
    setCurrentImageIndex((prev) => ({
      ...prev,
      [index]:
        prev[index] === undefined
          ? images.length - 1
          : (prev[index] - 1 + images.length) % images.length,
    }));
  };

  const handleNextImage = (index: number) => {
    const images = events[index].images || [events[index].image];
    setCurrentImageIndex((prev) => ({
      ...prev,
      [index]:
        prev[index] === undefined ? 1 : (prev[index] + 1) % images.length,
    }));
  };

  return (
    <section
      id="experiences"
      className="w-full bg-white text-black py-5 md:py-8 px-1 md:px-2"
    >
      {/* Title */}
      <div className="bg-[#f7f7f7] px-2 py-10">
        <h2 className="text-5xl md:text-6xl text-[#C8A96A] tracking-tight">
          Organizations/ <br />
          <span className="text-black font-normal">I Worked With</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl">
          Top experiences and initiatives I've worked on and contributed to.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-12 md:space-y-16">
        {events.map((event, index) => {
          const images = event.images || [event.image];
          const currentIdx = currentImageIndex[index] ?? 0;
          const currentImage = images[currentIdx];
          const hasMultipleImages = images.length > 1;

          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 min-h-[400px] min-w-0"
            >
              {/* Image Gallery */}
              <div
                className={`relative bg-black flex items-center justify-center min-h-[250px] md:min-h-[400px] ${
                  index % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={currentImage}
                  alt="experience"
                  className="w-full h-full object-contain"
                />

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={() => handlePrevImage(index)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all hover:scale-110 z-10 shadow-lg"
                      aria-label="Previous image"
                    >
                      <FiChevronLeft size={24} strokeWidth={3} />
                    </button>

                    <button
                      onClick={() => handleNextImage(index)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all hover:scale-110 z-10 shadow-lg"
                      aria-label="Next image"
                    >
                      <FiChevronRight size={24} strokeWidth={3} />
                    </button>

                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full z-10">
                      {currentIdx + 1} / {images.length}
                    </div>

                    <div className="absolute bottom-2 left-2 flex gap-2 z-10">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [index]: i,
                            }))
                          }
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === currentIdx ? "bg-white w-4" : "bg-white/50"
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div
                className={`bg-black text-white p-6 flex flex-col justify-center md:col-span-2 min-w-0 ${
                  index % 2 !== 0 ? "" : ""
                }`}
              >
                <h3 className="text-sm tracking-widest text-yellow-500 mb-2 break-words">
                  {event.title.toUpperCase()}
                </h3>

                <h4 className="text-2xl md:text-3xl font-semibold mb-3 break-words">
                  {event.role}
                </h4>

                <p className="text-gray-300 leading-relaxed max-w-xl break-words">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {event.impact?.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm border border-gray-700 rounded-full text-gray-300 break-words"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-sm text-gray-500">{event.year}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
