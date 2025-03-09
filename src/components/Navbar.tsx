import React, { useState } from 'react';
import { Menu, X, Brain, ChevronDown, GraduationCap, LineChart, FileText, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0a0a1a]/80 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            
            <span className="ml-2 text-xl font-bold text-white">OzonAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="https://youtu.be/zpsVpnvFfZQ?si=Uyh1_APT15k9jeLM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100/80 hover:text-white transition-colors"
            >
              Home
            </a>
            <a href="#about" className="text-blue-100/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#about" className="text-blue-100/80 hover:text-white transition-colors">
              News
            </a>
            <div className="relative">
              <button
                className="flex items-center text-blue-100/80 hover:text-white transition-colors"
                onMouseEnter={() => setShowFeatures(true)}
                onMouseLeave={() => setShowFeatures(false)}
              >
                Features <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {showFeatures && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-64 bg-[#1a1a3a] rounded-xl border border-white/10 shadow-xl backdrop-blur-lg py-2"
                    onMouseEnter={() => setShowFeatures(true)}
                    onMouseLeave={() => setShowFeatures(false)}
                  >
                    <a href="#ai-recommendations" className="flex items-center px-4 py-2 text-blue-100/80 hover:bg-white/5">
                      <Brain className="h-5 w-5 mr-2 text-blue-400" />
                      AI Recommendations
                    </a>
                    <a href="#personal-analysis" className="flex items-center px-4 py-2 text-blue-100/80 hover:bg-white/5">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-400" />
                      Personal Analysis
                    </a>
                    <a href="#skill-gap" className="flex items-center px-4 py-2 text-blue-100/80 hover:bg-white/5">
                      <LineChart className="h-5 w-5 mr-2 text-blue-400" />
                      Skill Gap Analysis
                    </a>
                    <a href="#resume-builder" className="flex items-center px-4 py-2 text-blue-100/80 hover:bg-white/5">
                      <FileText className="h-5 w-5 mr-2 text-blue-400" />
                      Resume Builder
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 text-blue-100/80 hover:text-white transition-colors"
                onClick={() => setShowAuth(true)}
              >
                <LogIn className="h-5 w-5 mr-2" />
                Sign In
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Sign Up
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a3a] border-t border-white/10"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#home" className="block px-4 py-2 text-blue-100/80 hover:bg-white/5 rounded-lg">
                Home
              </a>
              <a href="#about" className="block px-4 py-2 text-blue-100/80 hover:bg-white/5 rounded-lg">
                About
              </a>
              <div className="space-y-2">
                <div className="px-4 py-2 text-blue-100/80 font-medium">Features</div>
                <a href="#ai-recommendations" className="block px-4 py-2 text-blue-100/80 hover:bg-white/5 rounded-lg pl-8">
                  AI Recommendations
                </a>
                <a href="#personal-analysis" className="block px-4 py-2 text-blue-100/80 hover:bg-white/5 rounded-lg pl-8">
                  Personal Analysis
                </a>
                <a href="#skill-gap" className="block px-4 py-2 text-blue-100/80 hover:bg-white/5 rounded-lg pl-8">
                  Skill Gap Analysis
                </a>
                <a href="#resume-builder" className="block px-4 py-2 text-blue-100/80 hover:bg-white/5 rounded-lg pl-8">
                  Resume Builder
                </a>
              </div>
              <a href="#news" className="block px-4 py-2 text-blue-100/80 hover:bg-white/5 rounded-lg">
                News
              </a>
              <div className="space-y-2 pt-4">
                <button className="w-full px-4 py-2 text-blue-100/80 hover:bg-white/5 rounded-lg flex items-center">
                  <LogIn className="h-5 w-5 mr-2" />
                  Sign In
                </button>
                <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white flex items-center justify-center">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;