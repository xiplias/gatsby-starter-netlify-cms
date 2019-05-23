import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const GalleryBlock = ({ gallery_block: { gallery_items }, gallery_block }) => {
  if (gallery_block.layout_type === 'left double size') {
    const first = gallery_items[0]
    const rest = gallery_items.slice(1, gallery_items.length + 1)
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child">
            <PreviewCompatibleImage imageInfo={first} />
          </div>
        </div>
        <div className="tile is-4 is-vertical is-parent">
          {(rest || []).map(item => (
            <div key={item.text} className="tile is-child">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          ))}
        </div>
      </div>
    )
  } else if (gallery_block.layout_type === 'right double size') {
    const first = gallery_items[0]
    const rest = gallery_items.slice(1, gallery_items.length + 1)
    return (
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          {(rest || []).map(item => (
            <div key={item.text} className="tile is-child">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          ))}
        </div>
        <div className="tile is-parent">
          <div className="tile is-child">
            <PreviewCompatibleImage imageInfo={first} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="tile is-ancestor">
      {(gallery_items || []).map(item => (
        <div className="tile is-parent">
          <div key={item.text} className="tile is-child">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default GalleryBlock
