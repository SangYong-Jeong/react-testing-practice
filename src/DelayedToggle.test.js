import React from 'react';
import DelayedToggle from './DelayedToggle';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');
    userEvent.click(toggleButton);
    await waitFor(() => screen.findByText('야호!!'));
  });
});
