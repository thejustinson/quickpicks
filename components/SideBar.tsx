"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-20 bg-primary-accent text-white p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar content */}
      <div className={`
        fixed md:static top-0 left-0 z-10
        w-[230px] md:w-[230px] h-screen 
        bg-secondary-background
        border-r border-neutral-700
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="px-5 py-20 md:py-10">
          <div className="text-lg font-semibold">QuickPicks</div>
          <div className="mt-5">
            <button className="bg-primary-accent text-white px-5 w-full py-2 rounded-lg active:scale-90 duration-200">
              Connect Wallet
            </button>
          </div>
          {/* Add more sidebar content here */}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-5"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SideBar;