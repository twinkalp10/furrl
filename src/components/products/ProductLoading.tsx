import React, { useEffect, useRef } from "react";

type ProductLoadingProps = {
  isLoading: boolean;
  fetchNextPageVibe: () => void;
};

const ProductLoading = ({
  isLoading,
  fetchNextPageVibe,
}: ProductLoadingProps) => {
  const productLoadingRef = useRef(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      fetchNextPageVibe();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
    });
    if (productLoadingRef.current) {
      observer.observe(productLoadingRef.current);
    }
    return () => observer.disconnect();
  }, [productLoadingRef]);

  return (
    <div ref={productLoadingRef} className="text-center py-4">
      {isLoading && <div className="animate-pulse h-4 w-[250px] bg-gray-300" />}
    </div>
  );
};

export default ProductLoading;
