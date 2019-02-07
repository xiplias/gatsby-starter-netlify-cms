import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const WorkTemplate = ({
  title,
  company,
  details: { clients, deliverables, downloads, credits }
}) => (
  <section className="section section--gradient work">
    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <h5 className="work-product-title">{company}</h5>
          <h3 className="work-title">{title}</h3>
        </div>
      </div>
      <div className="columns">
        <div className="column is-narrow">
          <h5 className="work-details-title">CLIENTS</h5>
          <div className="work-details-text">
            {(clients || []).map(({ name }) => (
              <div key={name}>{name}</div>
            ))}
          </div>
        </div>
        <div className="column is-3">
          <h5 className="work-details-title">DELIVERABLES</h5>
          <div className="work-details-text">{deliverables}</div>
        </div>
        <div className="column is-narrow">
          <h5 className="work-details-title">DOWNLOADS</h5>
          <div className="work-details-text">
            {(downloads || []).map(({ name, link }) => (
              <a key={link} href={link}>
                {name} ›
              </a>
            ))}
          </div>
        </div>
        <div className="column is-narrow">
          <h5 className="work-details-title">CREDITS</h5>
          <div className="work-details-text">
            {(credits || []).map(({ name }) => (
              <div key={name}>{name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

WorkTemplate.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string
};

const Work = ({ data }) => {
  const { frontmatter: f } = data.markdownRemark;

  return (
    <Layout>
      <WorkTemplate title={f.title} company={f.company} details={f.details} />
    </Layout>
  );
};
export default Work;

export const workQuery = graphql`
  query Work($id: String!) {
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
