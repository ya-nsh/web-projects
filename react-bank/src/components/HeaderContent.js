import React from 'react';
import styled from 'styled-components';
import ButtonSecondary from './ButtonSecondary';
const HeaderContentStyled = styled.div``;

export default function HeaderContent() {
  return (
    <diHeaderContentStyledv>
      <div className="left-part">
        <h1>Personal Banking and Finance available everywhere.</h1>
        <p className="white">
          Managing your money through Internet Banking is quick and secure - and
          it only take a few simple steps to register. You can do things like
          pay people, check your balance and manage bills, standing orders and
          direct debits.
        </p>
        <ButtonSecondary name={'Register now'} />
      </div>
      <div className="right-part"></div>
    </diHeaderContentStyledv>
  );
}
