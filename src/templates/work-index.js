import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

export default class WorkIndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { title, pretitle, description } = data.markdownRemark.frontmatter;
    console.log(data);

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <PageTitle
              preTitle={pretitle}
              title={title}
              description={description}
            />
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{ padding: "2em 0" }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <small>{post.frontmatter.date}</small>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

WorkIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "work" } } }
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

    markdownRemark(frontmatter: { templateKey: { eq: "work-index" } }) {
      frontmatter {
        title
        pretitle
        description
      }
    }
  }
`;
