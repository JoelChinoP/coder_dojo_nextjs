'use client'

import { usePathname } from "next/navigation";
import Header from "@/components/header";
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
      {showHeaderFooter && <Header />}
      <main>{children}</main>
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default LayoutWrapper;