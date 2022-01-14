import React from 'react';
import phone from '../img/phone.svg';
import styled from 'styled-components';
import ButtonSecondary from './ButtonSecondary';

const HeaderContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    .white {
      color: white;
    }
    h1 {
      margin-top: 2rem;
      font-size: 4rem;
      font-weight: 600;
      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }
    .white {
      padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }
`;

export default function HeaderContent() {
  return (
    <HeaderContentStyled>
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
      <div className="right-part">
        <img src={phone} alt="phone" />
      </div>
    </HeaderContentStyled>
  );
}
