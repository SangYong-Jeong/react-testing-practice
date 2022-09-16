import React, { useState } from 'react';

function Switch() {
  const [disabled, setDisabled] = useState(false);
  const [on, setOn] = useState(false);

  const handleClick = () => {
    setDisabled(true);
    // TODO: clean up
    setTimeout(() => {
      setOn(!on);
      setDisabled(false);
    }, 1000);
  };

  return (
    <button disabled={disabled} onClick={handleClick}>
      {on ? 'ON' : 'OFF'}
    </button>
  );
}

export default Switch;
