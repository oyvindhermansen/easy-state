import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FooterWrapper = styled.footer`
  font-size: 0.875rem;
  color: #999;
  padding-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Footer = () => {
  return <FooterWrapper>Made with 💚 in Harestua, Norway</FooterWrapper>;
};

export default Footer;
