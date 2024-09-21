import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, PhoneCall, Mail as GmailIcon, MapPin } from "lucide-react";

const Footer = () => {
    return (
      <footer className="bg-gradient-to-b from-dojo-500 to-dojo-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-4 flex md:justify-center">
              <div>
                <a
                  href="https://www.computer.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="IEEE Computer Society Logo"
                >
                  <Image 
                    src="/IEEE-CS_IEEE-UNSA-white.png" 
                    alt="IEEE Computer Society Logo" 
                    width={300} 
                    height={300} 
                    className="h-16 w-auto mb-2 transition-transform duration-300 group-hover:scale-105" 
                  />
                </a>
                <h3 className="text-lg font-semibold leading-tight">Universidad Nacional de San Agustín de Arequipa</h3>
                <p className="text-sm text-dojo-100">IEEE Student Branch</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex md:justify-center">
              <div className='md:w-3/4'>
                <h4 className="text-xl font-bold mb-5">Contacto:</h4>
                <div className='pt-4 mb-4'>
                  <p className="flex items-center mb-2">
                    <PhoneCall className="mr-2" size={18} /> +51 123 456 789
                  </p>
                  <p className="flex items-center mb-2">
                    <GmailIcon className="mr-2" size={18} /> correo@aws.com
                  </p>
                  <p className="flex items-center">
                    <MapPin className="mr-2" size={18} /> Arequipa, Perú
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex md:justify-center">
              <div className="md:w-3/4 flex flex-col items-start">
                <h4 className="text-xl font-bold mb-6">Sobre Nosotros:</h4>
                <p className='mb-4'>
                  El taller "Introducción a R: De Funciones a Paquetes, de Paquetes a Papers" te enseña cómo crear funciones en R, desarrollar paquetes, y aplicar estos conocimientos en investigaciones científicas. Una oportunidad para iniciarte en el uso profesional de R.
                </p>
                <SocialIEEE />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm border-t border-dojo-400 pt-4">
            <p>@IEEE Computer Society UNSA 2024. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };


function SocialIEEE() {
    const socialLinks = [
        { Icon: Facebook,   url: "https://www.facebook.com/profile.php?id=61553552039655" },
        { Icon: Instagram,  url: "https://www.instagram.com/ieeecomputersocietyunsa/" },
        { Icon: Linkedin,   url: "https://www.linkedin.com/company/student-chapter-ieee-computer-society-unsa" },
        { Icon: Mail,       url: "mailto:example@gmail.com" }
    ];

    return (
        <div className="flex space-x-4 mb-4">
        {socialLinks.map(({ Icon, url }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110">
            <Icon size={30} />
            </a>
        ))}
        </div>
    );
}

export default Footer;