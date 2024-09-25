"use client"

import Input from "./input";
import LoginAs from "./loginass";
import { useState, ChangeEvent } from "react";

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const [username, setUsername] = useState<string>("");
  const [contrasenia, setContrasenia] = useState<string>("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleContraseniaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContrasenia(e.target.value);
  };

  return (
    <div
      className={`flex flex-col justify-center p-6 bg-gray-950 bg-opacity-25 backdrop-blur shadow-lg rounded-l-xl h-full ${className}`}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-2">Inicia sesión</h2>
        <p className="font-semibold text-gray-200 mb-20">
          Inicia sesión con tus credenciales
        </p>
      </div>
      <form action="">
        <Input type="text" label="Username" onChange={handleUsernameChange} />
        <Input type="password" label="Contraseña" onChange={handleContraseniaChange} />
        <LoginAs un={username} psw={contrasenia} />
      </form>
    </div>
  );
}

export default LoginForm;