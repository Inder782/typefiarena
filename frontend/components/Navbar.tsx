import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#03071E]/70 border-b border-purple-500/20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195] flex items-center justify-center">
            <span className="text-white font-bold text-sm">TF</span>
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#9945FF]">
            TypeFiArena
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/leaderboard"
            className="text-gray-300 hover:text-[#76f6ff] transition-colors"
          >
            Leaderboard
          </Link>
          <Link
            href="/challenges"
            className="text-gray-300 hover:text-[#ff6464] transition-colors"
          >
            Challenges
          </Link>
          <Link
            href="/profile"
            className="text-gray-300 hover:text-[#f364e0] transition-colors"
          >
            Profile
          </Link>
        </div>

        {/* Wallet button */}
        <button className="px-4 py-2 rounded-full bg-black/30 border border-[#9945FF]/40 text-[#14F195] hover:bg-black/50 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse"></span>
          Connect Wallet
        </button>
      </div>

      {/* Mobile menu indicator - hidden by default */}
      <div className="md:hidden flex justify-center pb-2">
        <div className="w-10 h-1 rounded-full bg-gradient-to-r from-[#14F195] to-[#9945FF] opacity-30"></div>
      </div>
    </nav>
  );
};

export default Navbar;
