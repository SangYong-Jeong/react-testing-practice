import React from 'react';
import TodoList from './TodoList';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<TodoList />', () => {
  // sample data
  const sampleTodos = [
    {
      id: 1,
      text: 'TDD 배우기',
      done: true,
    },
    {
      id: 2,
      text: 'react-testing-library 사용하기',
      done: true,
    },
  ];

  // 렌더링이 잘 되는지
  it('renders todos properly', () => {
    render(<TodoList todos={sampleTodos} />);
    screen.getByText(sampleTodos[0].text);
    screen.getByText(sampleTodos[1].text);
  });

  // onToggle 과 onRemove 가 잘 호출 되는지
  it('calls onToggle and onRemove', () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
    );

    userEvent.click(screen.getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    // 첫 번째 삭제 버튼을 클릭
    userEvent.click(screen.getAllByText('삭제')[0]);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
