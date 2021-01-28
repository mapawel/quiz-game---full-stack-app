import React from 'react'

const Message = ({ message }) => (
  <div className="container is-widescreen">
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <div className="notification is-warning self-close">
          <button className="delete"></button>
          <div className="block">
            {message}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Message;