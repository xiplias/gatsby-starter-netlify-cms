import React from 'react'

export default function BigText({ children, title }) {
  return (
    <div className="big-text">
      <h4>{title}</h4>
      {children}
    </div>
  )
}
