import React from 'react';
import about from "../assests/about.png";
import services from "../assests/services.png";

const Video = () => {
  return (
    <div className="video" style={{ width: '100%', height: '95%' }}>
      <video
        src="https://d1v22jn5a1go7.cloudfront.net/cybernest-intro.mp4"
       
        controls
        style={{ width: '100%', height: '100%' }}
        
      />
       <div>
       <img src={about} alt='about' />
       </div>
       <div>
       <img src={services} alt='about' />
       </div>
       
    </div>
  )
}

export default Video
