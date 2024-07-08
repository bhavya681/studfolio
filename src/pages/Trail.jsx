import { useState } from 'react';

const Trail = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", description: "", milestones: [], newMilestone: "" });

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    if (newProject.name && newProject.description) {
      setProjects([...projects, { ...newProject, milestones: [...newProject.milestones] }]);
      setNewProject({ name: "", description: "", milestones: [], newMilestone: "" });
    }
  };

  const handleMilestoneInputChange = (e) => {
    setNewProject({ ...newProject, newMilestone: e.target.value });
  };

  const addMilestone = () => {
    if (newProject.newMilestone) {
      setNewProject({
        ...newProject,
        milestones: [...newProject.milestones, newProject.newMilestone],
        newMilestone: ""
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
        <h1 className="text-4xl text-center font-bold mb-8">Project Tracker</h1>
        
        {/* Form for adding a new project */}
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={newProject.name}
            onChange={handleProjectInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={newProject.description}
            onChange={handleProjectInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="3"
          ></textarea>
          
          {/* Milestones section */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="New Milestone"
              value={newProject.newMilestone}
              onChange={handleMilestoneInputChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={addMilestone}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Add Milestone
            </button>
            <div className="mt-4">
              <h3 className="text-lg font-bold">Milestones:</h3>
              <ul className="list-disc list-inside">
                {newProject.milestones.map((milestone, index) => (
                  <li key={index}>{milestone}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Button to add the project */}
          <button
            onClick={addProject}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Add Project
          </button>
        </div>
        
        {/* Display all projects */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-md shadow-md">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p>{project.description}</p>
              <h4 className="mt-4 font-bold">Milestones:</h4>
              <ul className="list-disc list-inside">
                {project.milestones.map((milestone, i) => (
                  <li key={i}>{milestone}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trail;
