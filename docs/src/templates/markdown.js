import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

export default function Template({ data }) {
  const { markdownRemark: { frontmatter, html } } = data;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
