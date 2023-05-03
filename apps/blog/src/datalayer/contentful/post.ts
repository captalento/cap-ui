import { client } from './client';

export const getPosts = async () => {
  const posts = await client.getEntries({content_type: 'post'})
  return posts.items;
}