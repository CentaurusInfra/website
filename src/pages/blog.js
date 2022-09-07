import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import PostListing from "../components/PostListing";

import config from "../../data/SiteConfig";

const Blog = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <div className="page-header">
        <h1>Centaurus Blog</h1>
      </div>
      <div className="blog-container container">
        <div className="blog-posts">
          <PostListing postEdges={postEdges} />
        </div>

        <div className="blog-side-menu">
          <h4 className="blog-side-menu__heading">Join our community</h4>
          <div className="projects">
            <div className="arktos">
              <h5 className="heading">Centaurus</h5>
              <a
                className="link"
                href="https://github.com/centaurusinfra"
              >
                Github
              </a>
              <a
                className="link"
                href="https://github.com/CentaurusInfra/arktos/discussions"
              >
                Centaurus Community
              </a>
              <a
                className="link"
                href="centaurusinfra@googlegroups.com "
              >
                Email Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            url
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;

export default Blog;
