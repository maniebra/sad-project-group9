import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface LeaderboardEntry {
  name: string;
  score: number;
  avatar: string;
}

const Leaderboard: React.FC = () => {
  // Mock data - replace with real data from backend
  const leaderboardData: LeaderboardEntry[] = [
    { name: "Jane Smith", score: 106, avatar: "/avatars/default.png" },
    { name: "Jane Smith", score: 98, avatar: "/avatars/default.png" },
    { name: "Jane Smith", score: 84, avatar: "/avatars/default.png" },
    { name: "Jane Smith", score: 83, avatar: "/avatars/default.png" },
    { name: "Jane Smith", score: 78, avatar: "/avatars/default.png" },
    { name: "Jane Smith", score: 69, avatar: "/avatars/default.png" },
    { name: "Jane Smith", score: 65, avatar: "/avatars/default.png" },
    { name: "Jane Smith", score: 54, avatar: "/avatars/default.png" },
    { name: "Jane Smith", score: 42, avatar: "/avatars/default.png" },
    { name: "Jane Smith", score: 36, avatar: "/avatars/default.png" },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <button onClick={() => window.history.back()} className="text-white">
          <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">Game Title</h1>
        <div className="w-6"></div> {/* Spacer for alignment */}
      </div>

      {/* Leaderboard Title */}
      <h2 className="text-2xl font-bold text-white text-center py-4">
        Leaderboard
      </h2>

      {/* Leaderboard List */}
      <div className="flex-1 overflow-y-auto px-4">
        {leaderboardData.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 rounded-lg mb-2 p-3"
          >
            <div className="flex items-center">
              <img
                src={entry.avatar}
                alt={`${entry.name}'s avatar`}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="text-white">{entry.name}</span>
            </div>
            <span className="text-white font-bold">{entry.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
