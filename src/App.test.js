import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByRole } = render(<App />);
  const component = getByRole('main');
  expect(component).toBeInTheDocument();
});
