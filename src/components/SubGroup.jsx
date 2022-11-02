import React from 'react';
import "./SubGroup.css";
import Container from "react-bootstrap/Container"
import { AiFillSwitcher } from "react-icons/ai";
import { SlPlane } from "react-icons/sl";
import { RiShip2Line } from "react-icons/ri";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTruck } from "react-icons/fa";

const SubGroup = () => {
  return (
    <Container fluid className='subgroup_container'>
        <h2 className='container_title'>
            Shipping Services
        </h2>
        <Row className='subgroup_sub'>
            <Col className='left_subgroup'>
                <div className='left_icon_container'>
                    <AiFillSwitcher
                    size={70}
                    className='left_icon'
                    />
                </div>
                <div className='left_icon_title'>
                    <h6 className='left_htitle'>
                        Documents & Parcel
                    </h6>
                    <p>
                        Domestic and International
                    </p>
                </div>
            </Col>

            <Col className='middle_subgroup'>
                <div className='middle_sub'>
                    <div className='middle_icon_container'>
                        <SlPlane    
                        size={70}
                        className="middle_icon"
                        />
                        <div className="left_icon_title">
                            <h6 className='left_htitle'>Air Freight</h6>
                            <p>
                                Internation & Same Day
                            </p>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='right_subgroup'>
                <div className='right_sub'>
                    <div className='right_icon_container'>
                        <RiShip2Line
                        size={70}
                        className="right_icon"
                        />
                    </div>
                    <div className="left_icon_title">
                        <h6 className='left_htitle'>Ocean Freight</h6>
                        <p>
                            International
                        </p>
                    </div>
                </div>
            </Col>

            <Col className='right_subgroup'>
                <div className='right_sub'>
                    <div className='right_icon_container'>
                        <FaTruck
                        size={70}
                        className="right_icon"
                        />
                    </div>
                    <div className="left_icon_title">
                        <h6 className='left_htitle'>Road Freight</h6>
                        <p>
                            International
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default SubGroup