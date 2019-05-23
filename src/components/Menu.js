import React, { useState } from 'react'

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className={`menu-button ${open ? 'menu-open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <div>
            <div className="menu-button-rect-1" />
            <div className="menu-button-rect-2" />
          </div>
        ) : (
          <div className="menu-button-burger">
            <div className="menu-button-burger-rect" />
            <div className="menu-button-burger-rect" />
            <div className="menu-button-burger-rect" />
          </div>
        )}
      </div>
      {open && (
        <div className="menu">
          <div className="menu-items">
            <div className="menu-item">
              <a href="/work">Work</a>
            </div>
            <div className="menu-item">
              <a href="/about">About</a>
            </div>
            <div className="menu-item">
              <a href="/approach">Approach</a>
            </div>
            <div className="menu-item">
              <a href="/people">People</a>
            </div>
            <div className="menu-item">
              <a href="/ventures">Ventures</a>
            </div>
            <div className="menu-item">
              <a href="/careers">Careers</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
