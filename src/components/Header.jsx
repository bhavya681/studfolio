// import  { useState } from 'react';
// import { Link } from 'react-router-dom';
// import UnityHubLogo from '../../public/unityhub-high-resolution-logo-black-transparent.png'; // Import your logo image

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <header className="bg-gradient-to-r from-green-500 to-gray-500 py-4 shadow-md rounded-b-lg shadow-gray-200">
//         <div className="container mx-auto flex justify-between items-center px-4">
//           {/* Logo and Title */}
//           <Link to="/" className="text-white flex items-center">
//             <img
//               src={UnityHubLogo} // Use your imported logo image
//               alt="UnityHub"
//               className="h-12 mr-2"
//             />

//           </Link>

//           {/* Desktop Navigation */}
// <nav className="hidden md:flex space-x-6 mx-4">
//   <NavLink to="/" text="Home" />
//   <NavLink to="/e-sign" text="E-Sign" />
//   <NavLink to="/smart-board" text="Smart Board" />
//   <NavLink to="/question-bank" text="Question Bank" />
//   <NavLink to="/ai-summarizer" text="AI Summarizer" />
//   <NavLink to="/expense-tracker" text="Expense Tracker" />
//   <NavLink to="/project-tracker" text="Project Tracker" />
//   <NavLink to="/invoice-generator" text="Invoice Generator" />
//   <NavLink to="/study-plan" text="Study Planner" />
//   <NavLink to="/grade-tracker" text="Grade Tracker" />
// </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               id="menu-btn"
//               className="text-white focus:outline-none"
//               onClick={toggleMenu}
//             >
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`} id="menu">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <MobileNavLink to="/" text="Home" toggleMenu={toggleMenu} />
//             <MobileNavLink to="/e-sign" text="E-Sign" toggleMenu={toggleMenu} />
//             <MobileNavLink to="/smart-board" text="Smart Board" toggleMenu={toggleMenu} />
//             <MobileNavLink to="/question-bank" text="Question Bank" toggleMenu={toggleMenu} />
//             <MobileNavLink to="/ai-summarizer" text="AI Summarizer" toggleMenu={toggleMenu} />
//             <MobileNavLink to="/expense-tracker" text="Expense Tracker" toggleMenu={toggleMenu} />
//             <MobileNavLink to="/project-tracker" text="Project Tracker" toggleMenu={toggleMenu} />
//             <MobileNavLink to="/invoice-generator" text="Invoice Generator" toggleMenu={toggleMenu} />
//             <MobileNavLink to="/study-plan" text="Study Planner" toggleMenu={toggleMenu} />
//             <MobileNavLink to="/grade-tracker" text="Grade Tracker" toggleMenu={toggleMenu} />
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// const NavLink = ({ to, text }) => (
//   <Link
//     to={to}
//     className="text-white hover:text-gray-200 transition duration-300 font-semibold text-lg"
//   >
//     {text}
//   </Link>
// );

// const MobileNavLink = ({ to, text, toggleMenu }) => (
//   <Link
//     to={to}
//     className="block text-white hover:text-gray-200 transition duration-300 font-semibold text-lg py-2"
//     onClick={toggleMenu}
//   >
//     {text}
//   </Link>
// );

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UnityHubLogo from '../../public/unityhub-high-resolution-logo-black-transparent.png'; // Import your logo image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-500 to-gray-500 py-4 shadow-md rounded-b-lg shadow-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Title */}
        <Link to="/" className="text-white flex items-center">
          <img
            src={UnityHubLogo} // Use your imported logo image
            alt="UnityHub"
            className="h-12 mr-2"
          />
         
        </Link>

        {/* Desktop Navigation */}
    
<nav className="hidden md:flex space-x-6">
  <NavLink to="/" text="Home" />
  <NavLink to="/e-sign" text="E-Sign" title="E-Signature" />
  <NavLink to="/smart-board" text="SB" title="Smart Board" />
  <NavLink to="/question-bank" text="QB" title="Question Bank" />
  <NavLink to="/ai-summarizer" text="AI-S" title="AI Summarizer" />
  <NavLink to="/expense-tracker" text="ET" title="Expense Tracker" />
  <NavLink to="/project-tracker" text="PT" title="Project Tracker" />
  <NavLink to="/invoice-generator" text="IG" title="Invoice Generator" />
  <NavLink to="/study-plan" text="SP" title="Study Planner" />
  <NavLink to="/grade-tracker" text="GT" title="Grade Tracker" />
  {/* <NavLink to="/passport-photo" text="PP" title="Passport Photo" /> */}
  <NavLink to="/dictionary" text="Dict" title="Dictionary" />
<NavLink to="/compress" text="Trans" title="Compressor" /> 
</nav>



        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
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
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute right-1 top-26 rounded-md bg-gray-600 w-56 ${menuOpen ? 'block' : 'hidden'}`} id="menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink to="/" text="Home" toggleMenu={toggleMenu} />
          <MobileNavLink to="/e-sign" text="E-Sign" toggleMenu={toggleMenu} />
          <MobileNavLink to="/smart-board" text="Smart Board" toggleMenu={toggleMenu} />
          <MobileNavLink to="/question-bank" text="Question Bank" toggleMenu={toggleMenu} />
          <MobileNavLink to="/ai-summarizer" text="AI Summarizer" toggleMenu={toggleMenu} />
          <MobileNavLink to="/expense-tracker" text="Expense Tracker" toggleMenu={toggleMenu} />
          <MobileNavLink to="/project-tracker" text="Project Tracker" toggleMenu={toggleMenu} />
          <MobileNavLink to="/invoice-generator" text="Invoice Generator" toggleMenu={toggleMenu} />
          <MobileNavLink to="/study-plan" text="Study Planner" toggleMenu={toggleMenu} />
          <MobileNavLink to="/grade-tracker" text="Grade Tracker" toggleMenu={toggleMenu} />
          {/* <MobileNavLink to="/passport-photo" text="Passport Photo" toggleMenu={toggleMenu} /> */}
          <MobileNavLink to="/dictionary" text="Dictionary" toggleMenu={toggleMenu} />
          <MobileNavLink to="/compress" text="Compressor" toggleMenu={toggleMenu} /> 
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, text }) => (
  <Link
    to={to}
    className="text-white hover:text-gray-200 transition duration-300 font-semibold text-lg"
  >
    {text}
  </Link>
);

const MobileNavLink = ({ to, text, toggleMenu }) => (
  <Link
    to={to}
    className="block text-white hover:text-gray-200 transition duration-300 font-semibold text-lg py-2 px-4"
    onClick={toggleMenu}
  >
    {text}
  </Link>
);

export default Header;


// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import UnityHubLogo from "../../public/unityhub-high-resolution-logo-black-transparent.png"; // Import your logo image

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <header className="bg-gradient-to-r from-green-500 to-gray-500 py-4 shadow-md rounded-b-lg shadow-gray-200">
//         <div className="container mx-auto flex justify-between items-center px-4">
//           {/* Logo and Title */}
//           <Link to="/" className="text-white flex items-center">
//             <img
//               src={UnityHubLogo} // Use your imported logo image
//               alt="UnityHub"
//               className="h-12 mr-2"
//             />
//           </Link>

//           <nav className="hidden md:flex space-x-6 mx-4">
//             <NavLink to="/" text="Home" />
//             <NavLink to="/e-sign" text="E-Sign" />
//             <NavLink to="/smart-board" text="Smart Board" />
//             <NavLink to="/question-bank" text="Question Bank" />
//             <NavLink to="/ai-summarizer" text="AI Summarizer" />
//             <NavLink to="/expense-tracker" text="Expense Tracker" />
//             <NavLink to="/project-tracker" text="Project Tracker" />
//             <NavLink to="/invoice-generator" text="Invoice Generator" />
//             <NavLink to="/study-plan" text="Study Planner" />
//             <NavLink to="/grade-tracker" text="Grade Tracker" />
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               id="menu-btn"
//               className="text-white focus:outline-none"
//               onClick={toggleMenu}
//             >
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden absolute right-0 top-20 rounded-md bg-gray-600 w-56 ${
//             menuOpen ? "block" : "hidden"
//           }`}
//           id="menu"
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <MobileNavLink to="/" text="Home" toggleMenu={toggleMenu} />
//             <MobileNavLink to="/e-sign" text="E-Sign" toggleMenu={toggleMenu} />
//             <MobileNavLink
//               to="/smart-board"
//               text="Smart Board"
//               toggleMenu={toggleMenu}
//             />
//             <MobileNavLink
//               to="/question-bank"
//               text="Question Bank"
//               toggleMenu={toggleMenu}
//             />
//             <MobileNavLink
//               to="/ai-summarizer"
//               text="AI Summarizer"
//               toggleMenu={toggleMenu}
//             />
//             <MobileNavLink
//               to="/expense-tracker"
//               text="Expense Tracker"
//               toggleMenu={toggleMenu}
//             />
//             <MobileNavLink
//               to="/project-tracker"
//               text="Project Tracker"
//               toggleMenu={toggleMenu}
//             />
//             <MobileNavLink
//               to="/invoice-generator"
//               text="Invoice Generator"
//               toggleMenu={toggleMenu}
//             />
//             <MobileNavLink
//               to="/study-plan"
//               text="Study Planner"
//               toggleMenu={toggleMenu}
//             />
//             <MobileNavLink
//               to="/grade-tracker"
//               text="Grade Tracker"
//               toggleMenu={toggleMenu}
//             />
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// const MobileNavLink = ({ to, text, toggleMenu }) => (
//   <Link
//     to={to}
//     className="block text-white hover:text-gray-200 transition duration-300 font-semibold text-lg py-2 px-4"
//     onClick={toggleMenu}
//   >
//     {text}
//   </Link>
// );

// export default Header;
