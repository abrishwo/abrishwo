import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Contact } from '../Contact';

// Mock the global fetch function
global.fetch = jest.fn();

describe('Contact Form', () => {
  beforeEach(() => {
    // Reset mocks before each test
    (fetch as jest.Mock).mockClear();
  });

  it('submits the form successfully', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Submission successful' }),
    });

    render(<Contact />);

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Your Message'), { target: { value: 'This is a test message.' } });

    // Click the submit button
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Wait for the success message to appear
    await waitFor(() => {
      expect(screen.getByText('Thank you for your message! I will get back to you soon.')).toBeInTheDocument();
    });

    // Check if fetch was called correctly
    expect(fetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'This is a test message.',
        honeypot: '',
      }),
    });
  });

  it('shows an error message when submission fails', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Failed to send.' }),
    });

    render(<Contact />);

    // Fill out and submit the form
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'jane.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Your Message'), { target: { value: 'Another message.' } });
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText('Failed to send.')).toBeInTheDocument();
    });
  });
});
