import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Esign from "./pages/Esign";
import QuestionBankGenerator from "./pages/QuestionBankGenerator";
import AISummarizer from "./pages/AISummarizer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import StudyPlanner from "./pages/StudyPlanner";
import GradeTracker from "./pages/GradeTracker";
import SmartBoard from "./pages/SmartBoard";
import Trail from "./pages/Trail";
import ExpenseTracker from "./pages/ExpenseTracker ";
import InvoiceGenerator from "./pages/InvoiceGenerator";
import Documentation from "./pages/Documentation";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import UnityHubLogo from '../public/unityhub-high-resolution-logo-black-transparent.png'; 

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-100 text-black py-20">
        <div className="container mx-auto text-center px-4">
          <Link
            to="/"
            className="text-black text-2xl font-bold hover:animate-pulse flex items-center justify-center"
          >
            <img
              src={
                UnityHubLogo
              }
              alt="UnityHub"
              className="h-12 mr-2"
            />
          </Link>
          <p className="text-lg md:text-xl mt-4 mb-8">
            Your platform for seamless productivity

          </p>
          <Link
            to="/contacts"
            className="bg-white text-gray-800 py-2 px-6 rounded-full font-semibold text-lg hover:bg-gray-200 transition duration-300"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
            {/* Feature Item 1 */}
            <Services
              icon={
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              }
              title="Easy Integration"
              description="Integrate seamlessly with your existing tools."
            />

            {/* Feature Item 2 */}
            <Services
              icon={
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              }
              title="Cloud Storage"
              description="Securely store and access your data from anywhere."
            />

            {/* Feature Item 3 */}
            <Services
              icon={
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              }
              title="Powerful Analytics"
              description="Gain insights with powerful built-in analytics."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About UnityHub</h2>
            <p className="text-lg text-gray-700">
              UnityHub is dedicated to providing innovative solutions that
              enhance productivity across various industries. Our mission is to
              simplify complex workflows and empower teams to achieve more.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-100 text-black py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8">
            Sign up today and experience the power of UnityHub.
          </p>
          <Link
            to="/signup"
            className="bg-green-400 text-gray-800 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-200 transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-100 text-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Need help? Check out our documentation.
            </h2>
            <p className="text-lg mb-8">
              Explore our comprehensive documentation to achieve the most out of
              UnityHub.
            </p>
            <Link
              to="/documentation"
              className="bg-gray-200 text-gray-800 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-400 transition duration-300"
            >
              Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/e-sign" element={<Esign />} />
          <Route path="/smart-board" element={<SmartBoard />} />
          <Route path="/question-bank" element={<QuestionBankGenerator />} />
          <Route path="/ai-summarizer" element={<AISummarizer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/study-plan" element={<StudyPlanner />} />
          <Route path="/grade-tracker" element={<GradeTracker />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/invoice-generator" element={<InvoiceGenerator />} />
          <Route path="/project-tracker" element={<Trail />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
