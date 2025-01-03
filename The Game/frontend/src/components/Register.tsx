import React, { useState } from "react";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ email, password, acceptedTerms });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-6 rounded-lg shadow-lg"
      >
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

        {/* Terms and Conditions */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="mr-2"
            id="terms"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I accept the terms
          </label>
        </div>
        <p className="text-xs text-gray-500 mb-4">Terms & Conditions</p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-sm">
          <a href="/" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
