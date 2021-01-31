import React from 'react';

const OneColumnTemplate = ({ children }) => (
  <div className="container is-widescreen">
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        {children}
      </div>
    </div>
  </div>
)

export default OneColumnTemplate