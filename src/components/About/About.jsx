import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
// import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Sneha Roy
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white text-md">I am a </span>

            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                // "Machine Learning Engineer",
                // 2000,
                // "Deep Learning & NLP Practitioner",
                // 2000,
                "Generative AI Developer",
                2000,
                "Problem Solver",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
              className="text-[#8245ec]"
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Machine Learning Engineer and Full Stack Developer skilled in
            building production-ready ML pipelines and scalable web
            applications. Experienced in Deep Learning, NLP, and Generative AI,
            with strong foundations in DSA and system design using Spring Boot
            and React.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-44 h-40 sm:w-60 sm:h-60 md:w-96 md:h-96 border-2 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={"profile2.png"}
              alt="Sneha Roy"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
