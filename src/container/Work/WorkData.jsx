import { AppWrap, MotionWrap } from '../../wrapper';

import WorkFilter from './WorkFilter';

import './Work.scss';


const WorkData = () => {
  const dataData = {
    header: "Data Analyst",
    allTag: "All Data",
    tags: ['Machine Learning', 'Deep Learning', 'All'],
  };

  return (
    <WorkFilter data={dataData} />
  );
};  

export default AppWrap(
    MotionWrap(WorkData, 'app__works'),
    'workData',
    'app__databg',
);