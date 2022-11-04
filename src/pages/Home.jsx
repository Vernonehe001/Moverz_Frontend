import React from 'react'
import Container from 'react-bootstrap/Container'
import "./Home.css"
import SearchForm from '../components/SearchForm'
import Banner from '../components/Banner'
import SubGroup from '../components/SubGroup'
import LogisticsBody from '../components/LogisticsBody'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <Container>
      <Banner />
      <SearchForm />  
      <SubGroup />  
      <LogisticsBody  />  
      <Footer />
    </Container>
  )
}

export default Home;