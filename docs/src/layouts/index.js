import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Easy State"
      meta={[
        { name: 'description', content: 'Simple state management' },
        { name: 'keywords', content: 'state' }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
