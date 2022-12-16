import axios from 'axios';

interface Repository {
  name: string
  description: string
  html_url: string
  thumb: string
}

export async function getRepositories(): Promise<Repository[]> {
  if (!import.meta.env.VITE_REPO_API) {
    throw new Error('Repository data URL is not defined');
  }
  const repositories: Repository[] = (
    await axios.get(import.meta.env.VITE_REPO_API)
  ).data;
  return repositories;
}
