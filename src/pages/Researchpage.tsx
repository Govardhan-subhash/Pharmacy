import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Assuming other pages use react-bootstrap

const ResearchPage: React.FC = () => {
  return (
    <Container>
      {/* Header */}
      <header>
        <Row>
          <Col>
            <h1>Research Page</h1>
          </Col>
        </Row>
      </header>

      {/* Research Articles Section */}
      <section>
        <Row>
          <Col>
            <h2>Research Articles</h2>
            {/* Add research articles here */}
          </Col>
        </Row>
      </section>

      {/* Footer */}
      <footer>
        <Row>
          <Col>
            <p>&copy; 2023 Pharmacy Research</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default ResearchPage;
