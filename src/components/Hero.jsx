import React, { useRef } from "react";
import profilePic from "../assets/images/profilePic.jpg";
import TypeWriter from "./TypeWriter";

const socialMediaLinks = [
  "https://www.instagram.com/syed.naeemullah.shah?igsh=MTI0aWowZGp1bDZsNw%3D%3D",
  "https://github.com/Naeemu11ah",
  "https://www.linkedin.com/in/naeemullah-~-081059352/",
  "https://x.com/Naeemullah_8",
];

export default function Hero() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const social_media = [
    "logo-instagram",
    "logo-github",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={profilePic} alt="" className="mt-10 mb-5 h-60  md:h-96 object-cover rounded-full border-4" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I am <span>Naeemullah</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            <TypeWriter />
          </h4>
          <button className="btn-primary mt-8" onClick={scrollToContact}>
            Connect with Me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
}
