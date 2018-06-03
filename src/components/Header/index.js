import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LeftNav = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  justify-content: start;
  flex: 9;
  margin-left: 20px;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const NavButton = styled(Button)`
  margin-left: 10px;
`;

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Header = () => (
  <Wrapper>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Dwello
        </Typography>
        <LeftNav>
          <NavButton color="inherit" href="/">
            Home
          </NavButton>
          <NavButton color="inherit" href="/todo">
            TODO
          </NavButton>
        </LeftNav>
        <RightNav>
          <NavButton color="inherit" href="/login">
            Login
          </NavButton>
        </RightNav>
      </Toolbar>
    </AppBar>
  </Wrapper>
);

export default Header;
