import React from 'react';
import { Html, Head, Body, Container, Heading, Text } from '@react-email/components';

const WelcomeEmail = ({ name }: { name: string }) => (
  <Html>
    <Head />
    <Body
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#2D033B',
        color: '#FFFFFF',
        margin: 0,
        padding: 0,
      }}
    >
      <Container
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#3E1E68',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Heading
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#F4A261',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Welcome to Aurora Hackathon!
        </Heading>
        <Text
          style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '20px',
            color: '#FFFFFF',
          }}
        >
          Hello {name},
        </Text>
        <Text
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '20px',
            color: '#D3D3D3',
          }}
        >
          We are thrilled to have you join us for this exciting journey at the Aurora Hackathon. Gear up for a unique experience filled with innovation, creativity, and collaboration.
        </Text>
        <Text
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '20px',
            color: '#D3D3D3',
          }}
        >
          Let's push the boundaries of technology and make incredible ideas come to life!
        </Text>
        <Text
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            textAlign: 'center',
            color: '#F4A261',
          }}
        >
          We can't wait to see what you create. 🚀
        </Text>
        <Text
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            marginTop: '20px',
            color: '#D3D3D3',
            textAlign: 'center',
          }}
        >
          Best regards,  
          <br />  
          The Aurora Hackathon Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;
