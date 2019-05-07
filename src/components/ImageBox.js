import React from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export default ({ title, subtitle, to, height, image }) => (
  <div>
    <Link to={to}>
      {image ? (
        <PreviewCompatibleImage
          imageInfo={image}
          style={{ width: "100%", height, marginBottom: 30 }}
        />
      ) : (
        <div
          className="mock-image news-item-image"
          style={{ width: "100%", height, marginBottom: 30 }}
        >
          &nbsp;
        </div>
      )}
    </Link>
    <h4>{subtitle}</h4>
    <h3>
      <Link to={to}>{title}</Link>
    </h3>
  </div>
);
