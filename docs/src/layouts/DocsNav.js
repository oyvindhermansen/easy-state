import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BaseLink } from '../components/Common';

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
  z-index: 2;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
`;

const NavListItem = styled.li``;

const NavListItemLink = BaseLink.extend`
  color: #333333;
  text-decoration: none;
  display: block;
  font-size: 0.875rem;
`;

const DocsNav = ({ navData }) => {
  const activeStyle = {
    color: '#EB5757'
  };

  return (
    <Aside>
      <nav>
        <NavList>
          {navData.allMarkdownRemark.edges.map(({ node, location }) => (
            <NavListItem key={node.id}>
              <NavListItemLink
                to={node.frontmatter.path}
                activeStyle={activeStyle}
              >
                {node.frontmatter.title}
              </NavListItemLink>
            </NavListItem>
          ))}
        </NavList>
      </nav>
    </Aside>
  );
};

DocsNav.propTypes = {
  navData: PropTypes.object,
  location: PropTypes.object
};

export default DocsNav;
