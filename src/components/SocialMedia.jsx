import React from 'react';
import { BsFillTelephoneFill, BsLinkedin } from 'react-icons/bs';
import { AiFillMail, AiOutlineForm } from 'react-icons/ai';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.linkedin.com/in/jorgemanuelperezaguilar/' target='_blank' className='p-text'>
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a href='tel:+34 610 164 878' className='p-text'>
            <BsFillTelephoneFill />
          </a>
        </div>
        <div>
          <a href='mailto:jperez@idubeasistemas.es' className='p-text'>
            <AiFillMail />
          </a>
        </div>
        <div>
          <a href='#contact' className='p-text'>
            <AiOutlineForm />
          </a>
        </div>
    </div>
  );
}

export default SocialMedia;