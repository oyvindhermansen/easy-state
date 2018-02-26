import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Container, Marginer } from '../components/Common';
import Footer from '../layouts/Footer';

const MainMarkdown = styled.div`
  max-width: 40rem;
  width: 100%;
  margin: 0 0 auto 250px;
  padding: 0 2rem;

  @media all and (max-width: 966px) {
    max-width: 100%;
    margin: 0;
  }
`;

export default class Template extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { markdownRemark: { frontmatter, html } } = this.props.data;

    return (
      <div>
        <Marginer>
          <MainMarkdown>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Footer />
          </MainMarkdown>
        </Marginer>
      </div>
    );
  }
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
