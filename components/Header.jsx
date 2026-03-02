"use client";

import { useState } from "react";
import {
  Search,
  User,
  MessageSquare,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Header({ onSearch, searchValue }) {
  const [searchInput, setSearchInput] = useState(searchValue || "");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchInput);
    }
  };

  return (
    <header className="border-b border-border">
      {/* Top Header */}
      <div className="bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <span className="text-sm font-bold text-primary-foreground">
                B
              </span>
            </div>
            <span className="text-xl font-bold text-foreground">Brand</span>
          </a>

          {/* Search Bar */}
          <div className="mx-6 hidden flex-1 md:flex">
            <form onSubmit={handleSearch} className="flex w-full max-w-2xl items-center rounded-lg border-2 border-primary">
              <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-1 bg-transparent px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <div className="border-l border-primary">
                <select className="appearance-none border-none bg-transparent px-3 py-2 text-sm text-foreground outline-none">
                  <option>All category</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home</option>
                </select>
              </div>
              <button
                type="submit"
                className="rounded-r-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right Icons */}
          <div className="hidden items-center gap-5 md:flex">
            <a
              href="/profile"
              className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary"
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Profile</span>
            </a>
            <a
              href="/messages"
              className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="text-xs">Message</span>
            </a>
            <a
              href="/orders"
              className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary"
            >
              <Heart className="h-5 w-5" />
              <span className="text-xs">Orders</span>
            </a>
            <a
              href="/cart"
              className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs">My cart</span>
            </a>
          </div>

          {/* Mobile menu */}
          <button type="button" className="md:hidden">
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <nav className="hidden items-center gap-5 md:flex">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-foreground"
            >
              <Menu className="h-4 w-4" />
              All category
            </button>
            <a
              href="/products"
              className="text-sm text-foreground hover:text-primary"
            >
              Hot offers
            </a>
            <a
              href="/products"
              className="text-sm text-foreground hover:text-primary"
            >
              Gift boxes
            </a>
            <a
              href="/products"
              className="text-sm text-foreground hover:text-primary"
            >
              Projects
            </a>
            <a
              href="/products"
              className="text-sm text-foreground hover:text-primary"
            >
              Menu item
            </a>
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-foreground hover:text-primary"
            >
              Help
              <ChevronDown className="h-3 w-3" />
            </button>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-foreground"
            >
              English, USD
              <ChevronDown className="h-3 w-3" />
            </button>
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-foreground"
            >
              Ship to
              <span className="inline-block h-4 w-5 rounded-sm bg-[#DE2910]" />
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
