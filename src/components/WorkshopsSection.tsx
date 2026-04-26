import React from "react";
import workshops from "./data/workshops";

export default function WorkshopsSection() {
  return (
    <section className="w-full">

      {/* Title Block */}
      <div className="bg-[#f7f7f7] py-24 px-6 md:px-12">
        <h2 className="text-5xl md:text-6xl font-light leading-tight">
          <span className="text-[#C8A96A]">Achievements/</span> <br />
          <span className="text-black font-normal">Features</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="bg-black py-20 px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto">

          {workshops.map((ws, index) => (
            <div key={index} className="text-center group">

              {/* Image */}
              <div className="w-full h-[260px] overflow-hidden mb-6">
                <img
                  src={ws.image}
                  alt={ws.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-medium mb-2 group-hover:text-[#C8A96A] transition">
                {ws.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto mb-4">
                {ws.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {ws.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-[10px] border border-gray-600 text-gray-300 px-2 py-1"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <p className="text-xs text-gray-500">
                {ws.audience} • {ws.year}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}