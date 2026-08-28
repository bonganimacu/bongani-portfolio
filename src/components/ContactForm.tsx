import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission - replace with Formspree or similar service
    // Example: action="https://formspree.io/f/YOUR_FORM_ID"
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 lg:p-8"
    >
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary dark:text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-light-border dark:border-dark-border text-text-primary dark:text-white placeholder:text-text-muted dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary dark:text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-light-border dark:border-dark-border text-text-primary dark:text-white placeholder:text-text-muted dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium text-text-primary dark:text-white mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-light-border dark:border-dark-border text-text-primary dark:text-white placeholder:text-text-muted dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="What is this about?"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-text-primary dark:text-white mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-light-border dark:border-dark-border text-text-primary dark:text-white placeholder:text-text-muted dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell me about the opportunity..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary-800 text-white font-medium hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle className="w-4 h-4" />
            Message Sent!
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          Something went wrong. Please try again.
        </div>
      )}

      <p className="mt-4 text-xs text-text-muted dark:text-gray-500">
        Note: This form is currently frontend-only. To make it functional, connect to Formspree, EmailJS, or a backend service.
      </p>
    </motion.form>
  );
}
