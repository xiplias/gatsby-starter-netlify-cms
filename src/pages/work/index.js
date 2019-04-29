import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import ImageBox from "../../components/ImageBox";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <PageTitle
              preTitle="OUR WORK"
              title="AWARD WINNING products
              that put people first"
              description="For 9 years, we have been in the eye of the digital transformation whirlwind, untangling complexity, enhancing experiences, reducing costs, perfecting execution. Kindly find a few examples of recent work we have done below."
            />
            <div className="container">
              <div className="columns is-multiline">
                {posts.map(({ node: post }) => (
                  <div key={post.id} className="column is-4 work-item">
                    <ImageBox
                      height={425}
                      title={post.frontmatter.title}
                      subtitle={post.frontmatter.company}
                      to={post.fields.slug}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
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
            company
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
