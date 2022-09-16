import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Switch from './Switch';

describe('<Switch />', () => {
  it('OFF button is enabled initially', () => {
    render(<Switch />);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('OFF');
    expect(button).toBeEnabled();
  });

  it('ON button does not appear initially', () => {
    render(<Switch />);

    const button = screen.queryByRole('button', {
      name: /on/i,
    });

    expect(button).not.toBeInTheDocument();
  });

  it('button is disabled once clicked', () => {
    render(<Switch />);

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(button).toBeDisabled();
  });

  it('ON button will be enabled when clicked', async () => {
    render(<Switch />);

    userEvent.click(screen.getByRole('button'));

    const button = await screen.findByRole(
      'button',
      {
        name: /on/i,
      },
      { timeout: 3000 }
    );

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
