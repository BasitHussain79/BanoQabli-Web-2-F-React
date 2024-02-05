import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    relation: 'personal',
  });

  const inputChangeHandler = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth='md' sx={{ my: 10 }}>
      <Box component='form' autoComplete='off' onSubmit={submitHandler}>
        <Typography variant='h3' mb={4}>
          Add Contact
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              id='fname'
              label='First Name'
              variant='filled'
              value={formData.fname}
              name='fname'
              onChange={inputChangeHandler}
              required
              fullWidth
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              id='lname'
              label='Last Name'
              variant='filled'
              value={formData.lname}
              name='lname'
              onChange={inputChangeHandler}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='email'
              label='Email'
              type='email'
              variant='filled'
              value={formData.email}
              name='email'
              onChange={inputChangeHandler}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='phone'
              label='Phone'
              type='number'
              variant='filled'
              value={formData.phone}
              name='phone'
              onChange={inputChangeHandler}
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormLabel id='relation'>Relation</FormLabel>
              <RadioGroup
                aria-labelledby='relation'
                // defaultValue='Personal'
                value={formData.relation}
                name='relation'
                onChange={inputChangeHandler}
              >
                <FormControlLabel
                  value='personal'
                  control={<Radio />}
                  label='Personal'
                />
                <FormControlLabel
                  value='professional'
                  control={<Radio />}
                  label='Professioanl'
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Button type='submit' variant='contained' sx={{ width: '100%' }}>
            Add Contact
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactForm;
