import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-xl md:text-2xl opacity-90">
            Explore the range of services designed to optimize your workflow.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Seamless Integration</h3>
              <p className="text-gray-600 text-center">
                Integrate your tools and apps to achieve a smooth and unified experience.
              </p>
              <Link
                to="/services/seamless-integration"
                className="mt-6 block text-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More
              </Link>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Cloud Storage</h3>
              <p className="text-gray-600 text-center">
                Store your data securely in the cloud and access it anytime, anywhere.
              </p>
              <Link
                to="/services/cloud-storage"
                className="mt-6 block text-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More
              </Link>
            </div>

            {/* Service 3 */}
            <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 text-center">
                Leverage powerful analytics tools to make smarter, data-driven decisions.
              </p>
              <Link
                to="/services/advanced-analytics"
                className="mt-6 block text-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More
              </Link>
            </div>

            {/* Service 4 */}
            <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Automation Tools</h3>
              <p className="text-gray-600 text-center">
                Streamline your workflows with intelligent automation that reduces manual tasks.
              </p>
              <Link
                to="/services/automation-tools"
                className="mt-6 block text-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More
              </Link>
            </div>

            {/* Service 5 */}
            <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 14l4 4 8-8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Custom Development</h3>
              <p className="text-gray-600 text-center">
                Build tailored solutions to meet your unique business needs with our development team.
              </p>
              <Link
                to="/services/custom-development"
                className="mt-6 block text-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More
              </Link>
            </div>

            {/* Service 6 */}
            <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 0v4m0-4H8m4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Consulting & Strategy</h3>
              <p className="text-gray-600 text-center">
                Get expert advice and strategy guidance to help your business grow and scale.
              </p>
              <Link
                to="/services/consulting-strategy"
                className="mt-6 block text-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need More Information?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today to discuss how we can help you achieve your goals.</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
