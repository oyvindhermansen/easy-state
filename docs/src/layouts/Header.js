import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { BaseLink } from '../components/Common';
import logo from '../utils/images/logo.svg';
import githubLogo from '../utils/images/github_mark.png';
import { isActive } from '../utils/isActive';

const StyledHeader = styled.header`
  background: #ffffff;
  border-bottom: 1px solid #eaeaea;
  padding: 0 2rem;
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  font-family: sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @media all and (max-width: 600px) {
    padding: 1rem 2rem;
    height: auto;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  a {
    display: flex;
    align-items: center;
    color: #000000;
    text-decoration: none;
    font-size: 0.8125rem;

    @media all and (max-width: 600px) {
      text-align: center;
      justify-content: center;
    }
  }

  @media all and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 50px;
  margin: 0;
`;

const LogoText = styled.span`
  margin-left: 0.5rem;
  font-weight: bold;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  margin: 0;

  @media all and (max-width: 600px) {
    justify-content: center;
    margin-top: 1rem;
  }

  li {
    margin: 0;
    margin-left: 1.5rem;

    a {
      font-size: 0.8125rem;
      transition: color 0.15s ease-in-out;

      &:hover {
        color: #eb5757;
      }
    }
  }
`;

const HeaderLink = BaseLink.extend`
  ${props =>
    props.activePath &&
    css`
      color: #eb5757;
    `};
`;

const GithubMark = styled.img`
  width: 22px;
`;

const Header = ({ location }) => {
  const activeStyle = {
    color: '#EB5757'
  };

  return (
    <StyledHeader>
      <FlexWrapper>
        <BaseLink to="/">
          <Logo src={logo} /> <LogoText>Easy State</LogoText>
        </BaseLink>
        <List>
          <li>
            <HeaderLink
              activeStyle={activeStyle}
              to="/docs/install"
              isActive={() => isActive(location, '/docs/')}
            >
              Docs
            </HeaderLink>
          </li>
          <li>
            <HeaderLink activeStyle={activeStyle} to="/motivation">
              Motivation
            </HeaderLink>
          </li>
          <li>
            <a href="https://github.com/oyvindhermansen/easy-state">
              <GithubMark src={githubLogo} />
            </a>
          </li>
        </List>
      </FlexWrapper>
    </StyledHeader>
  );
};

export default Header;
