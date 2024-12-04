import React from "react";

function PricingDialog({ item, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Pricing Details</h2>
        <p>
          <span className="font-bold">Event:</span> {item.name}
        </p>
        <p>
          <span className="font-bold">Date:</span> {new Date(item.createdOn).toLocaleDateString()}
        </p>
        <p>
          <span className="font-bold">Price:</span> ${item.price}
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PricingDialog;
