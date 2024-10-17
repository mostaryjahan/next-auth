"use client";
import Link from "next/link";
import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [auth, setAuth] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(auth),
      });

      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setSuccessMessage(data.message);
        setErrorMessage(null);
        setAuth({ name: "", email: "", password: "" });
      } else {
        setErrorMessage(data.message);
        setSuccessMessage(null);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-8 space-y-3 rounded-xl dark:bg-gray-50 border-black border-2 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block dark:text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={auth.name}
            onChange={(e) => setAuth({ ...auth, name: e.target.value })}
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={auth.email}
            onChange={(e) => setAuth({ ...auth, email: e.target.value })}
            placeholder="Email"
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
            value={auth.password}
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
        >
          Sign Up
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="underline dark:text-gray-800">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
