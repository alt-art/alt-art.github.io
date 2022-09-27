import axios from 'axios'

export const getMetaImage = async (url: string): Promise<string> => {
  return (
    await axios.get(`https://gtihub-thumb.herokuapp.com/thumb?url=${url}`)
  ).data
}
