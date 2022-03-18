import React from 'react';
import { Link } from 'react-router-dom';
import { loadAllSavedTokens } from '../../stateManager/localstorageManager';

function WalletTable() {
  const renderTableContent = () => {
    const savedTokens = loadAllSavedTokens();
    if (savedTokens) {
      return (savedTokens.map((currency) => (
        <tr key={currency.token}>
          <td><Link to="edittoken" state={currency}>a</Link></td>
          <td>{currency.token}</td>
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
          <th aria-label="edit" />
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
