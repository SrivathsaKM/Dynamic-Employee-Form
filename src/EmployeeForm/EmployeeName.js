import React from 'react';
import { TextField, Typography, Grid } from '@material-ui/core';

const EmployeeName = ({ handleFormDataChange, id }) => {
  const handleNameChange = (e) => {
    handleFormDataChange(e.target.value, 'name', id);
  };
  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: '.5rem' }}>
        <Grid item xs={4}>
          <Typography variant='h5' color='textSecondary'>
            Name:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField size='small' variant='outlined' type='text' onChange={handleNameChange} />
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeeName;
