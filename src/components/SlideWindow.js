import React from 'react'
import './SlideWindow.css'

export default function SlideWindow () {
    return (   
        <div id="fancy-window">
  <div id="fancy-wrapper">
    <div id="fancy-left-side">
      <ul>
        <li className="sell active">
          <div className="icon active">
            <svg viewBox="0 0 32 32">
              <g filter>
              </g></svg><i className="glyphicon glyphicon-usd" />
          </div>
          Sell
        </li>
        <li className="manage">
          <div className="icon">
            <svg viewBox="0 0 32 32">
              <g filter>
                <use xlinkHref="#credit-card" />
              </g>
            </svg>
          </div>
          Manage
        </li>
        <li className="report">
          <div className="icon">
            <svg viewBox="0 0 32 32">
              <g filter>
                <use xlinkHref="#gift" />
              </g>
            </svg>
          </div>
          Report
        </li>
        <li className="grow">
          <div className="icon">
            <svg viewBox="0 0 32 32">
              <g filter>
                <use xlinkHref="#package" />
              </g>
            </svg>
          </div>
          Grow
        </li>
      </ul>
    </div>
    <div id="fancy-window-border">
      <div id="line" className="one" />
    </div>
    <div id="fancy-right-side">
      <div id="fancy-first" className="active">
        <div className="icon big">
          <svg viewBox="0 0 32 32">
            <g filter>
              <use xlinkHref="#shopping-cart" />
            </g>
          </svg>
        </div>
        <h1>Sell your gift</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra est, eu finibus mauris. Quisque tempus vestibulum fringilla. Morbi tortor eros, sollicitudin eu arcu sit amet, aliquet sagittis dolor.</p>
      </div>
      <div id="fancy-second">
        <div className="icon big">
          <svg viewBox="0 0 32 32">
            <g filter>
              <use xlinkHref="#credit-card" />
            </g>
          </svg>
        </div>
        <h1>Manage for it</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra est, eu finibus mauris. Quisque tempus vestibulum fringilla. Morbi tortor eros, sollicitudin eu arcu sit amet, aliquet sagittis dolor. </p>
      </div>
      <div id="fancy-third">
        <div className="icon big">
          <svg viewBox="0 0 32 32">
            <g filter>
              <use xlinkHref="#gift" />
            </g>
          </svg>
        </div>
        <h1>We will report it</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra est, eu finibus mauris. Quisque tempus vestibulum fringilla. Morbi tortor eros, sollicitudin eu arcu sit amet, aliquet sagittis dolor. </p>
      </div>
      <div id="fancy-fourth">
        <div className="icon big">
          <svg viewBox="0 0 32 32">
            <g filter>
              <use xlinkHref="#package" />
            </g>
          </svg>
        </div>
        <h1>Grow it</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra est, eu finibus mauris. Quisque tempus vestibulum fringilla. Morbi tortor eros, sollicitudin eu arcu sit amet, aliquet sagittis dolor. </p>
      </div>
    </div>
  </div>
</div>

    )
}