"use client";

import { motion } from "framer-motion";
import {
  // Frontend

  FileJson,
  Blocks,
  Layout,
  Smartphone,
  PenTool,
  // Backend
  Server,
  Database,
  Globe,
  Code2,
  Cpu,
  Network,
  Cloud,
  Lock,
  // Tools
  Github,
  GitBranch,
  Terminal,
  Figma,
  Box,
  TestTube,
  Wrench,
  Settings,
  Monitor,
  Bug,
} from "lucide-react";

export const techStacks = {
  "Frontend Development": [
    { name: "JavaScript", icon: <FileJson className="h-6 w-6" /> },
    { name: "React.js", icon: <Blocks className="h-6 w-6" /> },
    { name: "Next.js", icon: <Layout className="h-6 w-6" /> },
    { name: "TypeScript", icon: <Code2 className="h-6 w-6" /> },
    { name: "React Native", icon: <Smartphone className="h-6 w-6" /> },
    { name: "Tailwind CSS", icon: <PenTool className="h-6 w-6" /> },
    { name: "Redux", icon: <Settings className="h-6 w-6" /> },
  ],
  "Backend Development": [
    { name: "Node.js", icon: <Server className="h-6 w-6" /> },
    { name: "Express.js", icon: <Network className="h-6 w-6" /> },
    { name: "MongoDB", icon: <Database className="h-6 w-6" /> },
    { name: "PostgreSQL", icon: <Database className="h-6 w-6" /> },
    { name: "REST APIs", icon: <Globe className="h-6 w-6" /> },
    { name: "GraphQL", icon: <Cpu className="h-6 w-6" /> },
    { name: "AWS", icon: <Cloud className="h-6 w-6" /> },
    { name: "Security", icon: <Lock className="h-6 w-6" /> },
  ],
  "Development Tools": [
    { name: "Git", icon: <GitBranch className="h-6 w-6" /> },
    { name: "GitHub", icon: <Github className="h-6 w-6" /> },
    { name: "VS Code", icon: <Monitor className="h-6 w-6" /> },
    { name: "Terminal", icon: <Terminal className="h-6 w-6" /> },
    { name: "Figma", icon: <Figma className="h-6 w-6" /> },
    { name: "Docker", icon: <Box className="h-6 w-6" /> },
    { name: "Testing", icon: <TestTube className="h-6 w-6" /> },
    { name: "Debugging", icon: <Bug className="h-6 w-6" /> },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical expertise and tools I work
            with
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {Object.entries(techStacks).map(
            ([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                variants={categoryVariants}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                <motion.h3
                  className="text-xl font-semibold mb-6 text-purple-600 border-b pb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {category}
                </motion.h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                      }}
                      className="flex items-center p-2 rounded-lg transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + categoryIndex * 0.2,
                      }}
                    >
                      <motion.div
                        className="text-purple-600 mr-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-gray-700 font-medium text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Continuously learning and exploring new technologies to stay at the
            forefront of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
