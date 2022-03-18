import React from 'react';
import Header from '../Components/SharedComponents/Header';
import SubHeader from '../Components/SharedComponents/SubHeader';
import AddTokenForm from '../Components/AddTokenComponents/AddTokenForm';
import AddTokenHeader from '../Components/AddTokenComponents/AddTokenHeader';

function AddToken() {
  return (
    <div>
      <Header />
      <SubHeader />
      <AddTokenForm />
      <AddTokenHeader />
    </div>
  );
}

export default AddToken;
