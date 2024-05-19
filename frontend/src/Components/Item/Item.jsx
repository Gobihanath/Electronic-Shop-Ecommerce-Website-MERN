import React from 'react'
import './Item.css'
import { assets } from '../../Assets1/assets'

const Item = ({id,name,price,description,image}) => {
  return (
    <div className='f-item'>
            <div className='f-item-img-container'>
              <img className='f-item-image' src={image} alt=''/>

            </div>
            <div className='item-info'>
              <div className='item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''/>

              </div>
              <p className='item-description'>{description}</p>
              <p className='item-price'>Rs. {price}</p>


            </div>

    </div>
  )
}

export default Item