export default function Education() {
  const educationDetails = [
    {
      degree: "BS Software Engineering",
      institution: "University of Swat, Pakistan",
      grades: "CGPA: 3.6",
      year: " [2023-present]",
    },
    {
      degree: "FSC Pre-Medical",
      institution: "GHSS Charbagh, Swat",
      grades: "Grade: 76% ",
      year: " [2021-2023]",
    },
    {
      degree: "Metric",
      institution: "GHS Gulibagh, Swat",
      grades: "Grade: 90% ",
      year: " [2019-2021]",
    },
  ];

  return (
    <div id="education" className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
        My <span className="text-cyan-600">Education</span>
      </h3>
      <div className="mt-8">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-5 flex flex-col items-start mb-4 "
          >
            <div className="text-lg font-medium mb-1 text-white">
              {edu.degree}
            </div>
            <div className="flex-1">
              <div className="text-base text-gray-400">{edu.institution}</div>
              <div className="text-base text-gray-400">{edu.grades}</div>
              <div className="text-base text-gray-400">{edu.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
