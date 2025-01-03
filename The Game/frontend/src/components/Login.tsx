import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>

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

        {/* Password Field */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800"
          onClick={() => (window.location.href = "/game")}
        >
          Sign In
        </button>

        {/* Links */}
        <p className="text-center mt-4 text-sm">
          <a href="/forget-pass" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </p>
        <p className="text-center text-sm">
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
