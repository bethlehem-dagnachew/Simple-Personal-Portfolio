"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/images/images.png",
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A React Native mobile app for efficient task and project management.",
    image: "/images/download.png",
    link: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard built with D3.js and React for data analysis.",
    image: "/images/download.jpeg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={project.link}
                    className="text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center"
                  >
                    View Project
                    <motion.span
                      className="ml-1"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
