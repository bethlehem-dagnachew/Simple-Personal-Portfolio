"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-6 w-6" />,
    href: "https://github.com/yourusername",
    color: "hover:text-gray-800",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    href: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-6 w-6" />,
    href: "https://twitter.com/yourusername",
    color: "hover:text-blue-400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="relative"
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <Image
                src="/images/african-8790736_1280.webp"
                alt="Profile Picture"
                fill
                className="relative rounded-full shadow-lg border-4 border-white 
                  group-hover:scale-105 transition-transform duration-300 object-cover"
                priority
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <ExternalLink className="h-6 w-6 text-purple-600" />
              </motion.div>
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 mb-6"
              >
                I'm a software developer with a passion for creating elegant,
                efficient, and user-friendly applications. With over 5 years of
                experience in full-stack development, I specialize in
                JavaScript, React, Node.js, and Python.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 mb-8"
              >
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through tech blogs and community meetups.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center space-x-6"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transform transition-all duration-300 ${link.color}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
