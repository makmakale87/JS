import React from 'react';
import ExperienceSteps from '../../data/experince';

const Experience = () => {
  return (
    <div className="primary__section">
      <h2>Work Experience</h2>

      {ExperienceSteps.map((step,idx)=>(
        <dl key={idx} className="primary__list">
          <dt className="primary__list_date">
            {step.year}
          </dt>
          <dd className="primary__list_body">
            <h4>{step.position}</h4>
            <h5>{step.place}</h5>
            {!!step.description && <p>{step.description}</p>}
            <div className="primary__list_body-tasks"><i>Achievements/Tasks:</i></div>
            <ul>
              {step.tasks.map((task, taskIdx) => (
                <li key={taskIdx}>{task}</li>
              ))}
            </ul>
          </dd>
        </dl>
      ))}
    </div>
  );
};

export default Experience;
