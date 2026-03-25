'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, Container, Grid } from '@/components/ui';
import { PERSONAL_INFO, SERVICES } from '@/lib/data/portfolio';
import { FiCheckCircle } from 'react-icons/fi';

export const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const highlights = [
    'Software Engineering undergraduate (SLIIT)',
    'Experience in full-stack development (PHP, Java, Node.js, JavaScript)',
    'Strong knowledge of databases including MySQL and MongoDB',
    'Practical project experience in web and mobile application development',
    'Focus on clean code, scalability, and performance',
    'Continuous learner with a passion for modern technologies and cybersecurity',
  ];

  return (
    <Section id="about">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-blue-600 rounded-full" />
              <span className="text-accent font-semibold uppercase tracking-widest text-sm">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Building Tomorrow's Digital Infrastructure
            </h2>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                {PERSONAL_INFO.description}
              </p>

              <div className="space-y-4 pt-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FiCheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-text-secondary">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image - With attractive frame */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent via-blue-500 to-accent opacity-40 blur-lg" />
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-accent/60 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <Image
                  src="/Kalana.png"
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">My Expertise</h3>
              <p className="text-text-secondary">What I can do for you</p>
            </div>

            <Grid cols={2}>
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="glass p-6 rounded-xl hover:border-accent/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-2">{service.title}</h4>
                  <p className="text-sm text-text-tertiary">{service.description}</p>
                </motion.div>
              ))}
            </Grid>
          </motion.div>


        </motion.div>
      </Container>
    </Section>
  );
};
