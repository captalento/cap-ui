import { Text, Heading, DSProvider, Card, Button } from '@captalento/design-system';
import { useTheme } from '../hooks/useTheme'
export default function Home() {
  const { theme, toggleTheme} = useTheme()
  return (
    <DSProvider theme={theme}>
      <section>
        <Heading>Captalento</Heading>
        <Text>Conteudo sobre Programação!</Text>
        <Text>Design Pattern</Text>
        <Text>DDD</Text>
        <Card>Youtube</Card>
        <Card>Instagram</Card>
        <Card>Blog</Card>
        <Button onClick={toggleTheme}>Click</Button>
      </section>
    </DSProvider>
  );
}
