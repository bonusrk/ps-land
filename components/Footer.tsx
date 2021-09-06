import React from 'react'
import Container from './Grid/Container'
import Row from './Grid/Row'
import Col from './Grid/Col'

const Footer: React.FC = (): JSX.Element => (
  <footer>
    <Container>
      <Row>
        <Col>
          <div className="footer" />
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
