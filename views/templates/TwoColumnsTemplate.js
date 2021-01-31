import React from 'react';

const TwoColumnsTemplpate = ({ children }) => (
  <div className="container is-widescreen mt-5">
    <div className="columns is-desktop is-vcentered">
      {children}
    </div>
  </div>
)

export default TwoColumnsTemplpate