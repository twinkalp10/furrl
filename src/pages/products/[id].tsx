import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  return <div>This is product page with id: {router.query.id}</div>;
};

export default ProductDetails;
