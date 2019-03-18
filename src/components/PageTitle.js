import React from "react";

export default ({ preTitle, title, description }) => (
  <div className="page-title">
    <h2 className="pre-title">{preTitle}</h2>
    <h1 className="title">{title}</h1>
    <div className="description">{description}</div>
  </div>
);
