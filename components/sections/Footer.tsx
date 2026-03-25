'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/data/portfolio';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiExternalLink } from 'react-icons/fi';
import { Container, Flex } from '@/components/ui';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: FiGithub, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { icon: FiMail, href: SOCIAL_LINKS.email, label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const resources = [
    { label: 'Resume', href: SOCIAL_LINKS.cv },
    { label: 'GitHub', href: SOCIAL_LINKS.github },
    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 mt-20">
      <Container>
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
                  {PERSONAL_INFO.name.charAt(0)}
                </div>
                <span className="text-lg font-bold gradient-text">{PERSONAL_INFO.name.split(' ')[0]}</span>
              </div>
              <p className="text-text-tertiary text-sm leading-relaxed max-w-xs">
                {PERSONAL_INFO.description}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-text-primary font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-tertiary hover:text-accent transition-colors duration-200 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-text-primary font-semibold">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.href}>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-accent transition-colors duration-200 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {resource.label}
                      <FiExternalLink size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8" />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Copyright */}
            <p className="text-text-tertiary text-sm">
              © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>

            {/* Social Icons */}
            <Flex gap="md" justify="center" className="flex-wrap">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-accent hover:text-slate-900 flex items-center justify-center transition-colors duration-200"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </Flex>

            {/* Made with love */}
            <p className="text-text-tertiary text-xs">
              Made with <span className="text-red-400">❤️</span> by {PERSONAL_INFO.name}
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};
