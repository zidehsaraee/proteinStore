import React from 'react'
import './About.css'
import Image from './Plan.jpg'

const About = () => {
  return (
    <div className='theAbout'>
        <h1>About us</h1>
        <p>Welcome to our corner at MuscleGrowth! Founded on a passion for quality and a commitment to innovation, we embarked on a journey to redefine the standards of Working out. Our team, comprised of dedicated enthusiasts and experts in their fields, strives to create a seamless experience for our customers. We believe in delivering not just products, but solutions that resonate with your needs. At MuscleGrowth, we're driven by the vision to inspire and empower, whether it's through our state-of-the-art technology, sustainable practices, or unwavering dedication to customer satisfaction. Join us as we shape the future together, one remarkable step at a time.</p>
        < img src={Image} alt='' /> 
        <p>Driven by a team of diverse talents and boundless creativity, MuscleGrowth is more than a mere entity, we're a vibrant tapestry of ideas, each thread contributing to the vivid story we weave. Our commitment extends beyond delivering exceptional protein product, it's about fostering a community, nurturing relationships, and fostering a culture of trust and collaboration. Rooted in authenticity and guided by innovation, we strive to create not just a brand but an experience—one that resonates, evokes emotions, and leaves an indelible mark. At MuscleGrowth, we believe in the power of unity, the strength of passion, and the limitless possibilities that arise when like-minded individuals unite for a common cause.</p>
    </div>
  )
}

export default About