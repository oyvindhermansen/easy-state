import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Container, Marginer } from '../components/Common';

const MainMarkdown = styled.div`
  height: 500px;
  max-width: 40rem;
  width: 100%;
  margin: 0 0 auto 250px;
  padding: 0 2rem;
`;

export default function Template({ data }) {
  const { markdownRemark: { frontmatter, html } } = data;

  return (
    <div>
      <Marginer>
        <MainMarkdown>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </MainMarkdown>
      </Marginer>
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
