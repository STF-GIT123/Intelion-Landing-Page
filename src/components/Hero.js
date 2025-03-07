import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container fluid className="text-center bg-light py-5">
      <h2 className="display-4">Welcome to Intelion</h2>
      <p className="lead">Your partner in financial solutions.</p>
      <Button variant="primary" size="lg">Get Started</Button>
    </Container>
  );
};

export default Hero;