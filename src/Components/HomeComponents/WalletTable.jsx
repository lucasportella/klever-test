import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loadAllSavedTokens } from '../../stateManager/localstorageManager';
import edit from '../../assets/edit.png';

function WalletTable() {
  const Button = styled.h1`
  background-color: teal;
  color: white;
  `;

  const savedTokens = loadAllSavedTokens();
  const renderTableContent = () => {
    if (savedTokens && savedTokens.length) {
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
    <div>
      <Button>styled component!</Button>
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
      {savedTokens && savedTokens.length ? null : <div style={{ display: 'flex', justifyContent: 'center', margin: '2%' }}>No tokens added yet.</div>}
    </div>
  );
}

export default WalletTable;
