import React from 'react'
import videobg from '../src/assets/videobg.mp4'
import "./back.css"
const Back = () => {
  return (
    <div className='video'>
      <video src={videobg} autoPlay muted loop/>
    </div>
  )
}

export default Back
