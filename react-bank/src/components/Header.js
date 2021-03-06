import React from 'react';
import styled from 'styled-components';
import bg from '../img/bg.svg';
import Nav from './Nav';
import HeaderContent from './HeaderContent';

const HeaderStyle = styled.header`
  background-image: url(${bg});
  /* background-position: center; */
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  .header-content {
    padding: 0 9rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <div className="header-content">
        <Nav />
        <HeaderContent />
      </div>
    </HeaderStyle>
  );
}
