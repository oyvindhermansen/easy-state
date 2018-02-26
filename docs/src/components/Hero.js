import React from 'react';
import styled from 'styled-components';
import { PrimaryButton, ExternalSecondaryButton } from './Common';

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  text-align: center;

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#bc4747+0,eb5757+50,d65151+50,ea6262+100 */
  background: rgb(188, 71, 71); /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    rgba(188, 71, 71, 1) 0%,
    rgba(235, 87, 87, 1) 50%,
    rgba(214, 81, 81, 1) 50%,
    rgba(234, 98, 98, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    rgba(188, 71, 71, 1) 0%,
    rgba(235, 87, 87, 1) 50%,
    rgba(214, 81, 81, 1) 50%,
    rgba(234, 98, 98, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    rgba(188, 71, 71, 1) 0%,
    rgba(235, 87, 87, 1) 50%,
    rgba(214, 81, 81, 1) 50%,
    rgba(234, 98, 98, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#bc4747',
      endColorstr='#ea6262',
      GradientType=1
    ); /* IE6-9 fallback on horizontal gradient */
`;

const HeroContentContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

  @media all and (max-width: 966px) {
    max-width: 80%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: #000000;

  @media all and (max-width: 966px) {
    font-size: 2rem;
  }

  span {
    color: #ffffff;
    font-size: 5rem;

    @media all and (max-width: 966px) {
      font-size: 3rem;
    }
  }
`;

const ButtonGroup = styled.div`
  margin-top: 4rem;

  a:first-child {
    margin-right: 2rem;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <HeroContentContainer>
        <HeroTitle>
          Easy JavaScript <span>State</span> Manager
        </HeroTitle>
        <ButtonGroup>
          <PrimaryButton to="/docs/install">Docs</PrimaryButton>
          <ExternalSecondaryButton
            href="https://github.com/oyvindhermansen/easy-state"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github link to Easy State"
          >
            Github
          </ExternalSecondaryButton>
        </ButtonGroup>
      </HeroContentContainer>
    </StyledHero>
  );
};

export default Hero;
