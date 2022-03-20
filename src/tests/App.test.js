import { screen } from '@testing-library/react';
import RenderWithRouter from './RenderWithRouter';
import App from '../App';

describe('test pages static content', () => {
  RenderWithRouter(<App />);

  test('if Home page elements are correctly rendered', () => {
    const title = screen.getByAltText(/Klever logo/i);
    const headerTitle = screen.getByText(/Wish Wallet/);
    const headerLogo = screen.getByAltText(/shooting star/i);
    const addTokenButton = screen.getByRole('button');
    const tHeadTokens = screen.getByText(/Tokens/);
    const tHeadBalance = screen.getByText(/Balance/);
    const noTokensMsg = screen.getByText(/No tokens added yet./);

    expect(addTokenButton).toHaveTextContent(/Add Token/);

    const headerElements = [
      title,
      headerTitle,
      headerLogo,
      addTokenButton,
      tHeadTokens,
      tHeadBalance,
      noTokensMsg];

    headerElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  test('if AddToken page elements are correctly rendered', () => {
    
  });
});
