import React from 'react';
import styled from 'styled-components';

const ButtonPrimaryStyle = styled.button`
  background-color: #00a8ff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  margin-top: 20px;
  outline: none;
  padding: 0 20px;
`;

export default function ButtonPrimary({ name }) {
  return <ButtonPrimaryStyle>{name}</ButtonPrimaryStyle>;
}
