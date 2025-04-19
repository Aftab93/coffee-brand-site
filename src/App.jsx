import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import ContactUs from './components/ContactUs/ContactUs'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Services />
      <ContactUs />
      <Banner />
      <Footer />
    </div>
  )
}

export default App