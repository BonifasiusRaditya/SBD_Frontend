import { useState } from 'react';
import logo_sbd from '../assets/SBDLogo.svg';
import logo_dmj from '../assets/DMJLogo.svg';
import logo_os from '../assets/OSLogo.svg';
import logo from '../assets/Logo.svg';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-md border-b">
        <img src={logo} className="w-16 h-16" alt="Logo" />
        <div className="text-2xl font-bold">Netlab</div>
        <div className="flex space-x-6 text-lg">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#sbd" className="hover:underline">SBD</a>
          <a href="#dmj" className="hover:underline">DMJ</a>
          <a href="#os" className="hover:underline">OS</a>
          <a href="#netlab" className="hover:underline">Netlab</a>
        </div>
        <button onClick={toggleMode} 
        className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
          darkMode ? 'bg-white' : 'bg-gray-400'
        }`}
        >
          <div
    className={`bg-black w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
      darkMode ? 'translate-x-6' : 'translate-x-0'
    }`}
  ></div>
        </button>
      </nav>

      {/* Content */}
      <div className="flex flex-col items-start justify-center px-10 py-16 space-y-10 text-left">
        {/* SBD */}
        <div id="sbd" className="flex items-center p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-blue-800">
          <img src={logo_sbd} className="w-32 h-32 mr-6" alt="SBD Logo" />
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-2">Netlab SBD</h1>
            <p className="text-lg max-w-md">
              Sistem yang menyimpan, mengelola, dan menyediakan akses terhadap data secara terstruktur dan sistematis.
            </p>
          </div>
        </div>

        {/* DMJ */}
        <div id="dmj" className="flex items-center p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-green-800">
          <img src={logo_dmj} className="w-32 h-32 mr-6" alt="DMJ Logo" />
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-2">Netlab DMJ</h1>
            <p className="text-lg max-w-md">
              Proses perencanaan, perancangan, dan implementasi sistem jaringan komputer, termasuk komponen perangkat keras, perangkat lunak, dan layanan yang terkait.
            </p>
          </div>
        </div>

        {/* OS */}
        <div id="os" className="flex items-center p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:bg-purple-800">
          <img src={logo_os} className="w-32 h-32 mr-6" alt="OS Logo" />
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-2">Netlab OS</h1>
            <p className="text-lg max-w-md">
              Perangkat lunak yang mengelola sumber daya komputer, baik hardware maupun software, dan menyediakan antarmuka bagi pengguna untuk berinteraksi dengan perangkat keras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
