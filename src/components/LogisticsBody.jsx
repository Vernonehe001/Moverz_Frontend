import React from 'react'
import "./LogisticsBody.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Contract from "../asset/contract.jpg"
import Transport from "../asset/transport.jpg"
import Contract2 from "../asset/contract1.jpg"
import Shippment from "../asset/shipment1.jpg"
import Shippment2 from "../asset/shipment.jpg"
import Warehouse from "../asset/warehouse.jpg"
import Warehouse2 from "../asset/warehouse1.jpg"

const LogisticsBody = () => {
  return (
    <Container className='logistics_container'>
        <h2 className='logistics_heading'>
            Logistics Solutions
        </h2>
        <Row className='logisitics_subcontainer'>
            <Col className='left_container'>
                <Row>
                    <div className='container_image'>
                        <img
                        src={Transport}
                        className="picture-cotainer"
                        />
                    </div>
                    <div className='container_headings'>
                        <h3 className='container_heading'>
                            Warehouse Solutions
                        </h3>
                        <p className='container_body'>
                            Warehouse for Small,Medium & Big Businesses<br/>
                            Warehouse for Enterprises
                        </p>
                    </div>
                </Row>

                
            </Col>

            <Col className='middle_container'>
                <Row>
                    <div className='container_image'>
                        <img
                        src={Shippment}
                        className="picture-cotainer"
                        />
                    </div>
                    <div className='container_headings'>
                        <h3 className='container_heading'>
                            Transport & Distribution
                        </h3>
                        <p className='container_body'>
                            Transportation Management for Small,Medium & Big Businesses<br/>
                            Transporting Management for Enterprise
                        </p>
                    </div>
                </Row>
            </Col>

            <Col className='right_container'>
            <Row>
                    <div className='container_image'>
                        <img
                        src={Contract}
                        className="picture-cotainer"
                        />
                    </div>
                    <div className='container_headings'>
                        <h3 className='container_heading'>
                            Contract Logistics
                        </h3>
                        <p className='container_body'>
                            Find Out More About Contract Logistics<br/>
    
                        </p>
                    </div>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default LogisticsBody