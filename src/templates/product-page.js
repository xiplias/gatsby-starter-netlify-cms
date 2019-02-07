import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ProductPageTemplate = ({
  title,
  company,
  details: { clients, deliverables, downloads, credits }
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="content">
        <div className="columns">
          <div className="column is-12">
            <h5>{company}</h5>
            <h3 className="has-text-weight-semibold is-size-2">{title}</h3>
          </div>
        </div>
        <div className="columns">
          <div className="column is-narrow">
            <h5>CLIENTS</h5>
            {(clients || []).map(({ name }) => (
              <div key={name}>{name}</div>
            ))}
          </div>
          <div className="column is-3">
            <h5>DELIVERABLES</h5>
            {deliverables}
          </div>
          <div className="column is-narrow">
            <h5>DOWNLOADS</h5>
            {(downloads || []).map(({ name, link }) => (
              <a key={link} href={link}>
                {name}
              </a>
            ))}
          </div>
          <div className="column is-narrow">
            <h5>CREDITS</h5>
            {(credits || []).map(({ name }) => (
              <div key={name}>{name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string
};

const ProductPage = ({ data }) => {
  const { frontmatter: f } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        title={f.title}
        company={f.company}
        details={f.details}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.objectOf({
        company: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        details: PropTypes.objectOf({
          clients: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired
            })
          ),
          downloads: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              link: PropTypes.string.isRequired
            })
          ),
          credits: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired
            })
          ),
          deliverables: PropTypes.string
        })
      })
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        company
        title
        details {
          clients {
            name
          }
          deliverables
          downloads {
            name
            link
          }
          credits {
            name
          }
        }
      }
    }
  }
`;
