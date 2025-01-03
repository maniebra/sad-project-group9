import React, { useEffect, useState } from "react";
import axios from "axios";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm_password, setConfirmPassword] = useState<string>("");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptedTerms) {
      setErrorMessage("You must accept the terms and conditions to register.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/users/register",
        {
          username: username,
          password: password,
          confirm_password: confirm_password
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Registration successful!");
        setErrorMessage(null);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setAcceptedTerms(false);
        // Save the bearer token if it's included in the response
        if (response.data?.token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        }
        window.location.href = "/";
      }
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message || "Failed to register. Please try again."
      );
      setSuccessMessage(null);
    }
  };

  const verifyToken = async () => {
    const response = await axios.get(`http://localhost:8000/users/verify-token`);
    return response.status === 200;
  }

  useEffect(() => {
    const checkToken = async () => {
      if (axios.defaults.headers.common['Authorization'] && await verifyToken()) {
        window.location.href = "/game";
      }
    };
    checkToken();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-center text-2xl font-bold mb-6">Register</h2>

        {/* Display Success or Error Messages */}
        {successMessage && (
          <p className="mb-4 text-green-600 text-sm">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mb-4 text-red-600 text-sm">{errorMessage}</p>
        )}

        {/* Email Field */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="john.smith@gmail.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="confirm password"
          placeholder="********"
          value={confirm_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
