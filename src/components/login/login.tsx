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

        <div className="bg-dojo-day dark:bg-dojo-night bg-cover bg-center h-screen w-full flex flex-col">
            <div className="flex justify-around items-center p-4 md:p-6">
                <div className="hidden sm:block w-1/2 md:w-1/6">
                    <Logo path={IEEELogo} size="h-16 md:h-28"/>
                </div>
                <div>
                    <a
                        href="https://coderdojo.com/en/"
                        target="_blank"
                        className="inline-block"
                    >
                        <Logo path={coderDojoLogo} size="h-14 md:h-[4.5rem]"/>
                    </a>
                </div>
            </div>

            <div className="flex-grow flex flex-col md:flex-row items-center justify-center md:px-0 gap-5">
                <div className="w-full md:w-1/2 max-w-md md:mb-0">
                    <div
                        className="hidden sm:block bg-white bg-opacity-70 backdrop-blur-md md:p-8 rounded-lg shadow-lg text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            ¡Bienvenido a CoderDojo!
                        </h1>
                        <p className="text-base md:text-lg text-gray-700">
                            Estamos emocionados de tenerte con nosotros. Prepárate para
                            aprender y crecer en el mundo de la programación. ¡Vamos a hacer
                            grandes cosas juntos!
                        </p>
                    </div>
                    <div className="flex justify-around items-center p-4 md:p-6">
                        <div className="hidden sm:block">
                            <DojoTypeButton onClick={handleDojoTypeButtonClick}/>
                        </div>
                        <div>
                            <ThemeSwitcher/>
                        </div>

                    </div>

                </div>
                <div className="w-full md:w-1/2 max-w-md mb-5">
                    <LoginForm/>
                </div>

            </div>


        </div>
    )
};

export default Login;