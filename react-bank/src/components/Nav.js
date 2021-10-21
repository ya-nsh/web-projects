import React from 'react';
import styled from 'styled-components';
import ButtonPrimary from './ButtonPrimary';
import logo from '../img/logo.svg';

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
`;

export default function Nav() {
  return (
    <NavStyled>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>
      <ButtonPrimary name={'Sign Up'} />
    </NavStyled>
  );
}
