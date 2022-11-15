import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
    {
        ['about', 'workDeveloper', 'workData', 'skills', 'contact']
            .map((item, index) => (
                <a 
                  href={`#${item}`}
                  key={item + index}
                  className='app__navigation-dot'
                  onClick={() => setToggle(false)}
                  style={active === item ? { backgroundColor: '#313BAC'} : {}}
                />
            ))
    }
    </div>
  );
}

export default NavigationDots;