import React from 'react';
import Zoom from 'react-medium-image-zoom';
import certificatesData from '../../data/certificates';

const Certificates = () => {
  return (
    <section>
      <div className="sidebar__section_header">
        Certificates
      </div>

      <div className="sidebar__section_body certificates">
        {certificatesData.map((cert,idx)=>(
          <Zoom key={idx}>
            <img src={cert.img} alt={cert.alt} width="250"/>
          </Zoom>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
