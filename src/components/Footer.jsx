import React from 'react'
import "./Footer.css"
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Footer = () => {
  return (
    <Container className='footer_container'>
      <Row className="main_sub_container">
       <Col className='left_sub_container'>
        
       </Col>

       <Col className='middle_sub_container'>
      <h4> &copy;2018, Moverz Shipping Ltd</h4>
       </Col>

       <Col className='right_sub_container'>
        
       </Col>
      </Row>
    </Container>
  )
}

export default Footer