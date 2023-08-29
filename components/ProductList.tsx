import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ProductCard, { Product } from "./ProductCard";

const tabItems = ["All", "Accessories", "Home", "Apparel", "Beauty", "Kids"];

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef(null);

  const fetchData = async (page: number) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://api.furrl.in/api/v1/vibe/getVibeRelate?visitId=2e3fb8fe-5867-4725-bd1c-fd934e635e3b`,
        { vibe: "#NightFlea" },
        {
          params: {
            page: page,
          },
        }
      );
      setProducts((prevProducts) => [
        ...prevProducts,
        ...response.data.productData,
      ]);
    } catch (error) {
      console.log("error fetching data: ", error);
    }
    setIsLoading(false);
  };

  const fetchMoreData = async () => {
    if (isLoading) return;
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreData();
        }
      },
      {
        threshold: 1,
      }
    );
    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }
    return () => observer.disconnect();
  }, [loadingRef]);

  return (
    <>
      <Header />
      <div className="m-2 rounded-lg p-1 font-light bg-gray-200 text-gray-800">
        <div className="flex justify-between items-center px-10">
          <div className="py-2.5 px-3 text-xs bg-white rounded-lg">
            Products
          </div>
          <div className="py-2.5 px-3 text-xs rounded-lg">Collections</div>
        </div>
      </div>
      <div className="m-4 flex flex-col gap-4">
        <p className="text-sm italic font-light text-gray-800 w-full">
          192 products
        </p>

        <div className="w-full overflow-x-auto">
          <ul className="inline-flex gap-2">
            {tabItems.map((item, index) => (
              <li
                key={index}
                className="border rounded-full px-4 py-1.5 text-sm font-light"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-0.5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div ref={loadingRef} className="text-center py-4">
        {isLoading && <p>Loading...</p>}
      </div>
    </>
  );
};

export default ProductList;

const Header = () => {
  return (
    <div className="relative">
      <div className="relative">
        <img
          src="/underverse.png"
          alt="underverse"
          className="w-full max-h-60"
        />
      </div>
      <p className="absolute text-white bottom-10 left-[35%] z-50 font-semibold italic text-2xl">
        #NightFlea
      </p>
    </div>
  );
};
