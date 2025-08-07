
import React, { useState } from 'react';

const WelcomePage = () => {
  const [language, setLanguage] = useState('English');
  
  // Available languages
  const languages = [
    'English', 'Hindi', 'Marathi', 'Tamil', 'Telugu', 'Bengali'
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Language Selector */}
      <div className="absolute top-4 right-4">
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="px-3 py-1 bg-white rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>
      
      {/* Header */}
      <header className="pt-8 pb-6">
        <div className="container mx-auto flex justify-center">
          <div className="flex items-center">
            <div className="text-4xl font-bold text-indigo-600">FormEzy</div>
            <div className="ml-2 px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded">BETA</div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Simplifying Form-Filling <span className="text-indigo-600">for Everyone</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Say goodbye to complex government forms and tedious application processes. Let our AI-powered assistant guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg border border-indigo-600 hover:bg-gray-50 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="/api/placeholder/600/400" 
              alt="FormEzy demo" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose FormEzy?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Document Scanning</h3>
              <p className="text-gray-600">
                Upload or take photos of your documents. Our advanced OCR technology extracts the information automatically.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Chat Interface</h3>
              <p className="text-gray-600">
                Interact with our AI assistant through a familiar chat interface. No complex form navigation required.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-language Support</h3>
              <p className="text-gray-600">
                Use FormEzy in your preferred language with voice input/output options for maximum accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How FormEzy Works</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-xl font-semibold mb-2">Upload Your Documents</h3>
              <p className="text-gray-600">
                Simply upload photos or scans of required documents. Our system will automatically extract the relevant information.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 md:order-last">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-xl font-semibold mb-2">Chat With Our AI</h3>
              <p className="text-gray-600">
                Our AI assistant will guide you through the remaining form fields, asking simple questions to complete your application.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-xl font-semibold mb-2">Submit with Confidence</h3>
              <p className="text-gray-600">
                Review your completed form, make any necessary adjustments, and submit with confidence knowing everything is filled correctly.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to simplify your form-filling experience?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are saving time and reducing stress with FormEzy.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold">FormEzy</div>
              <p className="mt-2 text-gray-400">Simplifying form-filling for everyone</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center md:text-left">
            <p className="text-gray-400">© 2025 FormEzy by Tech Titans. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;