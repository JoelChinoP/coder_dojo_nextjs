"use client"

import Logo from './logo';
import DojoTypeButton from './dojotypebutton';
import ThemeSwitcher from './themebutton';
import LoginForm from './loginform/loginform'

//assets
import IEEELogo from "@/assets/IEEE-CS-UNSA.png";
import coderDojoLogo from "@/assets/CoderDojo.png";
import {useEffect, useState} from "react";

function Login () {

    const [isDojoTypeOpen, setIsDojoTypeOpen] = useState(false);

    const handleDojoTypeButtonClick = () => {
        setIsDojoTypeOpen(true);
    };
    return (
        <div className="bg-dojo-day dark:bg-dojo-night bg-cover bg-center h-screen w-screen flex">
            <div className="relative flex-grow">
                <div className="relative flex flex-col items-center justify-center min-h-screen ">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-lg shadow-lg text-center max-w-lg">
                            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                                ¡Bienvenido a CoderDojo!
                            </h1>
                            <p className="text-lg text-gray-700">
                                Estamos emocionados de tenerte con nosotros. Prepárate para
                                aprender y crecer en el mundo de la programación. ¡Vamos a hacer
                                grandes cosas juntos!
                            </p>
                        </div>
                    </div>
                    <div className="absolute w-1/5 top-5 left-5 p-4">
                        <Logo path={IEEELogo} size="h-28" />
                    </div>
                    <a
                        href="https://coderdojo.com/en/"
                        target="_blank"
                        className="inset-1"
                    >
                        <div className="absolute top-5 right-5 p-4">
                            <Logo path={coderDojoLogo} size={"h-[4.5rem]"} />
                        </div>
                    </a>
                    <div className="absolute bottom-5 left-5 p-4">
                        <DojoTypeButton onClick={handleDojoTypeButtonClick} />
                    </div>
                    <div className="absolute bottom-5 right-5 p-4">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>

            <LoginForm />

            {isDojoTypeOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 rounded-3xl shadow-lg w-[90vw] h-5/6 relative">


                    </div>
                </div>
            )}


        </div>
    );
};

export default Login;