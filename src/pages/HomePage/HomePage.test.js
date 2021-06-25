import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('HomePage', () => {
  it('renders the component', () => {
    const { getByTestId } = render(<HomePage />);
    const component = getByTestId('home-page');
    expect(component).toBeInTheDocument();
  });
});
