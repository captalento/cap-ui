import { client } from './client';

export const getPosts = async () => {
  const posts = await client.getEntries({content_type: 'post'})
  console.log({ posts })
  return posts.items;
}