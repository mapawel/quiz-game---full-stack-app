import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import Navbar from './templates/Navbar';
import Clock from './components/organizms/Clock';

const Playgame = ({ userName, title }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} />
    <section className="section">
      <div className="container is-widescreen">
        <div className="columns is-desktop is-vcentered">
          <div className="column">
            <Clock />
          </div>
          <div className="column is-flex is-flex-direction-column">
            <p className="subtitle is-6 is-size-5-tablet is-size-4-desktop has-text-grey mb-2">
              Question to answer: <span className="title is-4 is-size-3-tablet is-size-2-desktop">10</span>
            </p>
            <p className="subtitle is-6 is-size-5-tablet is-size-4-desktop has-text-grey mb-4">
              Total game time: <span className="title is-4 is-size-3-tablet is-size-2-desktop">6:45</span>
            </p>
            <p className="subtitle is-7 is-size-6-tablet is-size-5-desktop has-text-grey">
              Your best score: <span className="title is-6 is-size-5-tablet is-size-4-desktop">9 good answers in 12:43</span>
            </p>
          </div>
        </div>
        <div className="box p-5">
          <div className="columns is-centered">
            <div className="column is-flex is-flex-direction-column">
              <p className="title is-6 is-size-5-tablet is-size-4normal-desktop">
                here is very long text od the very complicatego question to as uset about somethinw which he is not going to answer
            </p>
            </div>
          </div>
        </div>
        <div className="is-flex is-flex-direction-column">
          <button className="button is-primary is-outlined mb-2">test answer number 1 or a ery lang answer test answer number 1 or a ery lang answer</button> <button className="button is-primary is-outlined mb-2">test answer number 1 or a ery lang answer</button>
          <button className="button is-primary is-outlined mb-2">test answer number 1 or a ery lang answer</button>
          <button className="button is-primary is-outlined mb-2">test answer number 1 or a ery lang answer</button>
        </div>
      </div>
    </section>
  </HeadTemplate>
)

export default Playgame;