import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 text-black py-2 px-3 sticky top-0 z-10">
      <div className="flex items-center justify-center">
        <h1 className="text-lg font-semibold">
          <img src="/logo.png" alt="logo" className="w-16 h-5" />
        </h1>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="https://web.furrl.in/wishlist" target="_blank">
            <button className="text-black">
              <img
                src="/wishlist_icon.png"
                alt="wishlist"
                className="w-6 h-6"
              />
            </button>
          </Link>
          <Link href="https://web.furrl.in/cart" target="_blank">
            <button className="text-black">
              <img src="/cart_icon.png" alt="cart" className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
