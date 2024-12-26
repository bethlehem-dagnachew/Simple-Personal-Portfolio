"use client";

import { Code, Server, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code className="h-12 w-12 text-purple-600" />,
    title: "Web Development",
    description:
      "Creating responsive and performant web applications using modern frameworks and best practices.",
  },
  {
    icon: <Server className="h-12 w-12 text-purple-600" />,
    title: "Backend Development",
    description:
      "Building robust and scalable server-side applications and APIs to power your digital solutions.",
  },
  {
    icon: <Smartphone className="h-12 w-12 text-purple-600" />,
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications that provide seamless user experiences.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
