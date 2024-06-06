import { useState } from 'react';
import html2pdf from 'html2pdf.js'; // Import the html2pdf library

const ResumeBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    education: '',
    experience: '',
    skills: '',
    summary: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const generateResume = () => {
    // Generate resume content based on personalInfo
    const resumeContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1 style="font-size: 24px; margin-bottom: 20px;">${personalInfo.name}</h1>
        <p style="font-size: 16px; margin-bottom: 10px;">Phone: ${personalInfo.phone}</p>
        <p style="font-size: 16px; margin-bottom: 10px;">Email: ${personalInfo.email}</p>
        <p style="font-size: 16px; margin-bottom: 10px;">LinkedIn: ${personalInfo.linkedin}</p>
        <p style="font-size: 16px; margin-bottom: 20px;">GitHub: ${personalInfo.github}</p>
        <h2 style="font-size: 20px; margin-bottom: 10px;">Education</h2>
        <p style="font-size: 16px; margin-bottom: 20px;">${personalInfo.education}</p>
        <h2 style="font-size: 20px; margin-bottom: 10px;">Work Experience</h2>
        <p style="font-size: 16px; margin-bottom: 20px;">${personalInfo.experience}</p>
        <h2 style="font-size: 20px; margin-bottom: 10px;">Skills</h2>
        <p style="font-size: 16px; margin-bottom: 20px;">${personalInfo.skills}</p>
        <h2 style="font-size: 20px; margin-bottom: 10px;">Summary</h2>
        <p style="font-size: 16px;">${personalInfo.summary}</p>
      </div>
    `;

    // Convert resume content to PDF
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeContent).set(opt).save();
  };

  return (
    <div className="max-w-lg mx-auto  bg-gray-200 rounded-lg shadow-md p-3 m-10">
      <h2 className="text-3xl font-bold text-center mb-6">Resume Builder</h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">Name:</label>
          <input type="text" id="name" name="name" value={personalInfo.name} onChange={handleInputChange} className="border border-gray-300 rounded-md px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-semibold">Phone:</label>
          <input type="text" id="phone" name="phone" value={personalInfo.phone} onChange={handleInputChange} className="border border-gray-300 rounded-md px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">Email:</label>
          <input type="text" id="email" name="email" value={personalInfo.email} onChange={handleInputChange} className="border border-gray-300 rounded-md px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="linkedin" className="font-semibold">LinkedIn:</label>
          <input type="text" id="linkedin" name="linkedin" value={personalInfo.linkedin} onChange={handleInputChange} className="border border-gray-300 rounded-md px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="github" className="font-semibold">GitHub:</label>
          <input type="text" id="github" name="github" value={personalInfo.github} onChange={handleInputChange} className="border border-gray-300 rounded-md px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="education" className="font-semibold">Education:</label>
          <textarea id="education" name="education" value={personalInfo.education} onChange={handleInputChange} className="border border-gray-300 rounded-md px-4 py-2"></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="experience" className="font-semibold">Work Experience:</label>
          <textarea id="experience" name="experience" value={personalInfo.experience} onChange={handleInputChange} className="border border-gray-300 rounded-md px-4 py-2"></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="skills" className="font-semibold">Skills:</label>
          <textarea id="skills" name="skills" value={personalInfo.skills} onChange={handleInputChange} className="border border-gray-300 rounded-md px-4 py-2"></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="summary" className="font-semibold">Summary:</label>
          <textarea id="summary" name="summary" value={personalInfo.summary} onChange={handleInputChange} className="border border-gray-300 rounded-md px-4 py-2"></textarea>
        </div>
        <button type="button" onClick={generateResume} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Generate Resume</button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
