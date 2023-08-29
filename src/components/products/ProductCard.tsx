import { Product } from "@/models/vibe/vibe.interface";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="text-xs">
        <img
          src={product.images[0].src}
          alt={product.title}
          className="w-full h-40 flex items-center justify-center object-cover"
        />
        <p className="mt-1">{product.brandName}</p>
        <p className="truncate font-semibold mt-1">{product.title}</p>
        <p className="mt-1">Rs. {product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
