import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const EmployeeDate = ({ handleFormDataChange, id }) => {
  const classes = useStyles();
  const handleDateChange = (e) => {
    handleFormDataChange(e.target.value, 'dateOfBirth', id);
  };
  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: '.5rem' }}>
        <Grid item xs={4}>
          <Typography variant='h5' color='textSecondary'>
            Date of Birth:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <form className={classes.container} noValidate>
            <TextField
              onChange={handleDateChange}
              id='date'
              type='date'
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeeDate;
