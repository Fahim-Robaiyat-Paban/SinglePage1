import React from 'react'
import Navbar from './componenets/Navbar'
import Banner from './componenets/Banner'
import Corewave from './componenets/Corewave'
import Services from './componenets/Services'
import Footer from './componenets/Footer'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Corewave></Corewave>
      <Services></Services>
      <Footer></Footer>
    </>
  )
}

export default App