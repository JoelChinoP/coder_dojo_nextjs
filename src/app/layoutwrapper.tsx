'use client'

import { usePathname } from "next/navigation";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer";

import { ReactNode } from 'react';

interface LayoutWrapperProps {
  children: ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const showHeaderFooter = !["/login"].includes(pathname);

  return (
    <>
      {showHeaderFooter && <Navbar />}
      <main className="bg-dojo-triangle flex justify-center md:py-6 xl:py-8">
        <div className="py-2 md:py-0 backdrop-blur-sm xl:backdrop-blur bg-white/5 md:bg-white/40 xl:rounded-md md:w-11/12 2xl:w-5/6">
          {children}
        </div>
      </main>
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default LayoutWrapper;