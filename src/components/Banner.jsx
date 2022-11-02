import React from 'react'
import "./Banner.css"
import Container from 'react-bootstrap/esm/Container'
import banner from "../asset/banner4.jpg"

const Banner = () => {
  return (
    <Container className='banner_container'>
        
        <div className='banner_title'>
            <h2>The World's Most Leading Mineral Export</h2>
        </div>

        <div className='banner_picture_container'>
            <img
            fluid
            src={banner}
            className="banner_image"
            />
        </div>
    </Container>
  )
}

export default Banner