import React, { useContext } from 'react'
import './Item.css'
import { assets } from '../../Assets1/assets'
import { StoreContext } from '../../Context/StoreContext'





const Item = ({id,name,price,description,image}) => {




  //const [itemCount,setItemCount]=useState(0)

  const{cartItems,addToCart,removeFromCart} = useContext(StoreContext);

   
  return (
    <div className='f-item'>

            <div className='f-item-img-container'>
              <img className='f-item-image' src={image} alt=''/>
              {
                !cartItems[id] ?
                <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                :<div className='f-item-counter'>
                 <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                 <p>{cartItems[id]}</p>
                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>

                </div>
                 
              }
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