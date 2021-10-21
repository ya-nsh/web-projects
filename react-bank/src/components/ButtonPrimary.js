import React from 'react';
import styled from 'styled-components';

const ButtonPrimaryStyle = styled.button`
  background-color: #00a8ff;
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
`;

export default function ButtonPrimary({ name }) {
  return <ButtonPrimaryStyle>{name}</ButtonPrimaryStyle>;
}
