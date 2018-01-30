import React from 'react';
import Hero from '../components/Hero';
import frontData from '../utils/frontdata';
import { Container, Marginer, GridContainer } from '../components/Common';
import FrontCard from '../components/FrontCard';

const IndexPage = () => (
  <div>
    <Hero />
    <Container>
      <Marginer>
        <GridContainer>
          {frontData.map(item => (
            <FrontCard key={item.id} title={item.title} body={item.body} />
          ))}
        </GridContainer>
      </Marginer>
    </Container>
  </div>
);

export default IndexPage;
