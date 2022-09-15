import React from 'react';
import TodoApp from './TodoApp';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<TodoApp />', () => {
  it('renders TodoForm and TodoList', () => {
    render(<TodoApp />);

    // TodoForm 렌더링 확인
    screen.getByText('등록');

    // TodoList 렌더링 확인
    screen.getByTestId('TodoList');
  });

  it('renders two defaults todos', () => {
    render(<TodoApp />);
    screen.getByText('TDD 배우기');
    screen.getByText('react-testing-library 사용하기');
  });

  it('creates new todo', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    userEvent.type(input, '새 항목 추가하기');

    const submitButton = screen.getByText('등록');
    userEvent.click(submitButton);

    screen.getByText('새 항목 추가하기');
  });
  it('toggles todo', () => {
    render(<TodoApp />);
    const todoText = screen.getByText('TDD 배우기');
    expect(todoText).toHaveStyle('text-decoration: line-through;');

    userEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none;');

    userEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through;');
  });

  it('removes todo', () => {
    render(<TodoApp />);
    const todoText = screen.getByText('TDD 배우기');
    const removeButton = screen.getByTestId('button_1');

    userEvent.click(removeButton);
    expect(todoText).not.toBeInTheDocument(); // 또는 null 인지 아닌지로 확인 가능
  });
});
