import React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import Avatar from './AvatarIcon';

const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  color: red;
`;



const HomePage = () => (
  <Wrapper>
    <Header/>
    <Title>DWELLO</Title>
    <p>Welcome to Dwello! Make a custom list for your household.</p>
    <Avatar letter="D"/>
  </Wrapper>
);

export default HomePage;