import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/"
  })
}));

describe('NavBar', () => {
  it('renders the component', () => {
    const { getByRole } = render(<NavBar />);
    const component = getByRole('heading');
    expect(component).toBeInTheDocument();
  });
});