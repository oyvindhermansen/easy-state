import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuButtonWrapper = styled.button`
  display: none;

  @media all and (max-width: 966px) {
    border: 0;
    background: #fafafa;
    outline: none;
    width: 40px;
    display: flex;
    height: 30px;
    position: relative;
    margin-left: auto;
    right: 1rem;
    top: 60px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const MenuBar = styled.div`
  height: 2px;
  background: #000000;
  width: 100%;
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const MobileMenuButton = ({ onClick }) => {
  return (
    <MenuButtonWrapper onClick={onClick}>
      <MenuBar />
      <MenuBar />
      <MenuBar />
    </MenuButtonWrapper>
  );
};

MobileMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default MobileMenuButton;
