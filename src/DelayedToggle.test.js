import React from 'react';
import DelayedToggle from './DelayedToggle';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');
    userEvent.click(toggleButton);
    await screen.findByText('야호!!', undefined, { timeout: 2000 }); // 콜백 안의 함수가 에러를 발생시키지 않을 때 까지 기다립니다.
  });
});
