import React from 'react'
import Container from './Grid/Container'
import Row from './Grid/Row'
import Col from './Grid/Col'

const Navbar: React.FC = (props): JSX.Element => {
  return (
    <Container>
      <Row>
        <Col>
          <div className='navbar'></div>
        </Col>
      </Row>
    </Container>

  )
}

export default Navbar
