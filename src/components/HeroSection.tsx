import { useState, useEffect } from "react";

export default function HeroSection() {
  const words = [
    { text: "Outside Localhost", color: "#ffffff" },
    { text: "Workshops", color: "#3fb68b" },
    { text: "Meetups", color: "#C9A84C" },
    { text: "Videos", color: "#3fb68b" },
    { text: "Podcast", color: "#C9A84C" },
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000); // Change word every 4 seconds (500ms animation + 3.5s pause)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#2a2a2a] flex flex-col">
      {/* Background hero image — portrait photo, fills full height, centered */}
      <div className="absolute inset-0 z-0 pt-15 overflow-hidden w-full h-full">
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
        <span className="text-sm sm:text-base md:text-lg font-medium tracking-[0.2em] uppercase text-white/80">
          Portfolio
        </span>
      </nav>

      {/* Spacer pushes text to bottom */}
      <div className="flex-1" />

      {/* Bottom text block */}
      <div className="relative z-20 px-4 pb-0">
        <div className="leading-none">
          <p className="text-[clamp(4rem,18vw,7rem)] font-semibold text-white leading-none">
            Abdelghani
          </p>
          <p className="text-[clamp(4rem,18vw,7rem)] font-semibold text-[#C9A84C] leading-none">
            Bensalih
          </p>
        </div>
      </div>

      {/* Subtitle bar + arrow */}
      <div className="relative z-20 flex items-stretch mt-3">
        <div className="bg-black px-5 py-5 flex-1 max-w-[78%]">
          <p className="text-xl text-white leading-snug">
            Meetups Ambassador at Miro
          </p>
          <p className="text-xl text-white leading-snug">
            Training Organizer & Part-time Mentor
          </p>
        </div>
      </div>
    </div>
  );
}
