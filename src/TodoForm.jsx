import React, { useState, useCallback } from 'react';

const TodoForm = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChangeInput = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChangeInput}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
