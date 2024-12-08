import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InputForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    education: '',
    experience: '',
    projects: '',
    skills: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/resume-preview', { state: formData }); // Navigate to resume preview with form data
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Resume Builder</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                placeholder="+123456789"
                required
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label htmlFor="linkedin" className="block text-lg font-semibold text-gray-700">LinkedIn</label>
              <input
                type="url"
                id="linkedin"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                placeholder="https://linkedin.com/in/your-profile"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub */}
            <div>
              <label htmlFor="github" className="block text-lg font-semibold text-gray-700">GitHub</label>
              <input
                type="url"
                id="github"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                placeholder="https://github.com/your-profile"
                required
              />
            </div>

            {/* Education */}
            <div>
              <label htmlFor="education" className="block text-lg font-semibold text-gray-700">Education</label>
              <textarea
                id="education"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
                placeholder="Your Degree, College, Year"
                required
              ></textarea>
            </div>
          </div>

          {/* Experience */}
          <div>
            <label htmlFor="experience" className="block text-lg font-semibold text-gray-700">Experience</label>
            <textarea
              id="experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              placeholder="Job Title, Company, Dates"
              required
            ></textarea>
          </div>

          {/* Projects */}
          <div>
            <label htmlFor="projects" className="block text-lg font-semibold text-gray-700">Projects</label>
            <textarea
              id="projects"
              value={formData.projects}
              onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              placeholder="Project 1, Project 2, etc."
              required
            ></textarea>
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="skills" className="block text-lg font-semibold text-gray-700">Skills</label>
            <textarea
              id="skills"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500"
              placeholder="Skill 1, Skill 2, etc."
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600">
            Build Resume
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
