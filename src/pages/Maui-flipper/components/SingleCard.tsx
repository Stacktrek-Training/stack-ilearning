import './SingleCard.css';

interface SingleCardProps {
  balls: {
    src: string;
    matched: boolean;
    id: number;
  };
  handleChoice: (balls: any) => void;
  flipped: boolean;
  disabled: boolean;
}

export default function SingleCard({
  balls,
  handleChoice,
  flipped,
  disabled,
}: SingleCardProps) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(balls);
    }
  };

  return (
    <div className="balls">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={balls.src} alt="balls front" />
        <img
          className="back"
          src="/assets/Pokeball.png"
          onClick={handleClick}
          alt="balls back"
        />
      </div>
    </div>
  );
}
