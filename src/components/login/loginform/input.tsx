"use client"

import { useState } from 'react';

interface InputProps {
  type?: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type = 'text', label = 'default', onChange }: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col pr-8 pl-8 mb-5">
      <label className="text-lg font-semibold mb-2 text-white">{label}</label>
      <div className="relative">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          className="bg-gray-950 bg-opacity-25 backdrop-blur py-3 px-6 text-white rounded-3xl w-full"
          onChange={onChange}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  );
}