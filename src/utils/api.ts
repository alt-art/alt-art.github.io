import axios from 'axios'
import { getMetaImage } from './scraping'

interface Repository {
  name: string
  description: string
  html_url: string
  metaImage: string
}

export async function getRepositories (): Promise<Repository[]> {
  const repositories: Repository[] = (
    await axios.get('https://api.github.com/users/alt-art/repos', {
      params: {
        sort: 'updated',
        type: 'owner'
      }
    })
  ).data
  const metaImagePromises = repositories.map(
    async (repo) => await getMetaImage(repo.html_url)
  )
  const metaImages = await Promise.all(metaImagePromises)
  const repositoriesWithImage = repositories.map((repo, index) => ({
    ...repo,
    metaImage: metaImages[index]
  }))
  return repositoriesWithImage
}
