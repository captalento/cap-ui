import { Text, Heading, DSProvider, Card, Button } from '@captalento/design-system';
import { useTheme } from '../hooks/useTheme'
export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <DSProvider theme={theme}>
      <section>
        <Heading>Captalento</Heading>
        <Text>Conteudo sobre Programação!</Text>
        <Button onClick={toggleTheme}>Click</Button>
      </section>
    </DSProvider>
  );
}
