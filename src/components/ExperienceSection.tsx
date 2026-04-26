import React from "react";
import events from "./data/experiences";

export default function ExperienceSection() {
  return (
    <section className="w-full bg-white text-black py-20 px-6 md:px-12">
      {/* Title */}
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-light tracking-tight">
          Organizations <br />
          <span className="text-black font-normal">Worked With</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl">
          Top experiences and initiatives I've worked on and contributed to.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/3">
              <img
                src={event.image}
                alt="experience"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3 bg-black text-white p-8 flex flex-col justify-center">
              {/* Title */}
              <h3 className="text-sm tracking-widest text-yellow-500 mb-2">
                {event.title.toUpperCase()}
              </h3>

              {/* Role */}
              <h4 className="text-2xl md:text-3xl font-semibold mb-3">
                {event.role}
              </h4>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed max-w-xl">
                {event.description}
              </p>

              {/* Impact tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {event.impact?.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm border border-gray-700 rounded-full text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Year */}
              <div className="mt-6 text-sm text-gray-500">{event.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
