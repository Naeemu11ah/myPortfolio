export default function About() {
  const info = [
    { text: "Major Projects", count: "01" },
    { text: "Mini Projects", count: "14" },
    { text: "Coding experience", count: "1 Year " },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <div className="mt-6 flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-center leading-7 w-11/12 mx-auto">
                I’m a <span className="font-bold text-white">MERN Stack</span>{" "}
                Web Developer and final-year Software Engineering student with
                over one year of coding experience. I have strong command in
                HTML, CSS, JavaScript, Tailwind, Bootstrap, React, Node.js,
                Express, MySQL, and MongoDB.
                <br />
                I’ve built multiple small projects including a major web
                application, all available on my GitHub with demo videos on my
                LinkedIn profile. While I haven’t worked in a company or
                freelancing role yet, but continuously improving my skills.
                <br />
                Academically, I’ve scored 90% in Matric, 76% in FSC, and
                currently holding a CGPA of 3.6 in Software Engineering. I am
                now actively seeking a Web Developer role where I can
                contribute, learn, and grow as a professional developer.
              </p>
              <div className="flex mt-10 md:justify-start justify-center md:gap-7 gap-4">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="/Naeemullah_resume.pdf"
                download
                aria-label="Download resume"
                className="btn-primary w-52 flex justify-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
