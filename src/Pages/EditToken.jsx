import React from 'react';
import Header from '../Components/SharedComponents/Header';
import SubHeader from '../Components/SharedComponents/SubHeader';
import EditTokenHeader from '../Components/EditTokenComponents/EditTokenHeader';
import EditTokenForm from '../Components/EditTokenComponents/EditTokenForm';
import EditTokenModal from '../Components/EditTokenComponents/EditTokenModal';

function EditToken() {
  return (
    <div>
      <Header />
      <SubHeader />
      <EditTokenHeader />
      <EditTokenForm />
      <EditTokenModal />
    </div>
  );
}

export default EditToken;
