import { useState, useEffect } from "react";

export default function HeroSection() {
  const words = [
    { text: "Outside Localhost", color: "#ffffffc4" },
    { text: "Workshops", color: "#C9A84C" },
    { text: "Meetups", color: "#C9A84C" },
    { text: "Videos", color: "#C9A84C" },
    { text: "Podcast", color: "#C9A84C" },
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000); // Change word every 1 seconds (500ms animation + 1.5s pause)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#2a2a2a] flex flex-col">
      {/* Background hero image — portrait photo, fills full height, centered */}
      <div className="absolute inset-0 z-0 pt-17 overflow-hidden w-full h-full">
        <img
          src="/images/Picsart_26-04-25_21-54-45-882.png"
          alt="Hero background"
          className="w-full h-full object-contain object-top"
          style={{ display: "block" }}
        />
      </div>

      {/* Subtle dark gradient overlay at bottom for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none" />

      {/* Nav — top left and right */}
      <nav className="relative z-20 flex justify-between px-3 py-6">
        <span
          className="text-sm sm:text-base md:text-lg font-medium tracking-[0.2em] uppercase px-3 py-2 rounded border-2 transition-all duration-500"
          style={{
            color: words[currentWord].color,
            borderColor: words[currentWord].color,
            textShadow: `0 0 10px ${words[currentWord].color}, 0 0 20px ${words[currentWord].color}`,
            boxShadow: `0 0 20px ${words[currentWord].color}, inset 0 0 10px ${words[currentWord].color}`,
          }}
        >
          {words[currentWord].text}
        </span>
        <span
          className="text-sm sm:text-base md:text-lg font-medium tracking-[0.2em] uppercase px-3 py-2 rounded border-2 transition-all duration-500"
          style={{
            color: "#C8A96A",
            borderColor: "#C8A96A",
          }}
        >
          Portfolio
        </span>
      </nav>

      {/* Spacer pushes text to bottom */}
      <div className="flex-1" />

      {/* Bottom text block */}
      <div className="relative z-20 px-4 pb-0">
        <div className="leading-none">
          <p
            className="
      font-semibold text-white leading-none
      text-[3rem]
      sm:text-[3.5rem]
      md:text-[4rem]
      lg:text-[5rem]
      xl:text-[6rem]
    "
          >
            Abdelghani
          </p>

          <p
            className="
      font-semibold text-[#C9A84C] leading-none
      text-[3rem]
      sm:text-[3.5rem]
      md:text-[4rem]
      lg:text-[5rem]
      xl:text-[6rem]
    "
          >
            Bensalih
          </p>
        </div>
      </div>

      {/* Subtitle bar + arrow */}
      <div className="relative z-20 flex items-stretch mt-3">
        <div
          className="
    bg-black px-5 py-5 flex-1
    max-w-[95%] sm:max-w-[85%] md:max-w-[78%]
  "
        >
          <p className="text-[1.23rem] md:text-lg text-white leading-snug">
            Meetups Ambassador at{" "}
            <a
              href="https://miro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8A96A] hover:underline transition-colors"
            >
              Miro
            </a>
          </p>
          <p className="text-[1.11rem] md:text-lg text-white leading-snug">
            Digital Creator at{" "}
            <a
              href="https://instagram.com/rouni.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8A96A] hover:underline transition-colors"
            >
              Rouni Dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
