import React, { useState } from 'react';
import { TextField, Typography, Grid } from '@material-ui/core';

const EmployeeNameDesignation = ({ handleFormDataChange, id, value, formError }) => {
  const handleNameChange = (e) => {
    handleFormDataChange(e.target.value, value, id);
  };
  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: '.5rem' }}>
        <Grid item xs={4}>
          <Typography variant='h5' color='textSecondary' style={{ textTransform: 'capitalize' }}>
            {value} :
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField size='small' variant='outlined' type='text' onChange={handleNameChange} />
          &ensp; {(formError.name || formError.designation) && <span style={{ color: 'red', textTransform: 'capitalize' }}>{value} is required</span>}
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeeNameDesignation;
