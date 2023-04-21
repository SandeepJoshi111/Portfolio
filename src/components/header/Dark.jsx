import React, { useState } from 'react'
import {BsFillMoonFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'

const Dark = () => {
    const [isActive, setIsActive] = useState(false);


  return (
        <div>
            <div>
                {isActive? <BsFillSunFill id='icon' 
                onClick={()=>{
                    setIsActive(!isActive)
                    document.body.classList.toggle("light-theme")
                }}/>:

                <BsFillMoonFill id='icon' onClick={()=>{
                    setIsActive(!isActive)
                    document.body.classList.toggle("light-theme")
                }}/>
                }
            </div>
        </div>
  )
}

export default Dark