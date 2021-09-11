import React from 'react';
import fileDownload from 'js-file-download';

import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogActions, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  innerTable: {
    fontSize: '18px',
    color: '#fff',
    fontWeight: 'normal',
    fontFamily: 'Arial',
  },
}));

const ShowEmployeeData = ({ employeeFormData, open, handleModalClose }) => {
  const classes = useStyles();

  const handleDownload = () => {
    fileDownload(JSON.stringify(employeeFormData), 'employeeFormData.txt');
  };

  return (
    <>
      <Dialog onClose={handleModalClose} aria-labelledby='customized-dialog-title' open={open} fullWidth maxWidth='md' style={{ zIndex: 1, marginTop: '1rem' }}>
        <DialogTitle id='customized-dialog-title' onClose={handleModalClose} style={{ backgroundColor: '#48A7D4' }}>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '35px', display: 'flex', flexDirection: 'cloumn', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#FFFFFF' }}>Employee Details</span>
          <Grid container>
            <Grid item xs={12} className={classes.innerTable}>
              {employeeFormData.map((employee, idx) => {
                return (
                  <div key={idx}>
                    <Grid container>
                      <Grid item xs={12} className={classes.innerTable}>
                        <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '25px', marginBottom: '1rem', fontWeight: 'bold', color: '#FFFFFF', textDecoration: 'underline', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Employee #{idx + 1}</span>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.innerTable}>
                      <strong>Name: {employee.name}</strong>
                    </Grid>
                    <Grid item xs={12} className={classes.innerTable}>
                      <strong>Designation: {employee.designation} </strong>
                    </Grid>
                    {employee.contactDetails.map((contact, idx) => {
                      return (
                        <div key={idx}>
                          <Grid item xs={12} className={classes.innerTable}>
                            <strong>
                              Contact : {contact.label} - {contact.details}
                            </strong>
                          </Grid>
                        </div>
                      );
                    })}
                    {employee.skills.map((skill) => {
                      return (
                        <div key={skill.id}>
                          <Grid item xs={12} className={classes.innerTable}>
                            <strong>Skills: {skill.details} </strong>
                          </Grid>
                        </div>
                      );
                    })}
                    <Grid item xs={12} className={classes.innerTable}>
                      <strong>Date of Birth : {employee.dateOfBirth}</strong>
                    </Grid>
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={handleDownload} style={{ backgroundColor: '#48A7D4', color: '#FFFFFF' }}>
            Download JSON
          </Button>
          <Button onClick={handleModalClose} variant='contained' style={{ backgroundColor: 'red', color: '#FFFFFF' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShowEmployeeData;
