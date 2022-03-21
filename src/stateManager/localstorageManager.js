const loadAllSavedTokens = () => JSON.parse(localStorage.getItem('wallet'));

const storageNewToken = ({ token, balance }) => {
  const formattedPayload = { token: token.toUpperCase(), balance };
  if (!loadAllSavedTokens()) {
    localStorage.setItem('wallet', JSON.stringify([formattedPayload]));
  } else {
    const wallet = loadAllSavedTokens();
    if (wallet.some((currency) => currency.token === formattedPayload.token)) {
      throw new Error('Token already exists on wallet');
    }
    wallet.push(formattedPayload);
    localStorage.setItem('wallet', JSON.stringify(wallet));
  }
};

const storageEditToken = (prevState, { token, balance }) => {
  const formattedPayload = { token: token.toUpperCase(), balance };
  const wallet = loadAllSavedTokens();
  if (wallet
    .some((currency) => currency.token === formattedPayload.token
    && prevState.token !== formattedPayload.token)) {
    throw new Error('Token already exists on wallet');
  }
  const updatedWallet = wallet
    .map((currency) => (currency.token === prevState.token ? formattedPayload : currency));
  localStorage.setItem('wallet', JSON.stringify(updatedWallet));
};

const storageDeleteToken = ({ token, balance }) => {
  const formattedPayload = { token: token.toUpperCase(), balance };
  const wallet = loadAllSavedTokens();
  const updatedWallet = wallet.filter((currency) => currency.token !== formattedPayload.token);
  localStorage.setItem('wallet', JSON.stringify(updatedWallet));
};

export {
  storageNewToken, loadAllSavedTokens, storageEditToken, storageDeleteToken,
};
