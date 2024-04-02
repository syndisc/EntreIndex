import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loading-spinner">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm13-5.291c0-4.418-3.582-8-8-8v4c3.584 0 6.498 2.914 6.498 6.498H17zM12 20a8 8 0 01-8-8h-4c0 6.627 5.373 12 12 12v-4z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
