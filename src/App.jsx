import React from 'react'
import CardDefault from './component/CardDefault'
// import Cardlar from './component/Cardlar'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Section4 from './component/Section4'
import Section6 from './component/Section6'
import Section7 from './component/Section7'
import Sectionimg from './component/Sectionimg'


const App = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Sectionimg />
      <Section2 />
      <Section3 />
      <Section4 />

      <Section6 />
      <Section7 />
      <Footer />
      
    </div>
  )
}

export default App