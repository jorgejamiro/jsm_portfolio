import { AppWrap, MotionWrap } from '../../wrapper';

import WorkFilter from './WorkFilter';

import './Work.scss';


const WorkDeveloper = () => {
  const dataDeveloper = {
    header: 'Developer',
    allTag: "All Dev",
    tags: ['Web App', 'Mobile App', 'Fullstack', 'Frontend', 'Backend', 'All'],
  };

  return (
    <WorkFilter data={dataDeveloper} />
  );
};


export default AppWrap(
    MotionWrap(WorkDeveloper, 'app__works'),
    'workDeveloper',
    'app__developerbg',
);