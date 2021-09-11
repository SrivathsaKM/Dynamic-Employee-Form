import React from 'react';

import EmployeeContactDetails from './EmployeeContactDetails';
import EmployeeDate from './EmployeeDate';
import EmployeeDesignation from './EmployeeDesignation';
import EmployeeName from './EmployeeName';
import EmployeeSkills from './EmployeeSkills';

const EmployeeFormContainer = ({ id, handleFormDataChange }) => {
  return (
    <>
      <EmployeeName handleFormDataChange={handleFormDataChange} id={id} />
      <EmployeeDesignation handleFormDataChange={handleFormDataChange} id={id} />
      <EmployeeContactDetails handleFormDataChange={handleFormDataChange} id={id} />
      <EmployeeSkills handleFormDataChange={handleFormDataChange} id={id} />
      <EmployeeDate handleFormDataChange={handleFormDataChange} id={id} />
    </>
  );
};

export default EmployeeFormContainer;
