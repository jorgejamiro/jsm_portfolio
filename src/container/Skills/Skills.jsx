import React, { useState, useEffect } from 'react';
import  { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import { useTranslation } from 'react-i18next';

import './Skills.scss';



const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skillsDevDiv1, setSkillsDevDiv1] = useState([]);
  const [skillsDevDiv2, setSkillsDevDiv2] = useState([]);
  const [skillsDevDiv3, setSkillsDevDiv3] = useState([]);
  const [skillsDevDiv4, setSkillsDevDiv4] = useState([]);
  const [skillsDevDiv5, setSkillsDevDiv5] = useState([]);
  const [skillsDevDiv6, setSkillsDevDiv6] = useState([]);
  const [skillsDevDiv7, setSkillsDevDiv7] = useState([]);
  const { t } = useTranslation();
  
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperience(data);
      })
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
        setSkillsDevDiv1(namesToSkills(['JavaScript', 'TypeScript', 'skillEmpty', 'Python', 'skillEmpty', 'Tensorflow'], data));
        setSkillsDevDiv2(namesToSkills(['React', 'Node JS', 'HTML', 'Django', 'Pandas', 'Keras'], data));
        setSkillsDevDiv3(namesToSkills(['Redux', 'Express', 'CSS', 'Flask', 'Numpy'], data));
        setSkillsDevDiv4(namesToSkills(['GraphQL', 'MongoDB', 'Sass', 'skillEmpty', 'Matplotlib', 'skillEmpty', 'SQL'], data));
        setSkillsDevDiv5(namesToSkills(['skillEmpty', 'skillEmpty', 'skillEmpty', 'skillEmpty', 'Seaborn', 'skillEmpty', 'MySQL'], data));
        setSkillsDevDiv6(namesToSkills(['skillEmpty', 'skillEmpty', 'Firebase', 'Stripe', 'skillEmpty', 'skillEmpty', 'Excel'], data));
        setSkillsDevDiv7(namesToSkills(['skillEmpty', 'skillEmpty', 'skillEmpty', 'Git'], data));
      })
  }, []);

  const namesToSkills = (skillNames, skills) => {
    const filteredSkills = [];

    skillNames.map((skillName) => {
      filteredSkills.push(skills.find(skill => {return skill.name === skillName}));
    });

    return filteredSkills;
  };

  const showSkills = (skills) => {

    return (
      skills.map((skill) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__skills-item app__flex'
          key={skill.name}
        >
          <div className='app__flex'
              style={{ backgroundColor: skill.bgColor }}>
              <img src={urlFor(skill.icon)} alt={skill.name} />
          </div>
          <p className='p-text'>
          {
            skill.name === 'skillEmpty' ? ' ' : skill.name
          }
          </p>
        </motion.div>
      ))
    );
  };
  
  return (
   <>
    <h3 className='head-text'>{t('Skills')}</h3>
    <h2 className='app__skills-header-c1'>Developer</h2>
    <h2>&</h2>
    <h2 className='app__skills-header-c2'>Data Analyst</h2>
    <div className='app__skills-container'>
      <div className='app__skills-dev'>
        {
          showSkills(skillsDevDiv1)
        }
      </div>
      <div className='app__skills-dev'>
        {
          showSkills(skillsDevDiv2)
        }
      </div>
      <div className='app__skills-dev'>
        {
          showSkills(skillsDevDiv3)
        }
      </div>
      <div className='app__skills-dev'>
        {
          showSkills(skillsDevDiv4)
        }
      </div>
      <div className='app__skills-dev'>
        {
          showSkills(skillsDevDiv5)
        }
      </div>
      <div className='app__skills-dev'>
        {
          showSkills(skillsDevDiv6)
        }
      </div>
      <div className='app__skills-dev'>
        {
          showSkills(skillsDevDiv7)
        }
      </div>

      {/*<motion.div className='app__skills-exp'>
        {
          experience.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>

              <motion.div className='app__skills-exp-works'>
                {
                  experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='app__skills-exp-work'
                        data-tip
                        data-for={work.name}
                        key={experience.year + work.name}
                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>

                      <ReactToolTip
                        id={work.name}
                        effect='solid'
                        arrowColor='#fff'
                        className='skills-tooltip'
                      >
                        {work.desc}
                      </ReactToolTip>
                    </>
                  ))
                }
              </motion.div>
            </motion.div>
          ))
        }
      </motion.div>*/} 
    </div>
   </>
  );
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__primarybg'
);