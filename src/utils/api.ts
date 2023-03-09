import axios from 'axios';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  thumb: string;
}

export async function getRepositories(): Promise<Repository[]> {
  if (!import.meta.env.VITE_REPO_API) {
    throw new Error('Repository data URL is not defined');
  }
  const repositories = (
    await axios.get<Repository[]>(import.meta.env.VITE_REPO_API, {
      headers: {
        Authorization: import.meta.env.VITE_DEV_TOKEN
          ? `Bearer ${import.meta.env.VITE_DEV_TOKEN as string}`
          : false,
      },
    })
  ).data;
  return repositories;
}
