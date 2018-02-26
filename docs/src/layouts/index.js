import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from './Header';
import DocsNav from './DocsNav';
import MobileMenuButton from '../components/MobileMenuButton';
import facebookImage from '../utils/images/facebookImage.png';
import Footer from './Footer';
import './index.css';
require('prismjs/themes/prism-okaidia.css');

const StyledChildren = styled.div`
  position: relative;
  top: 50px;
`;

export default class TemplateWrapper extends Component {
  state = {
    docsNavbarOpen: false
  };

  handleToggleMobileNavBar = () => {
    this.setState({
      docsNavbarOpen: !this.state.docsNavbarOpen
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { data, children, location } = this.props;
    const { docsNavbarOpen } = this.state;
    const showDocsNavbar = location.pathname.includes('/docs/') ? true : false;
    const ogMetaImg =
      process.env.NODE_ENV === 'production'
        ? `https://oyvindhermansen.github.io${facebookImage}`
        : facebookImage;

    return (
      <div>
        <Helmet
          title="Easy State"
          htmlAttributes={{ lang: 'en' }}
          meta={[
            { name: 'title', content: 'Easy State' },
            { name: 'description', content: 'Manage your UI state with ease.' },
            { name: 'keywords', content: 'state' },
            { property: 'og:title', content: 'Easy State' },
            {
              property: 'og:description',
              content: 'Manage your UI state with ease.'
            },
            {
              property: 'og:image',
              content: ogMetaImg
            }
          ]}
        />
        <Header location={location} />
        {showDocsNavbar && (
          <DocsNav
            className={docsNavbarOpen ? 'mobile-open' : ''}
            navData={data}
            location={location}
          />
        )}
        {showDocsNavbar && (
          <MobileMenuButton onClick={this.handleToggleMobileNavBar} />
        )}
        <StyledChildren>{children()}</StyledChildren>
      </div>
    );
  }
}

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
