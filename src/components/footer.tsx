import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, PhoneCall, Mail as GmailIcon, MapPin } from "lucide-react";

const Footer = () => {
    return (
      <footer className="bg-gradient-to-b from-dojo-400 to-dojo-500 text-white md:pt-3 pt-1 flex justify-center w-full">
        <div className="pt-3 sm:block mx-auto px-5 md:w-11/12 2xl:w-5/6">
          <div className="flex flex-wrap justify-between items-start flex-col md:flex-row">
            <div className="md:h-auto md:w-3/12 mb-2 md:mb-0 flex md:justify-end">
              <div className="w-11/12">
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
                    className="h-12 md:h-16 w-auto mb-2 transition-transform duration-300 group-hover:scale-105" 
                  />
                </a>
                <div className="md:visible">
                <h3 className="text-lg font-semibold leading-tight py-1 2xl:py-2 ">Universidad Nacional de San Agustín de Arequipa</h3>
                <p className="text-sm text-dojo-100">IEEE Student Branch</p>
                </div>
              </div>
            </div>

            <div className="hidden md:w-5/12 mb-6 md:mb-0 md:flex md:justify-center md:visible ">
              <div className="md:w-5/6 flex flex-col items-start text-center">
                <h4 className="text-xl font-bold mb-2 w-full">Sobre Nosotros:</h4>
                <p className='mb-2'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut veniam, doloribus debitis non, nemo similique perspiciatis facilis accusantium sit, illo culpa explicabo amet quidem nam temporibus nesciunt earum consequuntur?
                </p>
                
              </div>
            </div>

            <div className=" md:h-auto md:w-3/12 flex md:justify-center">
              <div className='md:w-3/4 2xl:w-1/2 flex flex-row md:flex-col'>
                <h4 className="text-lg md:text-xl font-bold mb-2">Contacto:</h4>
                <div className="hidden xl:block md:visible">
                  <div className='pt-0 mb-3'>
                    <p className="flex items-center mb-1">
                      <PhoneCall className="mr-2" size={18} /> +51 123 456 789
                    </p>
                    <p className="flex items-center mb-1">
                      <GmailIcon className="mr-2" size={18} /> correo@aws.com
                    </p>
                    <p className="flex items-center">
                      <MapPin className="mr-2" size={18} /> Arequipa, Perú
                    </p>
                  </div>
                </div>
                <SocialIEEE />
              </div>
            </div>
          </div>

          <div className="mt-1 md:mt-2 text-center text-sm border-t border-dojo-400 py-1 md:py-2 2xl:py-3">
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
        <div className="flex space-x-2 md:space-x-3">
        {socialLinks.map(({ Icon, url }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110">
            <Icon size={25} />
            </a>
        ))}
        </div>
    );
}

export default Footer;