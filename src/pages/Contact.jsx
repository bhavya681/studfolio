import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6">
          <h1 className="text-3xl font-bold text-white mb-2">Contact Me</h1>
          <p className="text-lg text-white">Feel free to reach out!</p>
        </div>
        <div className="p-6">
          <div className="flex flex-col space-y-4">
            <p><strong className="text-gray-600">Name:</strong> Bhavya Wade</p>
            <p><strong className="text-gray-600">Email:</strong> bhavyawade2@gmail.com</p>
            <p><strong className="text-gray-600">Location:</strong> Mumbai,INDIA</p>
            <p><strong className="text-gray-600">Role:</strong> MERN Stack Developer | Student</p>
          </div>
          <div className="mt-6">
            <Link to="/" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md inline-block transition-colors duration-300">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
