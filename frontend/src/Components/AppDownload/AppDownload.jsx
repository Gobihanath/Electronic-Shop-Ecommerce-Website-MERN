import React from 'react'
import './AppDownload.css'
import {assets} from '../../Assets1/assets'

const AppDownload = () => {
  return (
    <div className='app-download-container'>
    <div className='app-download' id='app-download'>
       <p>Enhance your shopping experience with our mobile app. Download now for exclusive deals, faster checkout, and personalized recommendations! <br /> <br/> SparklinG</p>
       <div className='app-download-platforms'>
        <img src={assets.play_store} alt=''/>
        <img src={assets.app_store} alt=''/>
       </div>
    </div>
    </div>
  )
}

export default AppDownload