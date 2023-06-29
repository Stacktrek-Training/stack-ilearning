import React, { useState, ChangeEvent } from 'react';

type LoginProps = {
  startGame: () => void;
  setUsername: (username: string) => void;
};

const Login = ({ startGame, setUsername }: LoginProps): JSX.Element => {
  const [usernameInput, setUsernameInput] = useState('');
  const [isUsernameEntered, setIsUsernameEntered] = useState(false);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUsernameInput(event.target.value);
  };

  const handleUsernameSubmit = (): void => {
    if (usernameInput.trim() === '') {
      return;
    }

    setUsername(usernameInput);
    setIsUsernameEntered(true);
  };

  const handleStartGame = (): void => {
    startGame();
  };

  return (
    <div className="text-center">
      {isUsernameEntered ? (
        <>
          <button
            onClick={handleStartGame}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20"
          >
            Start Game
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-white text-2xl font-bold mb-5">Login</p>
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={usernameInput}
              onChange={handleUsernameChange}
              className="border rounded py-1 px-2 text-center text-m"
              placeholder="Enter your username"
              style={{ width: '200px', height: '50px' }}
              maxLength={6}
              required
            />
            <button
              onClick={handleUsernameSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Enter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
