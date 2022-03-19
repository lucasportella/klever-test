import React from 'react';
import { Link } from 'react-router-dom';
import { loadAllSavedTokens } from '../../stateManager/localstorageManager';
import edit from '../../assets/edit.png';

function WalletTable() {
  const renderTableContent = () => {
    const savedTokens = loadAllSavedTokens();
    if (savedTokens) {
      return (savedTokens.map((currency) => (
        <tr key={currency.token}>
          <td>
            <span><Link to="edittoken" state={currency}><img width="15" src={edit} alt="edit" /></Link></span>
            {currency.token.toUpperCase()}
          </td>
          <td>{currency.balance}</td>
        </tr>
      )));
    }
    return null;
  };
  renderTableContent();
  return (
    <table>
      <thead>
        <tr>
          <th>Tokens</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {renderTableContent()}
      </tbody>
    </table>
  );
}

export default WalletTable;
