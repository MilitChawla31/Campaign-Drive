import React from "react";

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 py-6 bg-white-100 shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src="https://mms.businesswire.com/media/20240506525129/en/2120693/23/ArmorCode_logo_Logo.jpg" // Replace with your logo URL
          alt="ArmorCode Logo"
          className="w-20 md:w-24 lg:w-28" // Responsive size for the logo
        />
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800">
          Manage Campaigns
        </h1>
      </div>
    </header>
  );
}

export default Header;
