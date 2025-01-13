import React from 'react';
import { Html, Head, Body, Container, Heading, Text } from '@react-email/components';

const WelcomeEmail = ({ name }: { name: string }) => (
  <Html>
    <Head />
    <Body style={{ backgroundColor: '#f3f4f6', fontFamily: 'Arial, sans-serif' }}>
      <Container
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Heading
          style={{
            fontSize: '24px',
            color: '#2563eb',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Welcome to Aurora Hackathon 2025!
        </Heading>
        <Text
          style={{
            fontSize: '16px',
            color: '#374151',
            lineHeight: '1.5',
            marginBottom: '16px',
          }}
        >
          Hello <span style={{ fontWeight: 'bold' }}>{name}</span>,
        </Text>
        <Text
          style={{
            fontSize: '16px',
            color: '#374151',
            lineHeight: '1.5',
            marginBottom: '16px',
          }}
        >
          Thank you for registering for Aurora Hackathon 2025! We're thrilled to have you join us in shaping the future of technology. This year’s event promises an exciting journey of creativity, innovation, and collaboration.
        </Text>
        <Text
          style={{
            fontSize: '16px',
            color: '#374151',
            lineHeight: '1.5',
            marginBottom: '16px',
          }}
        >
          Get ready to code, create, and compete with the best minds. Let’s make this an event to remember!
        </Text>
        <Text
          style={{
            fontSize: '16px',
            color: '#374151',
            lineHeight: '1.5',
            marginBottom: '24px',
          }}
        >
          Keep an eye on your inbox for more details and updates about the event. If you have any questions, feel free to reach out to us at{' '}
          <a
            href="mailto:support@aurorahackathon.com"
            style={{ color: '#2563eb', textDecoration: 'underline' }}
          >
            support@aurorahackathon.com
          </a>.
        </Text>
        <Text
          style={{
            fontSize: '16px',
            color: '#111827',
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '16px',
          }}
        >
          Let’s innovate together,<br />The Aurora Hackathon Team 🚀
        </Text>
        <Text
          style={{
            fontSize: '14px',
            color: '#6b7280',
            textAlign: 'center',
            marginTop: '32px',
          }}
        >
          © 2025 Aurora Hackathon. All rights reserved.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;
