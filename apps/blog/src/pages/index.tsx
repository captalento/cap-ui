import { Heading, sprinkles,} from '@captalento/design-system';
import { getPosts } from '../datalayer'
import Card from '../components/Card';

import * as styles  from '../styles/styles.css'

export default function Blog({ posts }: any) {
  return (
    <section className={styles.sectionClass}>

      <Heading size='md' color='primary' className={sprinkles({
        marginTop: 'largest',
        marginBottom: 'large',
        paddingX: 'medium' 
      })}>Blog</Heading>      
      <section className={styles.cardsClass}>
        {posts.map((post: any) => (
          <Card key={post.sys.id} fields={post.fields} />
        ))}
      </section>
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