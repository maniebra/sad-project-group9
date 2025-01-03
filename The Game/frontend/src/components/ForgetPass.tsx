import React, { useState } from "react";

const ForgetPass: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic
    console.log({ email });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>

        {/* Email Field */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="john.smith@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className="flex-1 p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-black text-white p-2 rounded-lg hover:bg-gray-800"
            onClick={() => {
              if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                alert("Password reset email sent successfully!");
              }
            }}
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPass;
