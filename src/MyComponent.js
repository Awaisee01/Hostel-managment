// src/MyComponent.js
import React from 'react';
import { useMyContext } from './context/MyContext';

const MyComponent = () => {
  const { basename } = useMyContext();

  return (
    <div>
      {/* <p> {basename}</p> */}
    </div>
  );
};

export default MyComponent;
