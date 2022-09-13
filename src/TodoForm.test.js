import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from './TodoForm';

// setup을 통해 공통화 가능 -> 이거 복잡성 관리에 좋다! -> + props는 테스트 케이스에서 관리하고 기본적인 렌더링 및 DOM 선택에 관한 것들만 setup 함수에서 처리하는 방식

describe('<TodoForm />', () => {
  const setup = (props = {}) => {
    render(<TodoForm {...props} />);
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const button = screen.getByText('등록');
    return {
      input,
      button,
    };
  };

  it('has input and a button', () => {
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('changes input', () => {
    const { input } = setup();
    userEvent.type(input, 'TDD 배우기');
    expect(input).toHaveAttribute('value', 'TDD 배우기');
  });

  it('calls onInsert and clears input', () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });

    userEvent.type(input, 'TDD 배우기');
    userEvent.click(button);

    expect(onInsert).toBeCalledWith('TDD 배우기');
    expect(input).toHaveAttribute('value', '');
  });
});
