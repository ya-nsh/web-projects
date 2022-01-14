import React from 'react';
import styled from 'styled-components';
import ButtonPrimary from './ButtonPrimary';
import logo from '../img/logo.svg';

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 12vh;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: transparent;
  ul {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.7);

  /* Setting a gap between the navbar and the top of the viewport */
  position: relative;
  top: 0.3rem;

  margin-bottom: 1.2rem;
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
