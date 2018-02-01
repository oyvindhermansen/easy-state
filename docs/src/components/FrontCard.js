import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BaseLink } from './Common';

const StyledFrontCard = styled.div``;

const StyledTitle = styled.h2`
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 0.25rem;
  font-size: 1.25rem;
`;

const StyledBody = styled.p`
  margin: 0;
`;

const FrontCard = ({ title, body }) => {
  return (
    <StyledFrontCard>
      <StyledTitle>{title}</StyledTitle>
      <StyledBody>{body}</StyledBody>
    </StyledFrontCard>
  );
};

FrontCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default FrontCard;
