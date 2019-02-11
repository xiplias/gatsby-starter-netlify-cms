import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GalleryBlock from "../components/GalleryBlock";

export const WorkTemplate = ({
  title,
  company,
  details: { clients, deliverables, downloads, credits },
  gallery_block
}) => (
  <section className="section section--gradient work">
    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <h5 className="work-product-title">{company}</h5>
          <h3 className="work-title">{title}</h3>
        </div>
      </div>
      <div className="work-details">
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
    </div>
    {(gallery_block || []).map(item => (
      <GalleryBlock gallery_block={item} />
    ))}
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
      <WorkTemplate
        title={f.title}
        company={f.company}
        details={f.details}
        gallery_block={f.gallery_block}
      />
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
        gallery_block {
          layout_type
          gallery_items {
            image {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
  }
`;
