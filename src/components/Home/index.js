import React from 'react';
import Header from '../Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
`;

const HomePage = () => (
  <Wrapper>
    <Header/>
    <h1>TEST</h1>
  </Wrapper>
);

export default HomePage;