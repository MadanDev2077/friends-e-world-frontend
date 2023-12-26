import React from 'react'
// import banner from '../../assets/images/banner.jpg';

const Card = (props) => {
  return (
    <div className='card_container'>
        <div className="card_grid">
            <img src={props.img} />
            <div className='serv_tit'>{props.tit}</div>
        </div>
    </div>
  )
}

export default Card