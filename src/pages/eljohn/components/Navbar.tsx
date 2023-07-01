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

const Navbar: React.FC<NavbarProps> = ({
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
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <a href="https://stacktrek.com/" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="mb-x" />
          </a>
        </div>
        <ul className="flex items-center justify-center space-x-4">
          <li className="mr-12">
            <div>
              <a
                href="http://localhost:3000/games/GuessTheWord/"
                className="font-black"
              >
                <span className="text-blue-600 font-black text-3xl border-blue-400 pb-2 font-bold mr-1">
                  GUESS THE{" "}
                </span>
                <span className="text-orange-600 font-black text-3xl border-orange-500 pb-2 font-bold">
                  WORD
                </span>
              </a>
            </div>
          </li>
        </ul>
        {gameStarted && (
          <div className="flex items-center space-x-2">
            <p className="text-white text-lg welcome-message">
              Welcome, {username}!
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

export default Navbar;
