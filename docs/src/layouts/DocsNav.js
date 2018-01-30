import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Aside = styled.aside`
  width: 250px;
  height: calc(100vh - 50px);
  overflow-x: scroll;
  background-color: #ffffff;
  border-right: 1px solid #eaeaea;
  position: fixed;
  top: 50px;
  left: 0;
  padding: 2rem;
`;

const DocsNav = ({ data }) => {
  console.log(data);
  return (
    <Aside>
      <p>Documentation</p>
      <p>here comes links</p>
      {/*data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}</h3>
        </div>
      ))*/}
    </Aside>
  );
};

DocsNav.propTypes = {
  data: PropTypes.object
};

export const pageQuery = graphql`
  query docsNavQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default DocsNav;
