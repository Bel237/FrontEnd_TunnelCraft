import React from 'react'
import './landing_page.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const landing_page = () => {
  return (
    <>
    <div className='div'>
    <Navbar/>
    
    <section className='div1'>
        <div>
          <h1> Travel Well : Votre voyage planner</h1>
          <p>Simplifiez vous la vie avec notre plateforme <br/>
          experte en planfication de voyages inter urbain</p>

          <a href='/connection' className='start-btn'>Commencer</a>
        </div>

      </section>
     
        
    </div>

    <Footer/>
  </>

  )
}

export default landing_page