import React from 'react';
import skills from '../../data/skills';

const Skills = () => {
  return (
    <section>
      <div className="sidebar__section_header">
        Skills
      </div>

      <div className="sidebar__section_body">
        <ul className="sidebar__list skills">
          {skills.map((skill, idx) => (
            <li key={idx} className="sidebar__list_item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
