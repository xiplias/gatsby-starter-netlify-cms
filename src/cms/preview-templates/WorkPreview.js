import React from 'react'
import PropTypes from 'prop-types'
import { WorkTemplate } from '../../templates/work'

const WorkPreview = ({ entry, getAsset }) => {
  return (
    <WorkTemplate
      title={entry.getIn(['data', 'title'])}
      company={entry.getIn(['data', 'company'])}
      details={entry.getIn(['data', 'details']).toJS()}
      mainImage={entry.getIn(['data', 'mainImage'])}
      gallery_block={entry.getIn(['data', 'gallery_block']).toJS()}
      preview={entry.getIn(['data', 'preview'])}
      story={entry.getIn(['data', 'story'])}
    />
  )
}

WorkPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default WorkPreview
