import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const BaseLink = styled(({ ...rest }) => <Link {...rest} />)``;

const BaseButton = BaseLink.extend`
  padding: 0.8125rem 2rem;
  font-family: sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  border-radius: 3px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  display: inline-block;

  &:hover {
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
  }
`;

const PrimaryButton = BaseButton.extend`
  background-color: #eae151;
  color: #000000;
`;

const SecondaryButton = BaseButton.extend`
  background-color: #000000;
  color: #ffffff;
`;

const ExternalPrimaryButton = PrimaryButton.withComponent('a');
const ExternalSecondaryButton = SecondaryButton.withComponent('a');

export {
  BaseLink,
  PrimaryButton,
  SecondaryButton,
  ExternalPrimaryButton,
  ExternalSecondaryButton
};
