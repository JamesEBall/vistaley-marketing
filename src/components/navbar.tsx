"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { VistaleyLogo } from "./vistaley-logo";
import { PlatformSelectModal } from "./platform-select-modal";

const products = [
  {
    name: "VentureLens",
    description: "Fund management for GPs",
    href: "/for-gps",
  },
  {
    name: "Harbour",
    description: "Free FP&A for portfolio companies",
    href: "/for-founders",
  },
];

const navLinks = [
  { name: "For GPs", href: "/for-gps" },
  { name: "For Founders", href: "/for-founders" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"login" | "signup">("login");

  const openLogin = () => {
    setModalMode("login");
    setModalOpen(true);
    setMobileOpen(false);
  };

  const openSignup = () => {
    setModalMode("signup");
    setModalOpen(true);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <VistaleyLogo size="sm" variant="color" showWordmark />
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 md:flex">
              {/* Products dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  onBlur={() => setTimeout(() => setProductsOpen(false), 150)}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  Products
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {productsOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-white/[0.08] bg-neutral-950 p-2 shadow-2xl">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.04]"
                      >
                        <div className="text-sm font-medium text-white/80">
                          {product.name}
                        </div>
                        <div className="text-xs text-white/40">
                          {product.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-3 md:flex">
              <button
                onClick={openLogin}
                className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                Log in
              </button>
              <button
                onClick={openSignup}
                className="inline-flex h-9 items-center rounded-lg bg-white px-4 text-sm font-medium text-black transition-all hover:bg-white/90"
              >
                Start free
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-white/60 transition-colors hover:text-white md:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/[0.06] bg-black/95 backdrop-blur-xl md:hidden">
            <div className="space-y-1 px-6 py-4">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5"
                >
                  <div className="text-sm font-medium text-white/80">
                    {product.name}
                  </div>
                  <div className="text-xs text-white/40">
                    {product.description}
                  </div>
                </Link>
              ))}
              <div className="my-2 border-t border-white/[0.06]" />
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-white/60"
                >
                  {link.name}
                </Link>
              ))}
              <div className="my-2 border-t border-white/[0.06]" />
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={openLogin}
                  className="rounded-lg border border-white/10 px-4 py-2.5 text-center text-sm text-white/60"
                >
                  Log in
                </button>
                <button
                  onClick={openSignup}
                  className="rounded-lg bg-white px-4 py-2.5 text-center text-sm font-medium text-black"
                >
                  Start free
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Platform selection modal */}
      <PlatformSelectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
        onToggleMode={() => setModalMode(modalMode === "login" ? "signup" : "login")}
      />
    </>
  );
}
