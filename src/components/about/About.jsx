import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='' title='About Us - Our Identity"' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Narrative' subtitle='Explore Our companies Journey and Workflow' />
            <p>Celebrating Homes: Explore Your Dream Spaces with Us!
Welcome to our platform dedicated to connecting you with your ideal properties. Discover a curated selection of homes, apartments, and commercial spaces tailored to your needs and preferences. With our user-friendly interface and expert guidance, finding your perfect property has never been easier. Start your journey to homeownership today!</p>
            <button className='btn2'>Learn More About Our Identity</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
