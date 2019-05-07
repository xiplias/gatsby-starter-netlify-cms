import React from "react";
import PropTypes from "prop-types";
import { EmployeeTemplate } from "../../templates/employee";
const NewsPostPreview = ({ entry }) => (
  <EmployeeTemplate
    name={entry.getIn(["data", "name"])}
    title={entry.getIn(["data", "title"])}
    avatar={entry.getIn(["data", "avatar"])}
  />
);

NewsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default NewsPostPreview;
