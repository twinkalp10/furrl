import React from "react";
import useVibe from "@/hooks/vibe/useVibe";
import Products from "../products/Products";

const tabItems = ["All", "Accessories", "Home", "Apparel", "Beauty", "Kids"];

const Vibes = () => {
  const { vibe, error, isLoading, fetchNextPageVibe } = useVibe();

  if (isLoading && !vibe) {
    return (
      <div className="h-[calc(100vh-60px)] flex justify-center items-center">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div>
      <img
        src={`${vibe?.vibeImageUrl}`}
        alt="banner image"
        className="w-full max-h-52"
      />
      <section className="m-2 rounded-lg p-1 font-light bg-gray-200 text-gray-800">
        <div className="flex justify-between items-center px-10">
          <div className="py-2.5 px-3 text-xs bg-white rounded-lg">
            Products
          </div>
          <div className="py-2.5 px-3 text-xs rounded-lg">Collections</div>
        </div>
      </section>

      <section className="sticky top-10 z-50 bg-white py-0.5">
        <div className="m-2 flex flex-col gap-4">
          <p className="text-sm italic font-light text-gray-800 w-full">
            {vibe?.totalStoredProductIdsCount} products
          </p>
          <section className="w-full overflow-scroll product_list">
            <ul className="inline-flex gap-2">
              {tabItems.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index === 0 && "bg-indigo-600 text-white"
                  } border rounded-full px-4 py-1.5 text-sm font-light`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
      <Products
        vibe={vibe}
        error={error}
        isLoading={isLoading}
        fetchNextPageVibe={fetchNextPageVibe}
      />
    </div>
  );
};

export default Vibes;
