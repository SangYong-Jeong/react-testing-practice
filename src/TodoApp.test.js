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

    // screen.get

    userEvent.change();
  });
});
