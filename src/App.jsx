import React from 'react';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import AddTokenButton from './Components/AddTokenButton';
import WalletTable from './Components/WalletTable';
import AddTokenHeader from './Components/AddTokenHeader';
import AddTokenInputs from './Components/AddTokenInputs';

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <AddTokenButton />
      <WalletTable />
      <AddTokenHeader />
      <AddTokenInputs />
    </div>
  );
}

export default App;
