"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image and Gradient Overlay */}
      <div
        className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom right,
              rgba(139, 92, 246, 0.9),
              rgba(59, 130, 246, 0.9)
            ),
            url('/images/download.jpeg')
          `,
        }}
      >
        {/* Optional: Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 animate-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-purple-200">Your Name</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold mb-8"
          >
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Designer",
                2000,
                "Freelancer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-purple-200"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto"
          >
            Passionate about creating beautiful and functional digital
            experiences. Specialized in modern web development and creative
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <Link
              href="#projects"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold 
                hover:bg-purple-100 transition-colors duration-300 flex items-center"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg 
                font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
