import React from 'react';

import workimg from '../assests/workimg.webp';
import { motion } from 'framer-motion';
import work from "../assests/work.png"

const Work = () => {
  return (
    <div id='services'>
      <img src={work} alt='work' />
      <div className='Work'>
        <div className='image-grid'>
          <motion.div
            className='column'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <img src={workimg} alt='c' className='imgfirst' />
            <p>Recalc</p>
          </motion.div>

          <motion.div
            className='column'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <img src={workimg} alt='Second' className='imgsecond' />
            <p>Influencers</p>
          </motion.div>

          <motion.div
            className='column'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <img src={workimg} alt='Third' />
            <p>Seva</p>
          </motion.div>

          <motion.div
            className='column'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <img src={workimg} alt='Fourth' className='imgsecond' />
            <p>YouSound</p>
          </motion.div>

          <motion.div
            className='column'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <img src={workimg} alt='Fifth' />
            <p>Seva</p>
          </motion.div>

          <motion.div
            className='column'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <img src={workimg} alt='Sixth' className='imgsecond' />
            <p>YouSound</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
