/* eslint-disable no-undef */
import {
  storageNewToken, loadAllSavedTokens, storageEditToken, storageDeleteToken,
} from '../stateManager/localstorageManager';

describe('test functions from localStorageManager file', () => {
  beforeAll(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  const payload1 = { token: 'KLV', balance: '200' };
  const payload2 = { token: 'BTC', balance: '1' };
  const payload3 = { token: 'ETH', balance: '12.541' };

  describe('test loadAllSavedTokens function', () => {
    test('function wallet key return content', () => {
      localStorage.setItem('wallet', JSON.stringify([payload1, payload2, payload3]));
      const allSavedTokens = loadAllSavedTokens();
      expect(allSavedTokens).toEqual([payload1, payload2, payload3]);
    });
  });

  describe('test storageNewToken function', () => {
    test('when localStorage is empty', () => {
      expect(localStorage.length).toBe(0);

      storageNewToken(payload1);
      storageNewToken(payload2);
      storageNewToken(payload3);

      expect(localStorage.length).toBe(1);

      const wallet = JSON.parse(localStorage.getItem('wallet'));
      expect(wallet).toEqual([payload1, payload2, payload3]);
    });

    test('when throws repeated token error', () => {
      storageNewToken(payload1);
      expect(() => storageNewToken(payload1)).toThrowError(/Token already exists on wallet/);
    });
  });

  describe('test storageEditToken function', () => {
    test('wallet change of values', () => {
      storageNewToken(payload1);
      const newValues = { token: 'ADA', balance: '234.32' };
      storageEditToken(payload1, newValues);
      const wallet = loadAllSavedTokens();
      expect(wallet).toEqual([newValues]);
    });
  });

  describe('test storageDeleteToken function', () => {
    test('when a token is removed', () => {
      storageNewToken(payload1);
      let wallet = loadAllSavedTokens();
      expect(wallet.length).toBe(1);
      storageDeleteToken(payload1);
      wallet = loadAllSavedTokens();
      expect(wallet.length).toBe(0);
    });
  });
});
