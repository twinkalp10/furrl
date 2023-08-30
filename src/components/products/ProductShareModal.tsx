import React, { useState } from "react";

interface ModalProps {
  id: string;
  onClose: () => void;
}

const ProductShareModal = ({ onClose, id }: ModalProps) => {
  const [copy, setCopy] = useState(false);
  const shareLink = `https://furrl-assignment-by-twinkal.vercel.app/products/${id}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopy(true);
      setTimeout(() => setCopy(false), 1000);
    } catch (error) {
      console.log("error copying share link", error);
      setCopy(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className=" absolute inset-0 bg-gray-800 opacity-40"></div>
      <div className="relative bg-white w-1/2 p-10 rounded-lg shadow-lg z-50">
        <div className="text-xl text-gray-800 flex flex-col gap-2">
          <p>Share this product:</p>
          <p>
            <span className="font-semibold">{shareLink}</span>
          </p>
          <div className="mt-3">
            <button onClick={handleCopy}>
              {!copy ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              ) : (
                "copied.."
              )}
            </button>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ProductShareModal;
