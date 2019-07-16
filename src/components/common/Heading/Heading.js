import React from 'react';

const Heading = (params = {}) => (
  <div>
    <h1 className="light nobold no-margin light small-padding">{params.text}</h1>
  </div>
);

export default Heading;
