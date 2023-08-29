import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" border-b-2 border-gray-100/70 w-full bg-white text-black py-2 px-3 sticky top-0 z-10">
      <div className="grid grid-cols-3">
        <div></div>
        <div className="flex justify-center">
          <Link href="/">
            <h1 className="text-indigo-500 text-2xl font-medium">Furrl</h1>
          </Link>
        </div>
        <div className="flex items-center space-x-4 justify-end">
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
