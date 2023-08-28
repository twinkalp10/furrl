import React from "react";

export interface Product {
  images: Image[];
  brandName: string;
  title: string;
  price: string;
}

interface Image {
  src: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
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
  );
};

export default ProductCard;
