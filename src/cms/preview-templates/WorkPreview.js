import React from "react";
import PropTypes from "prop-types";
import { WorkTemplate } from "../../templates/work";

const WorkPreview = ({ entry, getAsset }) => {
  return (
    <WorkTemplate
      title={entry.getIn(["data", "title"])}
      company={entry.getIn(["data", "company"])}
      details={entry.getIn(["data", "details"]).toJS()}
      gallery_block={entry.getIn(["data", "gallery_block"]).toJS()}
    />
  );
};

WorkPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default WorkPreview;
