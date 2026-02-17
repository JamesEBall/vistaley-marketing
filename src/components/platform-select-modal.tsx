"use client";

import { useEffect, useCallback } from "react";
import { Layers, BarChart3, ArrowRight, X } from "lucide-react";

interface PlatformSelectModalProps {
  open: boolean;
  onClose: () => void;
  mode?: "login" | "signup";
  onToggleMode?: () => void;
}

export function PlatformSelectModal({
  open,
  onClose,
  mode = "login",
  onToggleMode,
}: PlatformSelectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  const isSignup = mode === "signup";
  const ventureLensUrl = isSignup
    ? "https://app.vistaley.com/login?signup=true"
    : "https://app.vistaley.com/login";
  const harbourUrl = isSignup
    ? "https://harbour.vistaley.com/login?signup=true"
    : "https://harbour.vistaley.com/login";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm modal-backdrop-enter"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 mx-4 w-full max-w-lg modal-content-enter">
        <div className="rounded-2xl border border-white/[0.1] bg-neutral-950 shadow-2xl shadow-black/50">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-1.5 text-white/30 transition-colors hover:bg-white/[0.06] hover:text-white/60"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Header */}
          <div className="px-8 pt-8 pb-2 text-center">
            <h2 className="text-xl font-semibold text-white">
              Where would you like to go?
            </h2>
            <p className="mt-2 text-sm text-white/40">
              {isSignup
                ? "Choose your platform to get started"
                : "Choose your platform to sign in"}
            </p>
          </div>

          {/* Platform cards */}
          <div className="grid gap-3 p-6 sm:grid-cols-2">
            {/* VentureLens */}
            <a
              href={ventureLensUrl}
              className="group relative flex flex-col rounded-xl border border-emerald-500/15 bg-emerald-500/[0.03] p-5 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/[0.06] hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15">
                  <Layers className="h-4.5 w-4.5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/90">
                    VentureLens
                  </div>
                  <div className="text-[11px] text-white/35">
                    For Fund Managers
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/40">
                Fund management, deal pipeline, LP portal, and portfolio
                monitoring.
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-emerald-400 transition-colors group-hover:text-emerald-300">
                {isSignup ? "Get started" : "Sign in"}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>

            {/* Harbour */}
            <a
              href={harbourUrl}
              className="group relative flex flex-col rounded-xl border border-sky-500/15 bg-sky-500/[0.03] p-5 transition-all hover:border-sky-500/30 hover:bg-sky-500/[0.06] hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/15">
                  <BarChart3 className="h-4.5 w-4.5 text-sky-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/90">
                    Harbour
                  </div>
                  <div className="text-[11px] text-white/35">For Founders</div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/40">
                Free FP&A tools — revenue tracking, burn analytics, and investor
                updates.
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-sky-400 transition-colors group-hover:text-sky-300">
                {isSignup ? "Get started free" : "Sign in"}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="border-t border-white/[0.06] px-8 py-4 text-center">
            <p className="text-xs text-white/30">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={onToggleMode}
                    className="text-white/50 underline underline-offset-2 hover:text-white/70"
                  >
                    Sign in instead
                  </button>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={onToggleMode}
                    className="text-white/50 underline underline-offset-2 hover:text-white/70"
                  >
                    Sign up instead
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
