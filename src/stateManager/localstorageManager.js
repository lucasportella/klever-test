const loadAllSavedTokens = () => JSON.parse(localStorage.getItem('wallet'));

const storageNewToken = (payload) => {
  if (!localStorage.length) {
    localStorage.setItem('wallet', JSON.stringify([payload]));
  } else {
    const wallet = loadAllSavedTokens();
    if (wallet.some((currency) => currency.token === payload.token)) {
      throw new Error('Token already exists on wallet');
    }
    wallet.push(payload);
    localStorage.setItem('wallet', JSON.stringify(wallet));
  }
};

const storageEditToken = (prevState, payload) => {
  const wallet = loadAllSavedTokens();
  if (wallet
    .some((currency) => currency.token === payload.token
    && prevState.token !== payload.token)) {
    throw new Error('Token already exists on wallet');
  }
  const updatedWallet = wallet
    .map((currency) => (currency.token === prevState.token ? payload : currency));
  localStorage.setItem('wallet', JSON.stringify(updatedWallet));
};

const storageDeleteToken = (payload) => {
  const wallet = loadAllSavedTokens();
  const updatedWallet = wallet.filter((currency) => currency.token !== payload.token);
  localStorage.setItem('wallet', JSON.stringify(updatedWallet));
};

export {
  storageNewToken, loadAllSavedTokens, storageEditToken, storageDeleteToken,
};
