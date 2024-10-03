
import { ReactNode, HTMLAttributes } from 'react';

interface SectionBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function SectionBackground({ children }: SectionBackgroundProps) {
  return (
    <div className="bg-dojo-triangle flex justify-center md:py-6 xl:py-8">
        <div className="backdrop-blur-sm xl:backdrop-blur bg-white/5 md:bg-white/40 xl:rounded-md md:w-11/12 2xl:w-5/6 p-2 md:p-3 xl:p-4   ">
          {children}
        </div>
    </div>
  );
}

export default SectionBackground;