import React from "react";
import Navbar from "../../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="max-w-[23rem] mx-auto">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
