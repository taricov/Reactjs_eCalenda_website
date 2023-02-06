import { useState } from "react";

type voteCreditOptions = 0 | 1 | 2;
interface Props {
  title: string;
  desc: string;
  type: string;
  iconName: string;
  votes: number;
}

export default function FeatureCard2() {
  return (
    <>
      <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
        <div className="mr-2">
          <svg
            className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <span className="text-gray-800">
          Yesterday you said tomorrow. Just do it today.
        </span>
      </div>

      <div className="max-w-md sm:mx-auto sm:text-center">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <svg
            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">A slice of heaven</h6>
        <p className="mb-3 text-sm text-gray-900">
          Disrupt inspire and think tank, social entrepreneur but preliminary
          thinking think tank compelling. Inspiring, invest synergy capacity
          building, white paper; silo, unprecedented challenge B-corp
          problem-solvers.
        </p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a>
      </div>
    </>
  );
}
