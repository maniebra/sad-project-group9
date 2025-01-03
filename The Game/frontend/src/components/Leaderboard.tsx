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
    <div className="flex flex-col h-screen bg-white text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900">
        <div className="h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center">
          <button onClick={() => window.history.back()} className="text-white">
            <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5" />
          </button>
        </div>
        <h1 className="text-xl font-bold text-center">Game Title</h1>
        <div className="h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center">
          AX
        </div>
      </div>

      {/* Leaderboard Title */}
      <h2 className="text-2xl font-bold text-black text-center py-6">
        Leaderboard
      </h2>

      {/* Leaderboard List */}
      <div className="flex-1 overflow-y-auto px-6 bg-white">
        {leaderboardData.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-gray-200"
          >
            <div className="flex items-center gap-4">
              <img
                src={entry.avatar}
                alt={`${entry.name}'s avatar`}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-gray-900 text-lg">{entry.name}</span>
            </div>
            <span className="text-gray-900 text-lg font-medium">
              {entry.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
