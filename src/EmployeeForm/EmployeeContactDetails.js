import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TextField, FormControl, NativeSelect, Typography, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const EmployeeContactDetails = ({ id: employeeId, handleFormDataChange }) => {
  const [selectType, setSelectType] = useState('');
  const [contact, setContact] = useState([{ id: uuidv4(), label: 'primary', details: '' }]);

  const handleContactNumberChange = (e, id) => {
    const updatedContactDetail = contact.map((contactInfo) => {
      if (contactInfo.id === id) {
        contactInfo.details = e.target.value;
        //contactInfo.label = selectType;
      }
      return contactInfo;
    });
    setContact(updatedContactDetail);
    handleFormDataChange(updatedContactDetail, 'contactDetails', employeeId);
  };
  const handleSelectChange = (e, id) => {
    setSelectType('');
    setSelectType(e.target.value);
  };

  const handleAddMoreContact = () => {
    if (contact.length < 4) {
      setContact([...contact, { id: uuidv4(), label: selectType, details: '' }]);
    } else {
      alert('Maximun 4 phone numbers per employee');
    }
  };

  const handleRemoveContact = (id) => {
    if (contact.length > 1) {
      const updatedContactDetails = contact.filter((contactInfo) => {
        return contactInfo.id !== id;
      });
      setContact(updatedContactDetails);
    }
  };
  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: '.5rem' }}>
        <Grid item xs={4}>
          <Typography variant='h5' color='textSecondary'>
            Contact:
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControl variant='outlined'>
            <NativeSelect
              value={selectType}
              onChange={(e) => {
                handleSelectChange(e);
              }}
              style={{ width: '14rem' }}>
              <option value=''>Select below contact</option>
              <option value='primary'>Primary</option>
              <option value='emergency'>Emergency</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        {selectType.length > 0 && (
          <Grid item xs={4}>
            <AddCircleIcon onClick={handleAddMoreContact} style={{ cursor: 'pointer' }} />
          </Grid>
        )}
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: '.5rem' }}>
        <Grid item xs={12}>
          {contact.map((cInfo, idx) => {
            const { id } = cInfo;
            return (
              <div key={idx} style={{ display: 'flex', marginBottom: '1rem' }}>
                <Grid item xs={4}></Grid>

                {selectType.length > 0 && (
                  <>
                    <Grid item xs={4}>
                      <TextField size='small' variant='outlined' type='number' onChange={(e) => handleContactNumberChange(e, id)} style={{ marginLeft: '.5rem' }} />
                    </Grid>
                    <Grid item xs={4}>
                      <DeleteIcon
                        variant='contained'
                        onClick={() => {
                          handleRemoveContact(id);
                        }}
                        size='small'
                        color='secondary'
                        style={{ marginLeft: '1rem', cursor: 'pointer' }}>
                        Delete
                      </DeleteIcon>
                    </Grid>
                  </>
                )}
              </div>
            );
          })}
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: '.5rem' }}></Grid>
    </>
  );
};

export default EmployeeContactDetails;
