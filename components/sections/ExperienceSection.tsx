'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Badge } from '@/components/ui';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '@/lib/data/portfolio';
import { formatDate, calculateDuration } from '@/lib/utils';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';

export const ExperienceSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Calculate total experience duration in years
  const calculateTotalExperience = () => {
    const totalMonths = EXPERIENCE.reduce((total, exp) => {
      const start = new Date(exp.startDate);
      const end = exp.endDate ? new Date(exp.endDate) : new Date();
      const diffMs = end.getTime() - start.getTime();
      const months = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30));
      return total + months;
    }, 0);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
      return `${months}m`;
    }

    if (months === 0) {
      return `${years}y`;
    }

    return `${years}y ${months}m`;
  };

  return (
    <Section id="experience">
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
              <span className="text-accent font-semibold uppercase tracking-widest text-sm">Career</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Experience & Education
            </h2>
            <p className="text-text-secondary max-w-2xl">
              My professional journey and continuous learning path
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <FiBriefcase className="text-accent" />
              Professional Experience
            </h3>

            <div className="space-y-6">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="glass p-6 rounded-xl hover:border-accent/50 transition-all duration-300 relative pl-8"
                  whileHover={{ x: 10 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-4 h-4 bg-accent rounded-full border-4 border-slate-900 -ml-2" />

                  {/* Timeline line */}
                  {index < EXPERIENCE.length - 1 && (
                    <div className="absolute left-[7px] top-14 w-0.5 h-24 bg-gradient-to-b from-accent to-transparent -ml-1" />
                  )}

                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-text-primary">{exp.position}</h4>
                        <p className="text-accent font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right whitespace-nowrap">
                        <p className="text-sm font-semibold text-text-secondary">
                          {formatDate(exp.startDate, 'short')} {' - '}
                          {exp.current ? (
                            <Badge variant="success" size="sm" className="inline-block">
                              Present
                            </Badge>
                          ) : (
                            formatDate(exp.endDate!, 'short')
                          )}
                        </p>
                        <p className="text-xs text-text-tertiary">
                          {calculateDuration(exp.startDate, exp.endDate)}
                        </p>
                      </div>
                    </div>

                    <p className="text-text-secondary">{exp.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="info" size="sm" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="space-y-8 pt-8 border-t border-slate-800">
            <h3 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <FiBookOpen className="text-accent" />
              Education
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EDUCATION.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="glass p-6 rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">{edu.degree}</h4>
                      <p className="text-accent font-semibold">{edu.institution}</p>
                      <p className="text-sm text-text-secondary">{edu.field}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-tertiary">
                        {formatDate(edu.startDate, 'short')} – {formatDate(edu.endDate, 'short')}
                      </span>
                      {edu.gpa && (
                        <Badge variant="success" size="sm">
                          GPA: {edu.gpa}
                        </Badge>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Summary Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-8">
            {[
              {
                label: 'Years Experience',
                value: calculateTotalExperience(),
              },
              {
                label: 'Companies',
                value: new Set(EXPERIENCE.map((e) => e.company)).size,
              },
              {
                label: 'Certifications',
                value: CERTIFICATIONS.length,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass p-4 rounded-xl text-center hover:border-accent/50 transition-all"
                whileHover={{ y: -3 }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-xs text-text-tertiary mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
