import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement =   getByText(/Choose the Script Service you want to load into the Script Editor/i);
  expect(linkElement).toBeInTheDocument();
});
