'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Container, Badge, Button } from '@/components/ui';
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/data/portfolio';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

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

  const categoryColors: Record<string, string> = {
    frontend: 'bg-blue-500/20 text-blue-200 border-blue-600/50',
    backend: 'bg-purple-500/20 text-purple-200 border-purple-600/50',
    fullstack: 'bg-green-500/20 text-green-200 border-green-600/50',
    security: 'bg-red-500/20 text-red-200 border-red-600/50',
    devops: 'bg-yellow-500/20 text-yellow-200 border-yellow-600/50',
    'ai-ml': 'bg-pink-500/20 text-pink-200 border-pink-600/50',
  };

  return (
    <Section id="projects">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-blue-600 rounded-full" />
              <span className="text-accent font-semibold uppercase tracking-widest text-sm">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Featured Projects
            </h2>
            <p className="text-text-secondary max-w-2xl">
              Showcase of my recent work spanning full-stack development, cybersecurity, and infrastructure
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {PROJECT_CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-accent text-slate-900 shadow-lg shadow-accent/50'
                    : 'bg-slate-800 text-text-secondary hover:bg-slate-700 hover:text-text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="glass rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden bg-slate-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                        <div className="space-y-2 w-full">
                          {project.github && (
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Button
                                size="sm"
                                variant="primary"
                                className="w-full flex items-center justify-center gap-2 text-sm py-2"
                              >
                                <FiGithub size={16} />
                                View Code
                              </Button>
                            </Link>
                          )}
                          {project.live && (
                            <Link href={project.live} target="_blank" rel="noopener noreferrer">
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full flex items-center justify-center gap-2 text-sm py-2"
                              >
                                <FiExternalLink size={16} />
                                Live Demo
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="success" size="sm">
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          size="sm"
                          className={`${categoryColors[project.category]} border capitalize`}
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-tertiary text-sm mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="default" size="sm" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="default" size="sm" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-slate-700/50 flex gap-2">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <motion.button
                            className="p-2 rounded-lg bg-slate-700/50 hover:bg-accent hover:text-slate-900 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiGithub size={18} />
                          </motion.button>
                        </Link>
                      )}
                      {project.live && (
                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                          <motion.button
                            className="p-2 rounded-lg bg-slate-700/50 hover:bg-accent hover:text-slate-900 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiExternalLink size={18} />
                          </motion.button>
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <p className="text-text-secondary">No projects found in this category.</p>
            </motion.div>
          )}

          {/* View All CTA */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <p className="text-text-secondary mb-4">
              Showing {filteredProjects.length} of {PROJECTS.length} projects
            </p>
            <p className="text-sm text-text-tertiary">
              More projects available on{' '}
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-semibold"
              >
                GitHub
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
