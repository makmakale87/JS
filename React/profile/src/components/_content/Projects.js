import React from 'react';
import ProjectsData from '../../data/projects';

const Projects = () => {
  return (
    <div className="primary__section">
      <h2>Projects</h2>

      {ProjectsData.map((proj, idx)=>(
        <dl key={idx} className="primary__list">
          <dt className="primary__list_date">
            {proj.period}
          </dt>
          <dd className="primary__list_body">
            <h4>{proj.title}</h4>
            {!!proj.desc && <p>{proj.desc}</p>}
            <div className="primary__list_body-tasks"><i>Achievements/Tasks:</i></div>
            <ul>
              {proj.tasks.map((task, taskIdx) => (
                <li key={taskIdx}>{task}</li>
              ))}
            </ul>
          </dd>
        </dl>
      ))}
    </div>
  );
};

export default Projects;
