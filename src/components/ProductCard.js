import React, { useState } from 'react';
import Swal from 'sweetalert2';
import productsData from '../data/productsData'; // Importing the data file

const ProductCard = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleBuyNow = async () => {
    // Custom SweetAlert2 modal
    await Swal.fire({
      title: '<strong>Thank You for Your Purchase!</strong>',
      html: '<p>Your Services will be activate soon. Enjoy your purchase!</p>',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6',
      customClass: {
        title: 'text-lg font-bold',
        htmlContainer: 'text-gray-600',
      },
    });

    // Update to the next product if available, else loop back to the first product
    setCurrentProductIndex((prevIndex) =>
      prevIndex + 1 < productsData.length ? prevIndex + 1 : 0
    );
  };

  const currentProduct = productsData[currentProductIndex];

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 sm:max-w-md lg:max-w-lg">
      {/* Product Image */}
      <img
        src={currentProduct.image}
        alt="Product"
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Product Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 lg:text-xl">
          {currentProduct.name}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 lg:text-base">
          {currentProduct.description}
        </p>

        {/* Buy Now Button */}
        <button
          className="mt-4 w-full py-2 px-4 rounded-lg text-white text-sm lg:text-base bg-blue-600 hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
