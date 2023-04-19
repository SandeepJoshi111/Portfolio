import React, { useState } from 'react'
import{BsFillMoonFill} from 'react-icons/bs'
const Dark = () => {
    const [activeNav,setActiveNav] = useState('#')
  return (
    <div className='dark'>
        <a href="#dark" onClick={()=> setActiveNav('#')} className={activeNav ==='#dark' ? 'active' : ''}><BsFillMoonFill/></a>
    </div>
  )
}

export default Dark