import React from 'react';
import { Container, Grid, TextField } from '@mui/material';
import ContactCard from './ContactCard';

const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}>
          <TextField id='searchContacts' label='Search' variant='outlined' />
        </Grid>

        <Grid item>
          <ContactCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
