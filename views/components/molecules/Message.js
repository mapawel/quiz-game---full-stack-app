import React from 'react'

const Message = ({ message, close }) => (
  <div className="section">
    <div className="container is-widescreen">
      <div className="columns is-centered mt-5">
        <div className="column is-half">
          <div className={close === 'game' ? "notification is-primary self-close has-text-white has-text-centered is-size-5 is-size-3-tablet" : "notification is-warning"}>
            <button className="delete"></button>
            <div className="block">
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Message;