import React, { useState } from 'react'
import { homeData } from '../../Data';
import Home from "./Home";

const Homes = () => {
  const [items , setItems]=useState(homeData);

  return (
    <>
    <section className="home">
      <Home  props={items}  />
  </section>
 
    </>
  

  )
}

export default Homes