import React, { useState, useEffect } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client.js';

import { useTranslation } from 'react-i18next';

import './About.scss';



const About = () => {
  const [abouts, setAbouts] = useState([]);
  const { i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])
  
  
  return (
    <>
      <h2 className='head-text'><span>Developer</span> & <span>Data Analyst</span></h2>

      <div className='app__profiles'>
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20}} >{about.title[lng]}</h2>
              <div className='p-text' style={{ marginTop: 20, textAlign: 'justify'}} dangerouslySetInnerHTML={{__html: about.description[lng]}} />
            </motion.div>
          ))
        }
      </div>
    </>
  );
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
);