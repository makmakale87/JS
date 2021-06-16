import React from 'react';
import Image from '../../images/love-what-you-do.jpg';

const About = () => {
  return (
    <div className="content-header">
      <h2>About me</h2>
      <img src={Image} alt="love-what-you-do" className="love-what-you-do"/>
    </div>
  );
};

export default About;
