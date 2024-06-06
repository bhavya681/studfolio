import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-500 to-gray-500 py-4 shadow-md shadow-gray-400 rounded-b-lg">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="text-white text-xl font-bold hover:animate-pulse"
        >
          <img
            src="../../public/Screenshot_2024-06-06_150631-removebg-preview.png"
            alt="logo"
            className="w-15 h-16"
          />{" "}
          Studfolio
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            Home
          </Link>
          <Link
            to="/e-sign"
            className="text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            E-Sign
          </Link>
          <Link
            to="/resume-builder"
            className="text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            Resume Builder
          </Link>
          <Link
            to="/question-bank"
            className="text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            Question Bank
          </Link>
          <Link
            to="/ai-summarizer"
            className="text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            AI Summarizer
          </Link>
          <Link
            to="/study-plan"
            className="text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            Study Planner
          </Link>
          <Link
            to="/grade-tracker"
            className="text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            Grade Tracker
          </Link>
        </div>
        <div className="md:hidden">
          <button id="menu-btn" className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className="hidden md:hidden" id="menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            Home
          </Link>
          <Link
            to="/e-sign"
            className="block text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            E-Sign
          </Link>
          <Link
            to="/resume-builder"
            className="block text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            Resume Builder
          </Link>
          <Link
            to="/question-bank"
            className="block text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            Question Bank
          </Link>
          <Link
            to="/ai-summarizer"
            className="block text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            AI Summarizer
          </Link>
          <Link
            to="/study-plan"
            className="block text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            Study Planner
          </Link>
          <Link
            to="/grade-tracker"
            className="block text-white hover:text-gray-200 transition duration-300 font-semibold text-xl"
          >
            Grade Tracker
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
