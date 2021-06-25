import React from 'react';
import { render } from '@testing-library/react';
import CatchPokemonPage from './CatchPokemonPage';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('CatchPokemonPage', () => {
  it('renders the component', () => {
    const { getByTestId } = render(<CatchPokemonPage />);
    const component = getByTestId('catch-pokemon-page');
    expect(component).toBeInTheDocument();
  });
});
