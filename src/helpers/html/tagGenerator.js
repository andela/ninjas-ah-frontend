import React from 'react';

export default (tag, children, numberOfTag = 1, props = {}) => {
  const array = new Array(numberOfTag).fill(1, 0, numberOfTag);
  return array.map((value, index) => React.createElement(tag, { ...props, key: index }, children));
};
