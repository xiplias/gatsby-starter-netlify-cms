import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GalleryBlock from '../components/GalleryBlock'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import PageTitle from '../components/PageTitle'

export const WorkTemplate = ({
  title,
  company,
  details: { clients, deliverables, downloads, credits, offices },
  gallery_block,
  preview,
  story,
  mainImage,
}) => (
  <section className="section section--gradient work">
    <div className="container">
      <div className="columns">
        <PageTitle preTitle={company} title={title} />
      </div>
      <div className="work-details">
        <div className="columns">
          <div className="column is-narrow" style={{ maxWidth: '23.333%' }}>
            <h5 className="work-details-title">OFFICE</h5>
            <div className="work-details-text">
              {(offices || []).map(({ name }) => (
                <div key={name}>{name}</div>
              ))}
            </div>
          </div>
          <div
            className="column is-narrow is-offset-1"
            style={{ maxWidth: '23.333%' }}
          >
            <h5 className="work-details-title">CLIENTS</h5>
            <div className="work-details-text">
              {(clients || []).map(({ name }) => (
                <div key={name}>{name}</div>
              ))}
            </div>
          </div>
          <div
            className="column is-narrow is-offset-1"
            style={{ maxWidth: '23.333%' }}
          >
            <h5 className="work-details-title">DELIVERABLES</h5>
            <div className="work-details-text">{deliverables}</div>
          </div>
          <div
            className="column is-narrow is-offset-1"
            style={{ maxWidth: '23.333%' }}
          >
            <h5 className="work-details-title">DOWNLOADS</h5>
            <div className="work-details-text">
              {(downloads || []).map(({ name, link }) => (
                <a key={link} href={link}>
                  {name} ›
                </a>
              ))}
            </div>
          </div>
          <div
            className="column is-narrow is-offset-1"
            style={{ maxWidth: '23.333%' }}
          >
            <h5 className="work-details-title">CREDITS</h5>
            <div className="work-details-text">
              {(credits || []).map(({ name, link }) =>
                link ? (
                  <div>
                    <a key={link} href={link}>
                      {name} ›
                    </a>
                  </div>
                ) : (
                  <div>{name}</div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <PreviewCompatibleImage imageInfo={mainImage} />

    <div className="text-presentation">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <div className="preview-text">{preview}</div>
          </div>
          <div className="column is-6 is-offset-1">
            <div className="story-text">{story}</div>
          </div>
        </div>
      </div>
    </div>
    {(gallery_block || []).map(item => (
      <GalleryBlock gallery_block={item} />
    ))}
  </section>
)

WorkTemplate.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
}

const Work = ({ data }) => {
  const { frontmatter: f } = data.markdownRemark

  return (
    <Layout>
      <WorkTemplate
        title={f.title}
        offices={f.offices}
        company={f.company}
        details={f.details}
        mainImage={f.mainImage}
        preview={f.preview}
        story={f.story}
        gallery_block={f.gallery_block}
      />
    </Layout>
  )
}
export default Work

export const workQuery = graphql`
  query Work($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        company
        title
        details {
          offices {
            name
          }
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
            link
          }
        }
        preview
        story
        mainImage {
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
`
