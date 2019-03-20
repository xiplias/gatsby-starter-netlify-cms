import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";

export default class NewsIndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <PageTitle
              preTitle="COMPANY NEWS"
              title="ANNOUNCEMENTS, MUSINGS AND HEARSAY"
              description="In an industry of continuous change, your people are the only constant. Shape is a multicultural, multinational and multi-discipline team of thinkers, adapters and most importantly, doers."
            />

            <div className="container">
              <div className="content">
                <div className="columns is-multiline">
                  {posts.map(({ node: post }) => (
                    <div key={post.id} className="column is-4">
                      <div
                        className="mock-image"
                        style={{ width: "100%", height: 250 }}
                      >
                        &nbsp;
                      </div>
                      <h3 className="news-item-title">
                        <Link to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                      </h3>
                      <p>
                        <small className="news-item-date">
                          {post.frontmatter.date}
                        </small>
                        {post.excerpt}
                        <br />
                        <br />
                        <Link to={post.fields.slug}>Read more ›</Link>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

NewsIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query NewsIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "news-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
