import React from 'react';
import arrow from '../img/arrow.svg';
import styled from 'styled-components';

const ButtonSecondaryStyled = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-primary);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  border-radius: 12px;
  outline: none;
  padding: 0 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14.9px);
  -webkit-backdrop-filter: blur(14.9px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  img {
    padding-left: 0.5rem;
  }
`;

export default function ButtonSecondary({ name }) {
  return (
    <ButtonSecondaryStyled>
      {name} <img src={arrow} alt="point" />
    </ButtonSecondaryStyled>
  );
}
