import { useState } from "react";

export default function Team() {
  const [player, setPlayer] = useState(0);

  const handlePlayer = () => {
    const newPlayer = player + 1;
    setPlayer(newPlayer);
  };
  const handleDeductPlayer = () => {
    setPlayer(player - 1);
  };

  return (
    <div className="border-8 border-rose-700 mx-96 text-center">
      <h3 className="text-4xl rounded">Counter {player}</h3>
      <button className="text-4xl  mr-10" onClick={handlePlayer}>
        Add Player
      </button>
      <button className="text-4xl text-center" onClick={handleDeductPlayer}>
        Deducted Player
      </button>
    </div>
  );
}
