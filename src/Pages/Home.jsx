import React from 'react';
import Header from '../Components/SharedComponents/Header';
import SubHeader from '../Components/SharedComponents/SubHeader';
import AddTokenButton from '../Components/HomeComponents/AddTokenButton';
import WalletTable from '../Components/HomeComponents/WalletTable';

function Home() {
  return (
    <div>
      <Header />
      <SubHeader />
      <AddTokenButton />
      <WalletTable />
    </div>
  );
}

export default Home;
