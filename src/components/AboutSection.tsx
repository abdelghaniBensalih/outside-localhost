export default function AboutSection() {
  return (
    <div
      id="about"
      className="w-full bg-white font-sans text-black flex flex-col py-5 md:py-10"
    >
      {/* Title */}
      <div className="bg-[#f7f7f7] px-7 pt-12 py-10 md:pt-0 ">
        <p className="text-3xl md:text-5xl font-light leading-none text-[#C9A84C]">
          About
        </p>
        <p className="text-3xl md:text-5xl font-semibold leading-tight text-black">
          Abdelghani Bensalih
        </p>
      </div>

      {/* Card */}
      <div className=" bg-black flex flex-col md:flex-row relative mb-12 md:mb-0">
        {/* Text Column */}
        <div className="flex-1 flex flex-col justify-center gap-4 px-5 py-6 md:px-10 md:py-10">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-300 max-w-xl">
            Abdelghani Bensalih is a passionate software developer, community
            builder, and part-time tech mentor from Marrakech, Morocco. He
            specializes in building modern web applications and digital
            experiences using technologies like Spring Boot, React, Vue.js, and
            Tailwind CSS.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-300 max-w-xl">
            Beyond coding, he is dedicated to sharing knowledge through
            workshops, tutorials, and technical content across platforms like
            YouTube, Instagram, and Medium.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-300 max-w-xl">
            Abdelghani also co-organized hackathons such as Gemini Hack Night,
            where he supported participants in building AI-powered projects and
            collaborating in teams.
          </p>
        </div>

        {/* Photo Column */}
        <div className="relative w-full md:w-64 lg:w-72 xl:w-80 flex-shrink-0">
          {/* Top black accent bar */}
          <div className="absolute top-0 right-0 w-16 h-10 md:h-14 bg-black z-10" />

          {/* Photo */}
          <div className="w-full h-64 md:h-full min-h-[320px] bg-neutral-600 flex items-center justify-center grayscale">
            <img
              src="/images/image.png"
              alt="Abdelghani Bensalih"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Bottom black accent bar */}
          <div className="absolute bottom-0 right-0 w-16 h-10 md:h-14 bg-black z-10" />
        </div>
      </div>
    </div>
  );
}
