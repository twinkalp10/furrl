import React from "react";
import ProductList from "./ProductList";
import { VibeData } from "@/models/vibe/vibe.interface";
import ProductLoading from "./ProductLoading";

type ProductProps = {
  vibe: undefined | VibeData;
  error: undefined | string;
  isLoading: boolean;
  fetchNextPageVibe: () => void;
};

const Products = ({
  vibe,
  error,
  isLoading,
  fetchNextPageVibe,
}: ProductProps) => (
  <>
    <ProductList products={vibe?.productData || []} />
    <ProductLoading
      isLoading={isLoading}
      fetchNextPageVibe={fetchNextPageVibe}
    />
  </>
);

export default Products;
