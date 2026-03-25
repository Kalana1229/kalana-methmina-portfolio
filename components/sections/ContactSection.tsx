'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Input, Textarea, Button, Flex } from '@/components/ui';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/data/portfolio';
import { isValidEmail } from '@/lib/utils';
import { FiMail, FiPhone, FiMapPin, FiCheck, FiAlertCircle } from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real application, you would send this to your backend
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Log the data (in production, send to backend)
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please try again or contact me directly.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: PERSONAL_INFO.email, href: SOCIAL_LINKS.email },
    { icon: FiPhone, label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
    { icon: FiMapPin, label: 'Location', value: PERSONAL_INFO.location, href: '#' },
  ];

  return (
    <Section id="contact">
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
              <span className="text-accent font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Let's Work Together
            </h2>
            <p className="text-text-secondary max-w-2xl">
              Have a project in mind? Want to discuss opportunities? Feel free to reach out. I'm always interested in hearing about new ideas.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
              <motion.a
                key={index}
                href={href}
                className="glass p-6 rounded-xl hover:border-accent/50 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">{label}</p>
                    <p className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 md:p-12 rounded-2xl max-w-2xl mx-auto w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Your Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="John Doe"
                  required
                />
                <Input
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Subject */}
              <Input
                label="Subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="Project inquiry"
                required
              />

              {/* Message */}
              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="Tell me about your project..."
                required
              />

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/50 border border-green-700/50 rounded-lg flex items-center gap-3"
                >
                  <FiCheck className="w-5 h-5 text-green-400" />
                  <p className="text-green-200">{submitMessage}</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900/50 border border-red-700/50 rounded-lg flex items-center gap-3"
                >
                  <FiAlertCircle className="w-5 h-5 text-red-400" />
                  <p className="text-red-200">{submitMessage}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                isLoading={isSubmitting}
                className="w-full"
              >
                Send Message
              </Button>

              <p className="text-xs text-text-tertiary text-center">
                Or reach out directly at{' '}
                <a href={SOCIAL_LINKS.email} className="text-accent hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </p>
            </form>
          </motion.div>

          {/* Social Links CTA */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-xl text-center"
          >
            <h3 className="text-xl font-bold text-text-primary mb-4">Connect on Social Media</h3>
            <Flex gap="md" justify="center" className="flex-wrap">
              {[
                { label: 'GitHub', href: SOCIAL_LINKS.github },
                { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
                { label: 'Twitter', href: SOCIAL_LINKS.twitter },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-accent hover:text-slate-900 transition-colors duration-200 font-semibold text-sm"
                >
                  {label}
                </a>
              ))}
            </Flex>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
