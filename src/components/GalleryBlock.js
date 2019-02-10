import React from "react";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const GalleryBlock = ({ gallery_block: { gallery_items }, gallery_block }) => {
  if (gallery_block.layout_type === "left double size") {
    const first = gallery_items[0];
    const rest = gallery_items.slice(1, gallery_items.length + 1);
    return (
      <div className="columns">
        <div className="column is-8">
          <PreviewCompatibleImage imageInfo={first} />
        </div>
        <div className="column is-4">
          {(rest || []).map(item => (
            <div key={item.text} className="has-text-centered">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          ))}
        </div>
      </div>
    );
  } else if (gallery_block.layout_type === "right double size") {
    const first = gallery_items[0];
    const rest = gallery_items.slice(1, gallery_items.length + 1);
    return (
      <div className="columns">
        <div className="column is-4">
          {(rest || []).map(item => (
            <div key={item.text} className="has-text-centered">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          ))}
        </div>
        <div className="column is-8">
          <PreviewCompatibleImage imageInfo={first} />
        </div>
      </div>
    );
  }

  return (
    <div className="columns">
      {(gallery_items || []).map(item => (
        <div key={item.text} className="column">
          <div className="has-text-centered">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryBlock;
