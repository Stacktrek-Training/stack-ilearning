import "./style.css";
import logoImage from "./assets/logo.png";

<div className="container">
  <div className="quote-box">
    <img src={logoImage} alt="Logo" className="logo-image" />
    <p className="quote-text ">{quotes[currentQuoteIndex]}</p>
    <input
      type="text"
      value={typedText}
      onChange={checkInput}
      autoFocus
      className="input-field"
      disabled={!isGameStarted}
    />
    {isGameStarted ? (
      <p>
        Time: {calculateElapsedTime()} | Best Time: {calculateBestTime()}
      </p>
    ) : (
      <button className="start-button" onClick={startGame}>
        Start Game
      </button>
    )}
  </div>
</div>;
