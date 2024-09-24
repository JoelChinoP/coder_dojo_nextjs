import Image, { StaticImageData } from 'next/image';

interface LogoProps {
    path: StaticImageData;
    size?: string;
}

export default function Logo({ path, size = "" }: LogoProps) {
    // todo: asignar tamaño segun lo que se le pase como argumento, usar clases de tailwind
    return (
        <div className="flex justify-center items-center">
            <Image src={path} alt="logo" className={`h-20 ${size}`} />
        </div>
    )
}