import { useTheme } from '@/hooks/useTheme';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { AnalyticsProjects } from '@/sections/AnalyticsProjects';
import { GitHubRepos } from '@/sections/GitHubRepos';
import { Certification } from '@/sections/Certification';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-text-primary dark:text-white transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AnalyticsProjects />
        <GitHubRepos />
        <Certification />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
