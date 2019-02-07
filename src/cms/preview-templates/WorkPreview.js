import React from "react";
import PropTypes from "prop-types";
import { WorkTemplate } from "../../templates/work";

const WorkPreview = ({ entry, getAsset }) => {
  return (
    <WorkTemplate
      title={entry.getIn(["data", "title"])}
      company={entry.getIn(["data", "company"])}
      details={entry.getIn(["data", "details"]).toJS()}
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
