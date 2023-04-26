import { Text, Heading, DSProvider, Card } from '@captalento/design-system';

export default function Home() {
  return (
    <DSProvider>
      <section>
        <Heading>Captalento</Heading>
        <Text>Conteudo sobre Programação!</Text>
        <Text>Design Pattern</Text>
        <Text>DDD</Text>
        <Card>Youtube</Card>
        <Card>Instagram</Card>
        <Card>Blog</Card>
      </section>
    </DSProvider>
  );
}
