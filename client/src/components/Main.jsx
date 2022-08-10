import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

//Components
import KanaCard from './KanaCard.jsx';
import RomajiCard from './RomajiCard.jsx';

const Main = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="80%" sx={{ padding: '15px' }}>
        <Box
          sx={{
            padding: '15px',
            bgcolor: '#cfe8fc',
            height: '100%',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            overflow: 'auto',
            justifyContent: 'space-around',
            flexDirection: 'column'
          }}
        >
          <KanaCard />

          <RomajiCard />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Main;
