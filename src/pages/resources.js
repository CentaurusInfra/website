import React, { useState } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import useDropdown from "../hooks/useDropdown";
import FAQ from "../components/FAQ";
import config from "../../data/SiteConfig";

// Modify this to add/remove categories
const RESOURCES_CATEGORIES = [
  "Whitepaper",
  "Presentations",
  "Talks & Videos",
  "Events",
  "FAQs",
];

const Resources = ({ data }) => {
  const { toggle, collapsing, toggleMenuRef, handleToggle } = useDropdown();
  const [category, setCategory] = useState(0);
  const selectedCategory = RESOURCES_CATEGORIES[category];

  const postEdges = data.allMarkdownRemark.edges;
  const postEdgesByCategory = {};
  postEdges.forEach((postEdge) => {
    const key = postEdge.node.frontmatter.category.toLowerCase();
    if (!postEdgesByCategory[key]) postEdgesByCategory[key] = [];
    postEdgesByCategory[key].push(postEdge);
  });

  const renderMenuLink = (index) => {
    const name = RESOURCES_CATEGORIES[index];
    const handleMenuClick = () => {
      setCategory(index);
      if (window.innerWidth < 767) handleToggle(toggle);
    };

    return (
      <li className="dropdown-item" onClick={handleMenuClick} key={name}>
        <div className={`menu-link ${category === index ? "active" : ""}`}>
          {name}
        </div>
      </li>
    );
  };

  return (
    <Layout>
      <Helmet title={`Resources | ${config.siteTitle}`} />

      <div className="page-header">
        <h1>Centaurus Resources</h1>
      </div>

      <div className="resources-container container">
        <div className="resources-side-menu">
          <div
            className="dropdown-item dropdown-toggle"
            onClick={() => handleToggle(toggle)}
          >
            {selectedCategory}
          </div>
          <ul
            className={`dropdown ${toggle ? "show" : ""} ${
              collapsing ? "collapsing" : ""
            }`}
            ref={toggleMenuRef}
          >
            {RESOURCES_CATEGORIES.map((_, index) => renderMenuLink(index))}
          </ul>
        </div>

        <div className="resources-posts">
          {selectedCategory.toLowerCase() === "faqs" ? (
            <FAQ />
          ) : (
            <PostListing
              postEdges={
                postEdgesByCategory[selectedCategory.toLowerCase()] || []
              }
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ResourcesQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "resources" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            category
            url
            author
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;

export default Resources;
