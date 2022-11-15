import React, { useState } from 'react';

import { HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

import { Tab, Tablist } from 'evergreen-ui';

import './NavBar.scss';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const [indexSelected, setIndexSelected] = useState(0);
    const tabsHeading = ['en', 'es'];
    const menuOptions = ['about', 'developer', 'data analyst', 'skills', 'contact'];
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
  
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <h1>Jorge</h1>
            </div>
            <ul className='app__navbar-links'>
                {
                    menuOptions.map((item, index) => {
                        let href = item;

                        if (item === 'developer') href = 'workDeveloper';
                        if (item === 'data analyst') href = 'workData';
                        
                        return (
                            <li className='app__flex p-text' key={`link-${item}`}>
                                <div />
                                <h3><a href={`#${href}`}>{t(`menuOptions.item_${index}`)}</a></h3>
                            </li>
                        );
                    })
                }
            </ul>

            <div>
                <Tablist marginBottom={0} >
                {tabsHeading.map((tab, index) => (
                    <Tab
                        key={tab}
                        isSelected={index === indexSelected}
                        appearance='primary'
                        onSelect={() => {
                            setIndexSelected(index);
                            changeLanguage(tab);
                        }}
                    >
                        {tab}
                    </Tab>
                ))}
                </Tablist>
            </div>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [250, 0] }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                            {
                                menuOptions.map((item) => {
                                    let href = item;

                                    if (item === 'developer') href = 'workDeveloper';
                                    if (item === 'data analyst') href = 'workData';
                                    
                                    return (
                                        <li key={item}>
                                            <a href={`#${href}`} onClick={() => setToggle(false)} >{item}</a>
                                        </li>
                                    );
                                })
                            }
                            </ul>
                        </motion.div>
                    ) 
                }
            </div>
        </nav>
  );
}

export default NavBar;