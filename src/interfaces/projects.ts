export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
}

export interface FeaturedProject {
  name: string;
  description: string;
  url: string;
  githubUrl: string;
  technologies: string[];
}
