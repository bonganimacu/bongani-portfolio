import { SectionWrapper } from '@/components/SectionWrapper';
import { CertificationCard } from '@/components/CertificationCard';

export function Certification() {
  return (
    <SectionWrapper id="certification" className="bg-gray-50/50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            Certification
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-white mt-2 mb-4">
            Professional Credentials
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <CertificationCard
            title="Microsoft Certified: Azure AI Fundamentals"
            issuer="Microsoft"
            date="10 July 2026"
            credentialId="CB468F497C8C07FB"
            url="https://learn.microsoft.com/en-us/users/bonganimacu/credentials/cb468f497c8c07fb"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
