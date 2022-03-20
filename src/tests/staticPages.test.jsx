/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('test pages static content', () => {
  test('if Home page elements are correctly rendered', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const history = createMemoryHistory();
    expect(history.location.pathname).toBe('/');

    const title = screen.getByAltText(/Klever logo/i);
    const headerTitle = screen.getByText(/Wish Wallet/);
    const headerLogo = screen.getByAltText(/shooting star/i);
    const addTokenButton = screen.getByRole('button');
    const tHeadTokens = screen.getByText(/Tokens/);
    const tHeadBalance = screen.getByText(/Balance/);
    const noTokensMsg = screen.getByText(/No tokens added yet./);

    expect(addTokenButton).toHaveTextContent(/Add Token/);

    const pageElements = [
      title, headerTitle, headerLogo, addTokenButton, tHeadTokens, tHeadBalance, noTokensMsg,
    ];

    pageElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  test('if AddToken page elements are correctly rendered', () => {
    render(
      <MemoryRouter initialEntries={['/addtoken']}>
        <App />
      </MemoryRouter>,
    );
    const history = createMemoryHistory();
    expect(history.location.pathname).toBe('/addtoken');

    const title = screen.getByAltText(/Klever logo/i);
    const headerTitle = screen.getByText(/Wish Wallet/);
    const headerLogo = screen.getByAltText(/shooting star/i);
    const backBtn = screen.getByText(/Voltar/);
    const tokenLabel = screen.getByLabelText(/Token/);
    const balanceLabel = screen.getByLabelText(/Balance/);
    const saveBtn = screen.getByText(/Save/);

    const pageElements = [
      title, headerTitle, headerLogo, backBtn, tokenLabel, balanceLabel, balanceLabel, saveBtn,
    ];

    pageElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
