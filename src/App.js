import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import EmployeeFormContainer from './EmployeeForm/EmployeeFormContainer';
import ShowEmployeeData from './EmployeeForm/ShowEmployeeData';

const App = () => {
  const data = { id: uuidv4(), name: '', designation: '', contactDetails: [], skills: [], dateOfBirth: '' };
  const [employeeFormData, setEmployeeFormData] = useState([data]);
  const [open, setOpen] = useState(false);
  const [formError, setFormError] = useState({});
  const error = {};

  const handleAddEmployeeForm = () => {
    setEmployeeFormData([...employeeFormData, data]);
  };

  const handleFormDataChange = (employeeData, textField, employeeId, skills) => {
    const updatedEmployeeFormData = employeeFormData.map((formData) => {
      if (formData.id === employeeId) {
        formData[textField] = employeeData;
      }
      return formData;
    });
    setEmployeeFormData(updatedEmployeeFormData);
  };

  const handleValidation = () => {
    employeeFormData.map((employee) => {
      const { name, designation, contactDetails, skills, dateOfBirth } = employee;
      if (name.length === 0) {
        error.name = 'Name  Required';
      }
      if (designation.length === 0) {
        error.designation = 'Designation Required';
      }

      if (!contactDetails.every((ele) => ele.details.length == 10) || contactDetails.length === 0) {
        error.contactDetails = 'Contact Required (10 Digits)';
      }
      if (!skills.every((ele) => ele.details.length > 0)) {
        error.skills = 'Skills is required';
      }
      if (dateOfBirth.length === 0) {
        error.dateOfBirth = 'DOB required';
      }
    });
  };

  const handleModalClose = () => {
    handleValidation();
    if (Object.keys(error).length === 0) {
      setFormError({});
      setOpen(!open);
    } else {
      setFormError(error);
    }
  };

  const handleRemoveEmployeeForm = (id) => {
    if (employeeFormData.length > 1) {
      const removeFormData = employeeFormData.filter((ele, idx) => idx !== id);
      setEmployeeFormData(removeFormData);
    }
  };
  return (
    <>
      <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper style={{ padding: 50, width: '50rem', margin: '5rem auto' }}>
          <Grid align='center' style={{ marginBottom: '1rem' }}>
            <Avatar style={{ backgroundColor: '#3f51b5', marginBottom: '1rem' }}>
              <PersonAddIcon />
            </Avatar>
            <Typography variant='h4' style={{ marginBottom: '2rem' }}>
              <strong>
                <u>Employee Form Data</u>
              </strong>
            </Typography>
          </Grid>

          {employeeFormData.length > 0 &&
            employeeFormData.map((formData, idx) => {
              return (
                <div key={idx}>
                  <Grid container spacing={3} style={{ marginBottom: '.5rem' }}>
                    <Grid item xs={12}>
                      <Typography variant='h5' gutterBottom style={{ color: 'rgb(72, 167, 212)', textAlign: 'center' }}>
                        <strong>
                          <u>Please Fill below Employee #{idx + 1} details:</u>
                        </strong>
                        {employeeFormData.length > 1 && (
                          <DeleteIcon onClick={() => handleRemoveEmployeeForm(idx)} variant='contained' size='small' color='secondary' style={{ cursor: 'pointer', marginLeft: '1rem' }}>
                            Delete
                          </DeleteIcon>
                        )}
                      </Typography>
                    </Grid>

                    <EmployeeFormContainer {...formData} formError={formError} key={idx} handleFormDataChange={handleFormDataChange} style={{ marginBottom: '10rem' }} error={error} />
                  </Grid>
                </div>
              );
            })}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button variant='contained' onClick={handleAddEmployeeForm} style={{ marginBottom: '1rem', backgroundColor: 'green', color: 'white' }}>
              Add Employee
            </Button>
            <Button variant='contained' color='primary' onClick={handleModalClose}>
              View Data
            </Button>
          </div>
        </Paper>
      </Grid>
      {open && <ShowEmployeeData employeeFormData={employeeFormData} handleModalClose={handleModalClose} open={open} />}
    </>
  );
};

export default App;
