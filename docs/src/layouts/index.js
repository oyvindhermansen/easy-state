import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from './Header';
import DocsNav from './DocsNav';
import './index.css';
require('prismjs/themes/prism-okaidia.css');

const StyledChildren = styled.div`
  position: relative;
  top: 50px;
`;

const TemplateWrapper = ({ data, children, location }) => {
  const showDocsNavbar = location.pathname.includes('/docs/') ? true : false;

  return (
    <div>
      <Helmet
        title="Easy State"
        meta={[
          { name: 'description', content: 'Simple state management' },
          { name: 'keywords', content: 'state' }
        ]}
      />
      <Header location={location} />
      {showDocsNavbar && <DocsNav navData={data} location={location} />}
      <StyledChildren>{children()}</StyledChildren>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const postQuery = graphql`
  query DocsNavQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
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

export default TemplateWrapper;
