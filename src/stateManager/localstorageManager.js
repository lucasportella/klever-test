const storageNewToken = (payload) => {
  if (!localStorage.length) {
    localStorage.setItem('wallet', JSON.stringify([payload]));
  } else {
    const wallet = JSON.parse(localStorage.getItem('wallet'));
    if (wallet.some((currency) => currency.token === payload.token)) {
      throw new Error('Token already exists on wallet');
    } else {
      wallet.push(payload);
      localStorage.setItem('wallet', JSON.stringify(wallet));
    }
  }
};

export default storageNewToken;
