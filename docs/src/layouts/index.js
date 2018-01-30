import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from './Header';
import './index.css';

const StyledChildren = styled.div`
  position: relative;
  top: 50px;
`;

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title="Easy State"
      meta={[
        { name: 'description', content: 'Simple state management' },
        { name: 'keywords', content: 'state' }
      ]}
    />
    <Header />
    <StyledChildren>{children()}</StyledChildren>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
