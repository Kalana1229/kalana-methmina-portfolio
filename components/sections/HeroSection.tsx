'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Container, Flex } from '@/components/ui';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/data/portfolio';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

const words = ['Secure', 'Innovative', 'Scalable', 'Elegant'];

export const HeroSection: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 w-fit"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-text-secondary">Available for freelance work</span>
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-text-primary">Hi, I'm</span>
                <motion.span
                  className="block bg-gradient-to-r from-accent via-blue-400 to-blue-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {PERSONAL_INFO.name}
                </motion.span>
              </motion.h1>

              {/* Dynamic typing effect */}
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-semibold text-text-secondary">
                  A{' '}
                </span>
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent"
                >
                  {words[currentWord]}
                </motion.span>
                <span className="text-2xl md:text-3xl font-semibold text-text-secondary">
                  Developer
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg text-text-secondary max-w-lg">
              {PERSONAL_INFO.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="#projects">
                <Button size="lg" className="group">
                  View My Work
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <a href={SOCIAL_LINKS.cv} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <FiDownload />
                  Download CV
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              <span className="text-text-tertiary text-sm">Connect with me:</span>
              <Flex gap="md">
                {[
                  { icon: FiGithub, href: SOCIAL_LINKS.github, label: 'GitHub' },
                  { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-accent hover:text-slate-900 flex items-center justify-center transition-colors duration-200"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </Flex>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            variants={itemVariants}
            className="relative h-full flex items-center justify-center"
          >
            <motion.div
              className="relative w-72 h-96 md:w-96 md:h-[500px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Avatar Container - Image only */}
              <div className="relative h-full overflow-hidden">
                <Image
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  fill
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-text-tertiary">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-accent rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
