import React from 'react';
import { TextField, Typography, Grid } from '@material-ui/core';

const EmployeeDesignation = ({ handleFormDataChange, id }) => {
  const handleEmployeeDesignationChange = (e) => {
    handleFormDataChange(e.target.value, 'designation', id);
  };
  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: '.5rem' }}>
        <Grid item xs={4}>
          <Typography variant='h5' color='textSecondary'>
            Designation:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField size='small' variant='outlined' type='text' onChange={handleEmployeeDesignationChange} />
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeeDesignation;
