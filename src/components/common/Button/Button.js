import React from 'react';

export default ({ className, text, onClick }) => (
  <div>
    <button className={className} onClick={onClick}>
      {text}
    </button>
  </div>
);
