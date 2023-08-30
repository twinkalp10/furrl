import { Product } from "@/models/vibe/vibe.interface";
import Link from "next/link";
import React, { useState } from "react";
import ProductShareModal from "./ProductShareModal";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="text-xs relative">
        <div className="relative">
          <Link href={`/products/${product.id}`}>
            <img
              src={product.images[0].src}
              alt={product.title}
              className="w-full h-40 flex items-center justify-center object-cover"
            />
          </Link>
        </div>

        <button
          className="absolute bottom-16 right-2 z-5 cursor-default"
          onClick={toggleModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 bg-white rounded-full p-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </button>
        <p className="mt-1">{product.brandName}</p>
        <p className="truncate font-semibold mt-1">{product.title}</p>
        <p className="mt-1">Rs. {product.price}</p>

        {isModalOpen && (
          <ProductShareModal onClose={toggleModal} id={product.id} />
        )}
      </div>
    </>
  );
};

export default ProductCard;
