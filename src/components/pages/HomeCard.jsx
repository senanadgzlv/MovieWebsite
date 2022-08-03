import React from 'react'
import { Link } from 'react-router-dom';
import play from "../assets/image/play-button.png";
import played from "../assets/image/play.png";


const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, video } }) => {
  return (
<div className="box">
<div className="coverimage">
  <img src={cover} width="" alt="" />
</div>

<div className="content flex">
 <div className="details row ">
 <h1>{name}</h1>
  <div className="rating flex ">
    <i className='fa fa-star' ></i>
    <i className='fa fa-star' ></i>
    <i className='fa fa-star' ></i>
    <i className='fa fa-star' ></i>
    <i className='fa fa-star-half' ></i>

  </div>
  <label >{rating}</label>
  <span>GP</span>
  <label>{time}</label>


<p>{desc}</p>

<div className="cast">
  <h4>
    <span>Starring</span>
    {starring}
  </h4>
  <h4>
    <span>Genres</span>
    {genres}

  </h4>
  <h4>
    <span>Tags</span>
    {tags}

  </h4>
</div>
<button className='primary-btn ' >
  <i className='fas fa-play' ></i> PLAY NOW
</button>
</div>

<div className="playbutton row">
<Link to={`/singlepage/${id}`} >
  <button>
    <div className="img">
      <img src={play} alt="" />
      <img src={played}  alt="" className='change' />
    </div>
WATCH TRAILER
  </button>
</Link>
</div>
</div>
</div>
  )
}

export default HomeCard