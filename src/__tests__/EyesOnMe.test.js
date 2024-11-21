import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EyesOnMe from '../components/EyesOnMe'; // Adjust path based on actual structure

beforeEach(() => {
  jest.clearAllMocks(); // Clear mocks before each test
});

test('displays a button with the text "Eyes on me"', () => {
  render(<EyesOnMe />);
  const button = screen.queryByText(/Eyes on me/i);
  expect(button).toBeInTheDocument();
});

test('focusing the button triggers console output', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  render(<EyesOnMe />);

  const button = screen.getByText(/Eyes on me/i);
  fireEvent.focus(button);

  expect(consoleSpy).toHaveBeenCalledWith('Good!');
  consoleSpy.mockRestore();
});

test('removing focus (blur) on the button triggers console output', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  render(<EyesOnMe />);

  const button = screen.getByText(/Eyes on me/i);
  fireEvent.blur(button);

  expect(consoleSpy).toHaveBeenCalledWith('Hey! Eyes on me!');
  consoleSpy.mockRestore();
});
