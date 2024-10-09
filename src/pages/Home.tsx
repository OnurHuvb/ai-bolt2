import React from 'react'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import FeaturedServices from '../components/FeaturedServices'
import ResourceHub from '../components/ResourceHub'
import InsightsUpdates from '../components/InsightsUpdates'

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <FeaturedServices />
      <ResourceHub />
      <InsightsUpdates />
      <Testimonials />
    </>
  )
}

export default Home