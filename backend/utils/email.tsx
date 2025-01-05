import React from 'react';
import { Html, Head, Body, Container, Heading, Text } from '@react-email/components';

const WelcomeEmail = ({ name }: { name: string }) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'Arial, sans-serif' }}>
      <Container>
        <Heading>Welcome to Our Service</Heading>
        <Text>Hello {name},</Text>
        <Text>Thank you for signing up!</Text>
        <Text>Best regards,</Text>
        <Text>The Team</Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;
