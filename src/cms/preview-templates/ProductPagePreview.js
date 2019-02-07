import React from "react";
import PropTypes from "prop-types";
import { ProductPageTemplate } from "../../templates/product-page";

const ProductPagePreview = ({ entry, getAsset }) => {
  return (
    <ProductPageTemplate
      title={entry.getIn(["data", "title"])}
      company={entry.getIn(["data", "company"])}
      details={entry.getIn(["data", "details"]).toJS()}
    />
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProductPagePreview;
