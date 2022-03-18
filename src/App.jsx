import React from 'react';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import AddTokenButton from './Components/AddTokenButton';
import WalletTable from './Components/WalletTable';
import AddTokenHeader from './Components/AddTokenHeader';
import AddTokenForm from './Components/AddTokenForm';
import EditTokenForm from './Components/EditTokenForm';

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <AddTokenButton />
      <WalletTable />
      <AddTokenHeader />
      <AddTokenForm />
      <EditTokenForm />
    </div>
  );
}

export default App;
