import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Choose Your Package' subtitle='Welcome to our real estate app! With our. Choose Your Package feature, find tailored options for every need. From personalized searches to exclusive deals, we have got you covered at every step of your property journey. Explore now and find your dream home today!' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
