import { useState } from 'react';

interface HeaderProps {
    title: string;
    message: string;
}

const ClickCounter = ({title, message}: HeaderProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{title}</h1>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
      <h4>
        {count >= 10 ? `${message}`: null}
      </h4>
    </div>
  );
};

export default ClickCounter;
