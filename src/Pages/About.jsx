import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-cente mt-9 p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      <motion.p
        className="text-lg mb-4 max-w-2xl text-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Welcome to our company! We are committed to delivering the best products
        and services to our customers. Our team is dedicated to ensuring your
        satisfaction with every interaction.
      </motion.p>
      <motion.p
        className="text-lg mb-4 max-w-2xl text-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Our vision is to innovate and lead in the industry, setting new
        standards for quality and customer service. Thank you for being a part
        of our journey.
      </motion.p>
      <motion.div
        className="mt-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <motion.button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
}

export default About;
