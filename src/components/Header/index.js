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

const LeftNav = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  justify-content: start;
  flex: 9;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  leftNav: {
    marginLeft: 20,
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Dwello
          </Typography>
          <LeftNav>
            <Button color="inherit">Home</Button>
            <Button color="inherit">TODO</Button>
          </LeftNav>
          <RightNav>
            <Button color="inherit">
              Login
            </Button>
          </RightNav>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
