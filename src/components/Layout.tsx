import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="max-w-sm mx-auto">
    <Navbar />
    {children}
  </div>
);

export default Layout;
