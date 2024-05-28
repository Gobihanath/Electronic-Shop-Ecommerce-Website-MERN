import React, {  useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
  
  const [image,setImage]=useState(false);

  const[data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"Laptops"
  })


  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))

  }

  //api call

  const onSubmitHandler=async (event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
    const response= await axios.post(`${url}/api/item/add`,formData);
    if(response.data.success){
        setData({
          name:"",
          description:"",
          price:"",
          category:"Laptops"
        })
        setImage(false)
        toast.success(response.data.message)
    }
    else{
        toast.error(response.data.message)
    }

  }

  
  return (
    <div className='add'>
       <form className='flex-col' onSubmit={onSubmitHandler}>
         <div className='add-img-upload flex-col'>
           <p>Upload Image</p>
           <label htmlFor='image'>
             <img src={image? URL.createObjectURL(image) :assets.upload_area} alt=''/>

           </label>
           <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>

         </div>

         <div className='add-product-name flex-col'>
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type Here'/>
         </div>
         <div className='add-product-description flex-col'>
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Type Description Here' required></textarea>
         </div>
         <div className='add-category-price'>
           <div className='add-category flex-col'>
            <p> Product Category</p>
            <select onChange={onChangeHandler} name='category'>
                <option value="Laptops">Laptops</option>
                <option value="Mobile Phones">Mobile Phones</option>
                <option value="TV">TV</option>
                <option value="Camera">Camera</option>
                <option value="Fridge">Fridge</option>
                <option value="PowerBanks">PowerBanks</option>
                <option value="SmartWatches">SmartWatches</option>
                <option value="Washing Machines">Washing Machines</option>
                <option value="HeadPhones & Speakers">HeadPhones & Speakers</option>
                <option value="Iron Box">Iron Box</option>
                <option value="Electric Kettle">Electric Kettle</option>
                <option value="Fan">Fan</option>
                <option value="Air Conditioner">Air Conditioner</option>
                <option value="Power Generators">Power Generators</option>
                <option value="Electric Cookers">Electric Cookers</option>
            </select>
           </div>

           <div className='add-price flex-col'>
              <p>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='Rs. xxxx'/>

           </div>

         </div>

         <button type='submit' className='add-btn'>ADD</button>

       </form>
      

    
    </div>
  )
}

export default Add