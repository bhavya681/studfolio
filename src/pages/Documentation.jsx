import React from 'react';

const Documentation = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl text-center font-bold mb-12">Application Documentation</h1>

        {/* Section for E-Sign Component */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">E-Sign Component</h2>
          <p className="mb-4">Use this component to electronically sign documents.</p>
          <p className="mb-2">Route: <code className="bg-gray-200 p-1 rounded">/e-sign</code></p>
          <p>Instructions:</p>
          <ol className="list-decimal list-inside pl-4">
            <li>Navigate to the E-Sign page.</li>
            <li>Upload the document you want to sign.</li>
            <li>Use the provided tools to add your electronic signature.</li>
            <li>Save the signed document to your device.</li>
          </ol>
        </section>

        {/* Section for Smart Board Component */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Smart Board Component</h2>
          <p className="mb-4">Use this component to create and manage interactive notes and drawings.</p>
          <p className="mb-2">Route: <code className="bg-gray-200 p-1 rounded">/smart-board</code></p>
          <p>Instructions:</p>
          <ol className="list-decimal list-inside pl-4">
            <li>Navigate to the Smart Board page.</li>
            <li>Select the drawing or note-taking tool you wish to use.</li>
            <li>Create your notes or drawings on the board.</li>
            <li>Save your work or share it with others.</li>
          </ol>
        </section>

        {/* Example for Invoice Generator Component */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Invoice Generator Component</h2>
          <p className="mb-4">Use this component to create and manage invoices.</p>
          <p className="mb-2">Route: <code className="bg-gray-200 p-1 rounded">/invoice-generator</code></p>
          <p>Instructions:</p>
          <ol className="list-decimal list-inside pl-4">
            <li>Navigate to the Invoice Generator page.</li>
            <li>Enter the details of the invoice, including items and prices.</li>
            <li>Review the invoice for accuracy.</li>
            <li>Download or print the invoice for your records.</li>
          </ol>
        </section>

        {/* Example for Project Tracker Component */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Project Tracker Component</h2>
          <p className="mb-4">Use this component to manage engineering projects and collaborate with team members.</p>
          <p className="mb-2">Route: <code className="bg-gray-200 p-1 rounded">/project-tracker</code></p>
          <p>Instructions:</p>
          <ol className="list-decimal list-inside pl-4">
            <li>Navigate to the Project Tracker page.</li>
            <li>Create a new project or select an existing project.</li>
            <li>Add tasks, assign team members, and set deadlines.</li>
            <li>Track progress and update the status of tasks as they are completed.</li>
          </ol>
        </section>

        {/* Additional sections for other components as needed */}

        {/* Information about usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Usage Information</h2>
          <p className="mb-4">This application is free to use without any authentication, login, or subscription required.</p>
          <p className="mb-4">Connect with me:</p>
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="https://www.instagram.com/bhavya_wade/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bhavya-wade/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/wade_bhavy55123" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
