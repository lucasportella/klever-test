import React from 'react';
import Header from '../Components/SharedComponents/Header';
import SubHeader from '../Components/SharedComponents/SubHeader';
import EditTokenHeader from '../Components/EditTokenComponents/EditTokenHeader';
import EditTokenForm from '../Components/EditTokenComponents/EditTokenForm';

function EditToken() {
  return (
    <div>
      <Header />
      <SubHeader />
      <EditTokenHeader />
      <EditTokenForm />
    </div>
  );
}

export default EditToken;
