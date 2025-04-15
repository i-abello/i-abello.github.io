import React, { useState } from 'react';
import { Search } from 'lucide-react';

function App() {
  const [sensorId, setSensorId] = useState('');
  const [period, setPeriod] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission here
    console.log('Sensor ID:', sensorId, 'Period:', period);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-[#1a237e] text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">EUREKA</h1>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Status</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Sensor Data</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Testing Data</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <div className="bg-yellow-400 p-4">
        <div className="container mx-auto flex items-center justify-center">
          <p className="mr-4 font-medium">To see a specific sensor, submit an ID and Period.</p>
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              placeholder="Sensor ID"
              className="px-4 py-2 rounded"
              value={sensorId}
              onChange={(e) => setSensorId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Sensor Period"
              className="px-4 py-2 rounded"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="flex-1 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Protecting UCSC's forests
          </h2>
          <p className="text-white text-xl max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;