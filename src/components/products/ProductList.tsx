import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/models/vibe/vibe.interface";

interface ProductProps {
  products: Product[];
}

const ProductList = ({ products }: ProductProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 p-0.5">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
