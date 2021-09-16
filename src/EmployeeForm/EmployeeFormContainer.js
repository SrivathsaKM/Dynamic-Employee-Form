import React from 'react';

import EmployeeContactDetails from './EmployeeContactDetails';
import EmployeeDate from './EmployeeDate';
import EmployeeSkills from './EmployeeSkills';
import EmployeeNameDesignation from './EmployeeNameDesignation';

const EmployeeFormContainer = ({ id, handleFormDataChange, formError }) => {
  return (
    <>
      <EmployeeNameDesignation value='name' handleFormDataChange={handleFormDataChange} id={id} formError={formError} />
      <EmployeeNameDesignation value='designation' handleFormDataChange={handleFormDataChange} id={id} formError={formError} />
      <EmployeeContactDetails handleFormDataChange={handleFormDataChange} id={id} formError={formError} />
      <EmployeeSkills handleFormDataChange={handleFormDataChange} id={id} formError={formError} />
      <EmployeeDate handleFormDataChange={handleFormDataChange} id={id} formError={formError} />
    </>
  );
};

export default EmployeeFormContainer;
