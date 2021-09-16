import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button, Typography, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const EmployeeSkills = ({ id: employeeId, handleFormDataChange, formError }) => {
  const [employeeSkills, setEmployeeSkills] = useState([{ id: uuidv4(), details: '' }]);

  const handleEmployeeSkillsChange = (e, id) => {
    const updatedEmployeeSkills = employeeSkills.map((skills) => {
      if (skills.id === id) {
        skills.details = e.target.value;
      }
      return skills;
    });
    setEmployeeSkills(updatedEmployeeSkills);
    handleFormDataChange(updatedEmployeeSkills, 'skills', employeeId);
  };

  const handleRemoveEmployeeSkills = (id) => {
    if (employeeSkills.length > 1) {
      const removeEmployeeSkills = employeeSkills.filter((skills) => skills.id !== id);
      setEmployeeSkills(removeEmployeeSkills);
    }
  };

  const handleAddEmployeeSkills = () => {
    setEmployeeSkills([...employeeSkills, { id: uuidv4(), details: '' }]);
  };

  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: '.5rem' }}>
        <Grid item xs={4}>
          <Typography variant='h5' color='textSecondary'>
            Skills:
          </Typography>
        </Grid>

        <Grid item xs={4}>
          {employeeSkills.map((skills) => {
            const { id } = skills;
            return (
              <div key={id}>
                <TextField size='small' variant='outlined' type='text' onChange={(e) => handleEmployeeSkillsChange(e, id)} />
                &ensp; {formError.skills && <span style={{ color: 'red', textTransform: 'capitalize' }}>{formError.skills}</span>}
                {employeeSkills.length > 1 && (
                  <Button
                    onClick={() => {
                      handleRemoveEmployeeSkills(id);
                    }}
                    size='small'
                    color='secondary'>
                    remove
                  </Button>
                )}
              </div>
            );
          })}
        </Grid>
        <Grid item xs={4}>
          <AddCircleIcon onClick={handleAddEmployeeSkills} style={{ cursor: 'pointer' }}>
            Add
          </AddCircleIcon>
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeeSkills;
