import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import logo from '../utils/images/logo.svg';
import githubLogo from '../utils/images/github_mark.png';

const StyledHeader = styled.header`
  background: #ffffff;
  border-bottom: 1px solid #eaeaea;
  padding: 0 2rem;
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  font-family: sans-serif;

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

const GithubMark = styled.img`
  width: 22px;
`;

export default class Header extends Component {
  render() {
    const activeStyle = {
      color: '#EB5757'
    };

    return (
      <StyledHeader>
        <FlexWrapper>
          <Link to="/">
            <Logo src={logo} /> <LogoText>Easy State</LogoText>
          </Link>
          <List>
            <li>
              <Link activeStyle={activeStyle} to="/docs">
                Docs
              </Link>
            </li>
            <li>
              <Link activeStyle={activeStyle} to="/examples">
                Examples
              </Link>
            </li>
            <li>
              <Link activeStyle={activeStyle} to="/motivation">
                Motivation
              </Link>
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
  }
}
