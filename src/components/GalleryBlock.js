import React from "react";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const GalleryBlock = ({ gallery_block: { gallery_items } }) => (
  <div className="columns">
    {(gallery_items || []).map(item => (
      <div key={item.text} className="column">
        <section className="section">
          <div className="has-text-centered">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </section>
      </div>
    ))}
  </div>
);

export default GalleryBlock;
