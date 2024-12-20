import React, { useState } from "react";
import { Link } from "react-router-dom";
import UnityHubLogo from '../../public/newLogo-removebg-preview.png';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Main Header */}
      <header className="bg-gray-900 shadow-md fixed top-0 left-0 right-0 h-16 z-50 flex items-center px-4">
        <button
          className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <Link to="/" className="flex items-center ml-4">
          <img
            src={UnityHubLogo}
            alt="UnityHub"
            className="h-8 w-auto animate-bounce"
          />
        </Link>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-40 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="py-6">
          <nav className="space-y-1 px-3">
            <SidebarLink to="/" text="Home" icon="🏠" />
            <SidebarLink to="/e-sign" text="DocuSignPro" icon="📝" />
            <SidebarLink to="/smart-board" text="Smart Board" icon="📊" />
            <SidebarLink to="/question-bank" text="Question Bank" icon="❓" />
            <SidebarLink to="/ai-summarizer" text="Text Summarizer" icon="🤖" />
            <SidebarLink to="/expense-tracker" text="Expense Tracker" icon="💰" />
            <SidebarLink to="/project-tracker" text="Project Tracker" icon="📋" />
            <SidebarLink to="/invoice-generator" text="Invoice Generator" icon="📄" />
            <SidebarLink to="/study-plan" text="Study Planner" icon="📚" />
            <SidebarLink to="/grade-tracker" text="Grade Tracker" icon="📈" />
            <SidebarLink to="/password-generator" text="Password Generator" icon="🔒" />
            <SidebarLink to="/dictionary" text="Dictionary" icon="📖" />
            {/* <SidebarLink to="/compress" text="Compressor" icon="🗜️" /> */}
            <SidebarLink to="/url-shortener" text="URL Shortener" icon="🔗" />
            {/* <SidebarLink to="/pomodoro-timer" text="Pomodoro Timer" icon="⏲️" />
            <SidebarLink to="/markdown-previewer" text="Markdown Preview" icon="📝" /> 
            <SidebarLink to="/qr-code-generator" text="QR Code Generator" icon="📱" />*/}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content Padding */}
      <div className="pt-16" />
    </>
  );
};

const SidebarLink = ({ to, text, icon }) => (
  <Link
    to={to}
    className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors duration-200"
  >
    <span className="mr-3">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </Link>
);

export default Header;
