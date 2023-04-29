import { Text, Heading , DSProvider} from '@captalento/design-system';
import { getPosts } from '../datalayer'
import Card from '../components/Card';

export default function Blog({ posts }: any) {
  return (
    <section>
      <Heading>Blog</Heading>
      <Text>Todos as descrições das pessoas são sobre a humanidade do atendimento.</Text>
      {posts.map((post: any) => (
        <Card key={post.sys.id} fields={post.fields} />
      ))}
    </section>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}