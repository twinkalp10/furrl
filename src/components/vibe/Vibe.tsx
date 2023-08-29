import React from "react";
import useVibe from "@/hooks/vibe/useVibe";
import Products from "../products/Products";

const tabItems = ["All", "Accessories", "Home", "Apparel", "Beauty", "Kids"];

const Vibes = () => {
  const { vibe, error, isLoading, fetchNextPageVibe } = useVibe();

  if (isLoading && !vibe) {
    return <div>Loading...</div>;
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
