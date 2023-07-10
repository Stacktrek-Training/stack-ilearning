import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

interface NavbarProps {
  gameStarted: boolean;
  handleLogout: () => void;
  username: string;
  restartGame: () => void; // Added restartGame function
}

const Style: React.FC<NavbarProps> = ({
  gameStarted,
  handleLogout,
  username,
  restartGame,
}) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogoutClick = () => {
    handleLogout();
    restartGame(); // Restart the game
  };

  return (
    <nav className="bg-gray-900">
      <div className="xcontainer mx-auto px-2 py-1 flex items-center justify-between mt-10">
        <div>
          <a href="https://stacktrek.com/" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="mt-x" />
          </a>
        </div>
        <ul className="flex items-center justify-center space-x-4 mt-4">
          <li className="mr-12">
            <div>
              <a
                href="http://localhost:3000/games/GuessTheWord/"
                className="font-black"
              >
                <span className="text-blue-600 font-black text-3xl border-blue-400 pb-2 font-bold">
                  GUESS THE
                </span>
                <span className="text-orange-600 font-black text-3xl border-orange-500 pb-2 font-bold">
                  WORD
                </span>
              </a>
            </div>
          </li>
        </ul>
        {gameStarted && (
          <div className="flex items-center space-x-3">
            <p className="text-white text-lg welcome-message mt-4">
              Hi, {username}!
            </p>
            <button
              onClick={handleLogoutClick}
              className="bg-gray-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Style;
