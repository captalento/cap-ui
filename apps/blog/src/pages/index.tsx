import {Button, Text, Heading , DSProvider} from '@captalento/design-system';

export default function Blog() {
  return (
    <DSProvider>
      <section>
        <Heading>Blog</Heading>
        <Text>Todos as descrições das pessoas são sobre a humanidade do atendimento.</Text>
      </section>
    </DSProvider>
  );
}
