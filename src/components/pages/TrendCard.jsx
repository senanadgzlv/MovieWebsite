import React from 'react'

const TrendCard = ({ item: { id, cover, name, time } }) => {
  return (
   <div className="Trendbox">
<div className="img">
    <img src={cover} alt="" />
</div>
<div className="text">
    <h1>{name}</h1>
    <span>{time}</span> <br />
    <button className='primary-btn' >
        <i className='fa fa-play' ></i>
        Play Now
    </button>
</div>
   </div>
  )
}

export default TrendCard