import { useState } from 'react';

interface HeaderProps {
    title: string;
    message: string;
    messageMouse: string;
}

const ClickCounter = ({title, message, messageMouse}: HeaderProps) => {
  const [count, setCount] = useState(0);
  const [mouseOver, setMouse] = useState(false);

  const handleMouse = () => {
    setMouse(!mouseOver);
  }

  return (
    <div >
      <h1>{title}</h1>
      <p>Vous avez cliqué {count} fois</p>
      <h2>
        {mouseOver ? `${messageMouse}`: ''}
      </h2>
      <button onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={() => setCount(count + 1)}>Cliquez ici</button>
      <h4>
        {count >= 10 ? `${message}`: null}
      </h4>
    </div>
  );
};

export default ClickCounter;
