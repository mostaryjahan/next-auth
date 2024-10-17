"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter


const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null); // State to handle error messages
  const router = useRouter(); // Initialize useRouter


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", { // Replace with your actual login API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(auth),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get the error message
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);
        // Redirect to the home page
        router.push("/"); // Redirect to the home page ("/")

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-8 space-y-3 rounded-xl dark:bg-gray-50 border-black border-2 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setAuth({ ...auth, email: e.target.value })}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
          Login
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          aria-label="Log in with Google"
          className="py-3 bg-purple-600 text-white rounded border-2 px-8"
        >
          Google
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          href="/signup"
          className="underline dark:text-gray-800"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
