import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Esign from './pages/Esign';
import ResumeBuilder from './pages/ResumeBuilder';
import QuestionBankGenerator from './pages/QuestionBankGenerator';
import AISummarizer from './pages/AISummarizer';
import Header from './components/Header';
import Contact from './pages/Contact';
import StudyPlanner from './pages/StudyPlanner';
import GradeTracker from './pages/GradeTracker';

const Home = () => (
<>

<div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to MyApp!</h1>
      <p className="text-lg mb-8">Empowering Students to Excel</p>
      <div className="flex space-x-4">
        <Link to="/resume-builder" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-md">
          Build Your Resume
        </Link>
        <Link to="/question-bank" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-md">
          Generate Questions
        </Link>
      </div>
    </div>

</>
);

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/e-sign" element={<Esign />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/question-bank" element={<QuestionBankGenerator />} />
          <Route path="/ai-summarizer" element={<AISummarizer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/study-plan" element={<StudyPlanner />} />
          <Route path="/grade-tracker" element={<GradeTracker />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
