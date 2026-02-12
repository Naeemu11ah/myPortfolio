export default function Skills() {
  const skills = [
    {
      name: "HTML",
      logo: "devicon-html5-plain",
      level: "Intermediate",
      count: 87,
    },
    {
      name: "CSS",
      logo: "devicon-css3-plain",
      level: "Intermediate",
      count: 84,
    },
    {
      name: "JAVASCRIPT",
      logo: "devicon-javascript-plain",
      level: "Intermediate",
      count: 75,
    },
    {
      name: "BOOTSTRAP",
      logo: "devicon-bootstrap-plain",
      level: "intermediate",
      count: 80,
    },
    {
      name: "TAILWIND",
      logo: "devicon-tailwindcss-plain",
      level: "intermediate",
      count: 80,
    },
    {
      name: "REACT",
      logo: "devicon-react-plain",
      level: "Intermediate",
      count: 70,
    },
    {
      name: "NODE JS",
      logo: "devicon-nodejs-plain",
      level: "Beginner",
      count: 55,
    },
    {
      name: "EXPRESS",
      logo: "devicon-express-original",
      level: "Intermediate",
      count: 73,
    },
    {
      name: "MONGODB",
      logo: "devicon-mongodb-plain",
      level: "intermediate",
      count: 65,
    },
    {
      name: "MY SQL",
      logo: "devicon-mysql-plain",
      level: "intermediate",
      count: 65,
    },
    {
      name: "PYTHON",
      logo: "devicon-python-plain",
      level: "Beginner",
      count: 53,
    },
    {
      name: "C++",
      logo: "devicon-cplusplus-plain",
      level: "Beginner",
      count: 53,
    },
    {
      name: "Typescript",
      logo: "devicon-typescript-plain",
      level: "Beginner",
      count: 40,
    },
  ];
  return (
    <section id="skills" className="py-10 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Technical <span className="text-cyan-600">Skills</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-8 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative basis-full sm:basis-auto min-w-[10rem] max-w-[16rem] bg-gray-900 p-4 rounded-xl flex flex-col items-center text-center"
            >
              <p className="text-xl mb-2">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <i className={skill.logo}></i>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
