import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ end, suffix = '', label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-primary-800 dark:text-primary-400">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm text-text-secondary dark:text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
}
