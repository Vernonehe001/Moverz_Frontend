import React from 'react'
import Home from "./pages/Home"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import NavigationBar from './components/NavigationBar'
import Footer from "./components/Footer"
import Features from "./pages/Features"
import Couriers from "./pages/Couriers"
import Pricing from "./pages/Pricing"
import Resources from "./pages/Resources"

const App = () => {
  return (

    <React.Fragment>
      <NavigationBar  />
        <Router>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/" element={ <Features />} />
            <Route path="/" element={ <Couriers /> } />
            <Route path="/" element={ <Pricing />} />
            <Route path="/" element={ <Resources />} />
          </Routes>
        </Router>
    
    </React.Fragment>
   
  )
}

export default App