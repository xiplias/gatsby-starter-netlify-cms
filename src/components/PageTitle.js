import React from 'react'

export default ({ preTitle, title, description }) => (
  <div className="page-title">
    <h4 className="pre-title">{preTitle}</h4>
    <h1 className="title">{title}</h1>
    <div className="description">{description}</div>
  </div>
)
