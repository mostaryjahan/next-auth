"use client"
import Link from "next/link";
import { useState } from "react";

const login = () => {

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(auth, "ok ok");
  };
  return (
    <div className="w-full max-w-md mx-auto mt-10 p-8 space-y-3 rounded-xl dark:bg-gray-50 border-black border-2 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form action="" className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
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
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
         
        </div>
        <button onClick={handleSubmit} className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
          Login
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600">
          Login with social accounts
        </p>
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

export default login;
