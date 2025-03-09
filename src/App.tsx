import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Target, TrendingUp, Users, Mail, Phone, MapPin, ArrowRight, Sparkles, Shield, Bot, Briefcase, BookOpen, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import ReviewChart from './components/ReviewChart';

function App() {
  const [tutorialRef, tutorialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [whyChooseUsRef, whyChooseUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [reviewsRef, reviewsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] relative overflow-hidden">
        <div className="absolute inset-99 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a]/80 via-[#1a1a3a]/80 to-[#0a0a1a]/80"
        ></motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 mb-8"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              <span>AI-Powered Learning Platform</span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Transform Your Career with AI-Driven Skills
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100/80 mb-12 max-w-3xl mx-auto"
            >
              Discover personalized learning paths and advance your career with intelligent skill recommendations powered by cutting-edge AI technology
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Chat with Ozon
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        variants={containerVariants}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        className="py-32 bg-gradient-to-b from-[#0a0a1a] to-[#1a1a3a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Revolutionize Your Learning Journey
            </h2>
            <p className="text-blue-100/60 text-xl max-w-3xl mx-auto">
              Our AI-powered platform adapts to your learning style and career goals
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Learning",
                description: "Personalized recommendations based on your skills and goals"
              },
              {
                icon: Target,
                title: "Skill Gap Analysis",
                description: "Identify and bridge the gap between your current and desired skills"
              },
              {
                icon: Shield,
                title: "Industry Recognition",
                description: "Earn certificates recognized by top companies worldwide"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
              >
                <div className="h-14 w-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-blue-100/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tutorial Video Section */}
      <motion.section
        ref={tutorialRef}
        variants={containerVariants}
        initial="hidden"
        animate={tutorialInView ? "visible" : "hidden"}
        className="py-32 bg-gradient-to-b from-[#1a1a3a] to-[#0a0a1a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">See How It Works</h2>
            <p className="text-blue-100/60 text-xl max-w-3xl mx-auto">
              Watch our platform in action and discover how it can transform your learning experience
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10"
          >
             <iframe 
              className="w-full aspect-video rounded-2xl"
              src="https://www.youtube.com/embed/kShTN0Jz6Jg?si=SybZ_EMOMuP9KBf_" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen="True"></iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Why Choose Us Section */}
      <motion.section
        ref={whyChooseUsRef}
        variants={containerVariants}
        initial="hidden"
        animate={whyChooseUsInView ? "visible" : "hidden"}
        className="py-32 bg-gradient-to-b from-[#0a0a1a] to-[#1a1a3a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose Ozon.AI</h2>
            <p className="text-blue-100/60 text-xl max-w-3xl mx-auto">
              Experience the future of skill development with our advanced AI-powered platform
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <Bot className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Chatbot</h3>
              <p className="text-blue-100/60">Get instant answers and guidance with our intelligent chatbot assistant.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <Briefcase className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Future Job Insights</h3>
              <p className="text-blue-100/60">AI-driven predictions for emerging career opportunities based on your interests.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <BookOpen className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Curated Learning Paths</h3>
              <p className="text-blue-100/60">Personalized course recommendations from Udemy based on your skill level.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        ref={reviewsRef}
        variants={containerVariants}
        initial="hidden"
        animate={reviewsInView ? "visible" : "hidden"}
        className="py-32 bg-gradient-to-b from-[#1a1a3a] to-[#0a0a1a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Our Users Say</h2>
            <p className="text-blue-100/60 text-xl max-w-3xl mx-auto">
              Join thousands of satisfied learners who have transformed their careers with Ozon.AI
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Software Developer",
                  rating: 5,
                  comment: "The AI-powered course recommendations were spot-on! I've landed my dream job thanks to the skills I gained."
                },
                {
                  name: "Michael Chen",
                  role: "Data Scientist",
                  rating: 4,
                  comment: "The future job insights feature helped me pivot my career in the right direction. Incredibly valuable tool!"
                },
                {
                  name: "Emily Rodriguez",
                  role: "UX Designer",
                  rating: 5,
                  comment: "The resume builder and skill gap analysis completely transformed my job search. Highly recommended!"
                }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-blue-100/80 mb-4">{review.comment}</p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <p className="text-blue-100/60 text-sm">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-8">User Growth & Satisfaction</h3>
              <ReviewChart />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-[#1a1a3a] to-[#0a0a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-20">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email Us</h3>
                  <p className="text-blue-100/60">contact@papaozonai</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Call Us</h3>
                  <p className="text-blue-100/60">+(91) 123456778</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                  <p className="text-blue-100/60">New Delhi,Delhi,India</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              ></textarea>
              <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a1a] text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Ozon.AI</span>
              </div>
              <p className="text-blue-100/60">Empowering careers through AI-driven skill development</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#home" className="text-blue-100/60 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-blue-100/60 hover:text-white transition-colors">About</a></li>
                <li><a href="#features" className="text-blue-100/60 hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Features</h3>
              <ul className="space-y-4">
                <li><a href="#ai-recommendations" className="text-blue-100/60 hover:text-white transition-colors">AI Recommendations</a></li>
                <li><a href="#personal-analysis" className="text-blue-100/60 hover:text-white transition-colors">Personal Analysis</a></li>
                <li><a href="#skill-gap" className="text-blue-100/60 hover:text-white transition-colors">Skill Gap Analysis</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Connect</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-blue-100/60 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-blue-100/60 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-blue-100/60 hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-blue-100/60">
            <p>&copy; 2024 Ozon.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;