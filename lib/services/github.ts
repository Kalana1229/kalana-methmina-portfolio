/**
 * GitHub API Service
 * Fetch repository data from GitHub
 */

import axios from 'axios';
import { GitHubRepository } from '@/lib/types';

type GitHubRepoResponse = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
};

const GITHUB_API = 'https://api.github.com';
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'yourusername';

export class GitHubService {
  /**
   * Fetch user repositories
   */
  static async getUserRepositories(): Promise<GitHubRepository[]> {
    try {
      const response = await axios.get(
        `${GITHUB_API}/users/${GITHUB_USERNAME}/repos`,
        {
          params: {
            sort: 'updated',
            direction: 'desc',
            per_page: 100,
            type: 'owner',
          },
          headers: {
            Accept: 'application/vnd.github.v3+json',
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
            }),
          },
        }
      );

      return response.data.map((repo: GitHubRepoResponse) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        topics: repo.topics || [],
      }));
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      return [];
    }
  }

  /**
   * Fetch specific repository
   */
  static async getRepository(repo: string): Promise<GitHubRepository | null> {
    try {
      const response = await axios.get(`${GITHUB_API}/repos/${GITHUB_USERNAME}/${repo}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
      });

      return {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description,
        url: response.data.html_url,
        homepage: response.data.homepage,
        language: response.data.language,
        stargazers_count: response.data.stargazers_count,
        forks_count: response.data.forks_count,
        topics: response.data.topics || [],
      };
    } catch (error) {
      console.error('Error fetching GitHub repository:', error);
      return null;
    }
  }

  /**
   * Fetch user stats
   */
  static async getUserStats() {
    try {
      const response = await axios.get(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
      });

      return {
        publicRepos: response.data.public_repos,
        followers: response.data.followers,
        following: response.data.following,
        gists: response.data.public_gists,
        avatar: response.data.avatar_url,
        bio: response.data.bio,
        location: response.data.location,
        blog: response.data.blog,
      };
    } catch (error) {
      console.error('Error fetching GitHub user stats:', error);
      return null;
    }
  }

  /**
   * Get repository by topic
   */
  static async getRepositoriesByTopic(topic: string): Promise<GitHubRepository[]> {
    try {
      const allRepos = await this.getUserRepositories();
      return allRepos.filter((repo) => repo.topics.includes(topic));
    } catch (error) {
      console.error('Error filtering repositories by topic:', error);
      return [];
    }
  }

  /**
   * Get featured repositories (with stars)
   */
  static async getFeaturedRepositories(limit: number = 6): Promise<GitHubRepository[]> {
    try {
      const repos = await this.getUserRepositories();
      return repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, limit);
    } catch (error) {
      console.error('Error fetching featured repositories:', error);
      return [];
    }
  }
}
