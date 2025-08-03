"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section id="hero" className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-dark dark:text-light"
          >
            Abreham Wondimu Shiferaw
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg md:text-2xl font-semibold text-primary dark:text-primaryDark"
          >
            Empowering Ideas Through Code
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400"
          >
            A senior software engineer with over 7 years of experience in building beautiful, functional, and scalable web and mobile applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a href="/Abreham-Wondimu-Resume.pdf" download>
              <Button variant="primary" className="w-full sm:w-auto">
                Download Resume
              </Button>
            </a>
            <Link href="#contact">
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
