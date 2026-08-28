import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { StatCounter } from '@/components/StatCounter';
import { WeatherLocation } from './WeatherLocation';

export function About() {
  return (
    <SectionWrapper id="about" className="bg-gray-50/50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* About Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
                About Me
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-white mt-2 mb-6">
                Technology & Data Professional
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-text-secondary dark:text-gray-400 leading-relaxed"
            >
              <p>
                I am a technology and data professional with a Diploma in Multimedia Computing and 
                practical experience in data analytics, business intelligence, automation, cloud 
                technologies and software development.
              </p>
              <p>
                My technical experience includes Python, SQL, Microsoft Excel, Power BI, R, UiPath, 
                Automation Anywhere, AWS and Microsoft Azure.
              </p>
              <p>
                I enjoy solving business problems through data, automation and technology. I am 
                analytical, adaptable and solutions-focused, with strong initiative, communication 
                and teamwork abilities.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10"
            >
              <StatCounter end={14} suffix="+" label="Months Experience" />
              <StatCounter end={10} suffix="+" label="Technology Areas" />
              <StatCounter end={2024} label="Diploma Completed" />
              <StatCounter end={2026} label="Azure AI Certified" />
            </motion.div>
          </div>

          {/* Weather & Location Card */}
          <div className="lg:sticky lg:top-24">
            <WeatherLocation />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
