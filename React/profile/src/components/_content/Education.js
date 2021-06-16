import React from 'react';
import EducationSteps from '../../data/education';

const Education = () => {
  return (
    <div className="primary__section">
      <h2>Education</h2>

      {EducationSteps.map((step,  idx)=>(
        <dl key={idx} className="primary__list">
          <dt className="primary__list_date">
            {step.year}
          </dt>
          <dd className="primary__list_body">
            <h4>{step.place}</h4>
            <p>{step.subject}</p>
          </dd>
        </dl>
      ))}
    </div>
  );
};

export default Education;
