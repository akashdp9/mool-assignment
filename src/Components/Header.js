import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-black p-4 flex justify-end items-center">
      <div className="flex items-center">
      <img
          src="../assets/notification-icon.svg"
          alt="notify-icon"
          className="w-6 h-6 rounded-full mr-6"
        />
      </div>

      <div className="flex items-center">
        <img
          src="../assets/Group 4387.svg"
          alt="Profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-black text-base font-extralight mr-2">Abhishek Mohanty</span>
        <img
          src="../assets/down-icon.svg"
          alt="icon"
          className="w-6 h-6 rounded-full mr-2"
        />
      </div>
    </header>
  );
};

export default Header;
