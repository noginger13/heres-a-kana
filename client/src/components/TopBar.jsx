import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = ({ view, setView, isLoggedIn }) => {
  const onClick = () => {
    setView(!view);
  };

  let viewButton;
  if (!view) {
    viewButton = (
      <Button onClick={onClick} color="inherit">
        Review Cards
      </Button>
    );
  } else {
    viewButton = (
      <Button onClick={onClick} color="inherit">
        Show Cards
      </Button>
    );
  }

  let loginButton;
  if (isLoggedIn) {
    loginButton = (
      <Button href="/logout/" color="inherit">
        Logout
      </Button>
    );
  } else {
    loginButton = (
      <Button href="/login/" color="inherit">
        Login
      </Button>
    );
  }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Here's a Kana!
            </Typography>
            {viewButton}
            {loginButton}
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default TopBar;
