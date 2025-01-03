import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faGear } from "@fortawesome/free-solid-svg-icons";
import Gameover from "../../public/GameOver.png";

const Game: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [highestScore, setHighestScore] = useState<number>(0);

  const correctAnswer = "Flu";

  // Load the highest score from localStorage on component mount
  useEffect(() => {
    const savedHighestScore = localStorage.getItem("highestScore");
    if (savedHighestScore) {
      setHighestScore(Number(savedHighestScore));
    }
  }, []);

  // Save the highest score to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("highestScore", highestScore.toString());
  }, [highestScore]);

  const handleTypingBarClick = () => {
    if (messages.length === 0) {
      setMessages([
        "Hey doc!\n \n Listen... we have a problem. Someone has checked in with a severe headache. What do you think is wrong with him? PLEASE RESPOND ASAP!",
      ]);
    } else if (!showOptions) {
      setShowOptions(true);
    }
  };

  const handleOptionClick = (option: string) => {
    if (option === correctAnswer) {
      setMessages((prevMessages) => [
        ...prevMessages,
        `It's probably ${option}! Check for other symptoms.`,
      ]);
      setCurrentScore((prevScore) => {
        const newScore = prevScore + 1;
        setHighestScore((prevHighest) =>
          newScore > prevHighest ? newScore : prevHighest
        );
        return newScore;
      });
    } else {
      setGameOver(true);
    }
    setShowOptions(false);
  };

  const restartGame = () => {
    setGameOver(false);
    setMessages([]);
    setCurrentScore(0);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <button
          className="mr-4"
          onClick={() => (window.location.href = "/leaderboard")}
        >
          <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold justify-center">Game Title</h1>

        <button>
          <FontAwesomeIcon icon={faGear} className="h-6 w-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 p-3 rounded-2xl max-w-[70%] ${
              index % 2 === 0
                ? "bg-blue-500 text-white self-start rounded-bl-none"
                : "bg-green-500 text-white self-end rounded-br-none"
            }`}
          >
            {msg}
          </div>
        ))}
      </div>

      {/* Options */}
      {showOptions && (
        <div className="p-4 bg-gray-800 flex justify-between">
          <button
            onClick={() => handleOptionClick("Flu")}
            className="flex-1 p-2 bg-gray-700 text-white rounded-lg mx-1"
          >
            Flu
          </button>
          <button
            onClick={() => handleOptionClick("Common Cold")}
            className="flex-1 p-2 bg-gray-700 text-white rounded-lg mx-1"
          >
            Common Cold
          </button>
        </div>
      )}

      {/* Input Area */}
      <div
        onClick={handleTypingBarClick}
        className="p-4 bg-gray-800 border-t flex items-center cursor-pointer"
      >
        <input
          type="text"
          placeholder="Start typing..."
          className="flex-1 p-3 rounded-full bg-gray-700 text-white cursor-pointer"
          readOnly
        />
        <div className="p-2 bg-blue-600 text-white rounded-full ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
      </div>

      {/* Game Over Modal */}
      {gameOver && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-center rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Game Over</h2>
            <img
              src={Gameover}
              alt="Ghost"
              className="h-20 w-20 mx-auto mb-4"
            />
            <p className="text-lg text-gray-800 font-bold mb-2">
              Score: {currentScore}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Highest Score:{" "}
              {highestScore > 0 ? highestScore : "No high score yet"}
            </p>
            <button
              onClick={restartGame}
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
