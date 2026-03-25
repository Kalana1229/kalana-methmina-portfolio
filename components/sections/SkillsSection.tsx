'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Badge, Flex } from '@/components/ui';
import { SKILLS } from '@/lib/data/portfolio';
import {
  SiReact,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiC,
  SiSpringboot,
  SiExpress,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiRedis,
  SiAmazonaws,
  SiGit,
  SiPostman,
  SiFigma,
  SiAdobephotoshop,
  SiSelenium,
  SiJunit5,
  SiScikitlearn,
  SiKeras,
  SiTensorflow,
  SiCodeigniter,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

type SkillCategory = 'Frontend' | 'Backend' | 'Tools' | 'Cybersecurity' | 'DevOps';

const CATEGORIES: SkillCategory[] = ['Frontend', 'Backend', 'Tools', 'Cybersecurity', 'DevOps'];

const getSkillIcon = (skillName: string) => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'ReactJS': SiReact,
    'Flutter': SiFlutter,
    'HTML5': SiHtml5,
    'CSS3': SiCss3,
    'JavaScript (ES6+)': SiJavascript,
    'TypeScript': SiTypescript,
    'Node.js': SiNodedotjs,
    'Java': FaJava,
    'Python': SiPython,
    'C': SiC,
    'Spring Boot': SiSpringboot,
    'Express.js': SiExpress,
    'PHP CodeIgniter': SiCodeigniter,
    'GraphQL': SiGraphql,
    'MySQL': SiMysql,
    'PostgreSQL': SiPostgresql,
    'MongoDB': SiMongodb,
    'MSSQL': SiMicrosoftsqlserver,
    'Redis': SiRedis,
    'AWS': SiAmazonaws,
    'Git': SiGit,
    'Postman': SiPostman,
    'Figma': SiFigma,
    'Photoshop': SiAdobephotoshop,
    'Atmel Studio': SiC, // Using C icon as fallback
    'Selenium': SiSelenium,
    'RestAssured': SiPostman, // Using Postman icon as fallback
    'JUnit': SiJunit5,
    'scikit-learn': SiScikitlearn,
    'Keras': SiKeras,
    'TensorFlow': SiTensorflow,
  };

  const IconComponent = iconMap[skillName];
  return IconComponent ? <IconComponent className="w-8 h-8" /> : <SiC className="w-8 h-8" />;
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('Frontend');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = SKILLS.filter((skill) => 
    skill.category === selectedCategory && 
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const proficiencyColors = {
    Beginner: 'bg-blue-500/20 text-blue-200 border-blue-600/50',
    Intermediate: 'bg-purple-500/20 text-purple-200 border-purple-600/50',
    Advanced: 'bg-orange-500/20 text-orange-200 border-orange-600/50',
    Expert: 'bg-green-500/20 text-green-200 border-green-600/50',
  };

  const proficiencyPercentage = {
    Beginner: 30,
    Intermediate: 60,
    Advanced: 80,
    Expert: 100,
  };

  return (
    <Section id="skills">
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
              <span className="text-accent font-semibold uppercase tracking-widest text-sm">Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Technologies & Tools
            </h2>
            <p className="text-text-secondary max-w-2xl">
              A comprehensive overview of the technologies and tools I've mastered throughout my career
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants}>
            <Flex gap="md" className="flex-wrap">
              {CATEGORIES.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-accent text-slate-900 shadow-lg shadow-accent/50'
                      : 'bg-slate-800 text-text-secondary hover:bg-slate-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </Flex>
          </motion.div>

          {/* Search Input */}
          <motion.div variants={itemVariants}>
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${selectedCategory}`}
                layout
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass p-6 rounded-xl group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <Flex justify="between" align="center" className="mb-4">
                  <Flex align="center" gap="sm">
                    <div className="text-accent group-hover:text-accent transition-colors">
                      {getSkillIcon(skill.name)}
                    </div>
                    <h4 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                      {skill.name}
                    </h4>
                  </Flex>
                  <Badge
                    variant="info"
                    size="sm"
                    className={`${proficiencyColors[skill.proficiency]} border`}
                  >
                    {skill.proficiency}
                  </Badge>
                </Flex>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${proficiencyPercentage[skill.proficiency]}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="text-xs text-text-tertiary text-right">
                    {proficiencyPercentage[skill.proficiency]}% Proficiency
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Count */}
          <motion.div
            variants={itemVariants}
            className="glass p-6 rounded-xl text-center"
          >
            <p className="text-text-secondary">
              Showing <span className="font-bold text-accent">{filteredSkills.length}</span> skills in{' '}
              <span className="font-bold text-accent">{selectedCategory}</span>{' '}
              {searchTerm && (
                <>matching "<span className="font-bold text-accent">{searchTerm}</span>"</>
              )} •{' '}
              <span className="font-bold text-accent">{SKILLS.length}</span> total skills
            </p>
          </motion.div>

          {/* Skill Categories Overview */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary">Skill Distribution</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CATEGORIES.map((category) => {
                const categorySkills = SKILLS.filter((s) => s.category === category);
                return (
                  <motion.div
                    key={category}
                    className="glass p-6 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Flex justify="between" align="center" className="mb-3">
                      <span className="font-semibold text-text-primary">{category}</span>
                      <Badge variant="info" size="sm">
                        {categorySkills.length} skills
                      </Badge>
                    </Flex>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-blue-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(categorySkills.length / SKILLS.length) * 100}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
