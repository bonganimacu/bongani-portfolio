import { useState, useEffect } from 'react';
import type { GitHubRepo } from '@/types';
import { GITHUB_USERNAME } from '@/data/config';

interface UseGitHubReturn {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

export function useGitHub(): UseGitHubReturn {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (response.status === 403) {
          throw new Error('GitHub API rate limit exceeded. Please try again later.');
        }

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }

        const data = await response.json();

        const formattedRepos: GitHubRepo[] = data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          stars: repo.stargazers_count,
          url: repo.html_url,
        }));

        setRepos(formattedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'GitHub data unavailable');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
}
