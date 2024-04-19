import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Latest Listings' subtitle='Explore our latest property listings, featuring a diverse array of options to match every lifestyle. From city apartments to countryside estates, each property is curated for quality and comfort. With detailed descriptions and expert guidance, finding your dream home is easier than ever. Start your search today!' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
