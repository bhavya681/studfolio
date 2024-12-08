import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import { useRef } from 'react';

function ResumePreview() {
  const { state } = useLocation();
  const resumeRef = useRef();

  const handleDownload = () => {
    const doc = new jsPDF('portrait', 'pt', 'a4');
    doc.html(resumeRef.current, {
      callback: function (pdf) {
        pdf.save(`${state.name}-resume.pdf`);
      },
      x: 10,
      y: 10,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div ref={resumeRef} className="bg-white p-10 shadow-lg rounded-lg max-w-4xl w-full">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{state.name || "Bhavya Wade"}</h1>
          <p className="text-gray-600">
            {state.phone || "7798807904"} | 
            <a href={`mailto:${state.email}`} className="text-blue-600 hover:underline ml-1">
              {state.email || "bhavyawade2@gmail.com"}
            </a>
            {state.linkedin && (
              <>
                {" | "}
                <a href={state.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  LinkedIn
                </a>
              </>
            )}
            {state.github && (
              <>
                {" | "}
                <a href={state.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  GitHub
                </a>
              </>
            )}
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 mb-2">Education</h2>
          <p className="text-gray-700">
            {state.education || "Vidyavardhinis College of Engineering & Technology, B.E. in Artificial Intelligence and Data Science, 2022-2025"}
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 mb-2">Experiences</h2>
          <div>
            {state.experience ? (
              <ul className="list-none space-y-4">
                {state.experience.split('\n').map((item, index) => (
                  <li key={index} className="text-gray-700">
                    <div className="font-semibold">{item.split('—')[0]}</div>
                    <div className="italic text-gray-600">{item.split('—')[1]}</div>
                    <div>{item.split('—')[2]}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <div className="font-semibold">Tata Steel — Software Engineer Intern</div>
                <div className="italic text-gray-600">Boisar, Mumbai, Maharashtra, India</div>
                <div>June 2023 - July 2023</div>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>
                    Achieved significant improvements in network monitoring by implementing the 'Ping Monitoring System.'
                  </li>
                  <li>
                    Collaborated with the IT team to enhance workplace safety protocols.
                  </li>
                  <li>
                    Analyzed and resolved networking challenges, contributing to seamless IT operations.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 mb-2">Projects</h2>
          <ul className="list-none space-y-4 text-gray-700">
            {state.projects
              ? state.projects.split('\n').map((item, index) => (
                  <li key={index} className="font-semibold">
                    {item.split('|')[0]}
                    <div className="italic text-gray-600">{item.split('|')[1]}</div>
                  </li>
                ))
              : (
                <>
                  <li>
                    <div className="font-semibold">React Fast Food Hub</div>
                    <div className="italic text-gray-600">Technologies: React.js, Tailwind CSS, JavaScript, React Context API</div>
                    <ul className="list-disc ml-5">
                      <li>Implemented key features like add to cart, product details, navigation, advanced filters, and search.</li>
                    </ul>
                  </li>
                  <li>
                    <div className="font-semibold">Full-Stack Social Site - CodeBuddy</div>
                    <div className="italic text-gray-600">Technologies: MongoDB, Express.js, React, Node.js, Tailwind CSS, Socket API</div>
                    <ul className="list-disc ml-5">
                      <li>Led the development of developer profiles, real-time chat, and social feed features.</li>
                    </ul>
                  </li>
                </>
              )}
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 mb-2">Skills</h2>
          <p className="text-gray-700">{state.skills || "React, JavaScript, Tailwind CSS, Node.js, MongoDB"}</p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Download Resume as PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
