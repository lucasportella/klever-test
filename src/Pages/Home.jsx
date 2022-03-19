import React from 'react';
import Header from '../Components/SharedComponents/Header';
import SubHeader from '../Components/SharedComponents/SubHeader';
import WalletTable from '../Components/HomeComponents/WalletTable';
import AddTokenButton from '../Components/HomeComponents/AddTokenButton';

function Home() {
  return (
    <div className="fatherDiv">
      <Header />
      <SubHeader child={<AddTokenButton />} />
      <WalletTable />
    </div>
  );
}

export default Home;
