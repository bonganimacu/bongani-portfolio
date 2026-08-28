import { SectionWrapper } from '@/components/SectionWrapper';
import { EducationCard } from '@/components/EducationCard';

export function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            Education
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-white mt-2 mb-4">
            Academic Background
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <EducationCard
            institution="Tshwane University of Technology"
            degree="Diploma in Multimedia Computing"
            year="2024"
            level="NQF Level 6"
            credits="360 Credits"
            areas={[
              'Programming',
              'Object-Oriented Programming',
              'Web Computing',
              'Database Principles',
              'Mobile Computing',
              'Multimedia Applications',
              '3D Modelling',
              '3D Animation',
              'Game Programming',
              'Interactive Virtual Environments',
              'Motion Graphics',
              'Visual Effects',
            ]}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
