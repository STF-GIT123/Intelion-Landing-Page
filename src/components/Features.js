import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
  return (
    <Container id="features" className="py-5">
      <h2 className="text-center">Features</h2>
      <Row className="mt-4">
        <Col md={6} lg={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Secure Transactions</Card.Title>
              <Card.Text>We ensure top-notch security.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>AI-Powered Solutions</Card.Title>
              <Card.Text>Intelligent decision-making tools.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>24/7 Support</Card.Title>
              <Card.Text>We're here to help anytime.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;