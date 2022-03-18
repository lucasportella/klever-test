import React from 'react';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import AddTokenButton from './Components/AddTokenButton';
import WalletTable from './Components/WalletTable';

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <AddTokenButton />
      <WalletTable />
    </div>
  );
}

export default App;
