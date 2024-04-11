import React from 'react'

import hero from "../assests/hero.png"

function Hero() {
  return (
    <div className="main-title" id="home">
     <img className="heroimg" src={hero} alt='heroimg'/>
        <div className="para">
        <div className="left-content">
            <span className="vert"></span>
           <p>
            Unlock your business potential with our team of <br/>
            experts in strategy, design, and development.
            </p>
        </div>
        <span className="vert"></span>
        <div className="right-content">
            
            <p>Discuss Your Project</p>
        </div>
        </div>

    
    </div>
      

  )
}

export default Hero
