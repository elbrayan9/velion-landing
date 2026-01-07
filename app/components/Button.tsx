"use client";

import React from "react";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glow" | "outline" | "icon" | "shiny";
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all duration-300 focus-visible:outline-none h-12 px-8 cursor-pointer tracking-wide relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    secondary:
      "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800",
    glow: "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.4)]",
    outline:
      "border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500",
    icon: "p-2 hover:bg-zinc-800 rounded-full transition-colors",
    shiny: "shiny-cta",
  };

  const handleScroll = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) onClick(e);
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "glow" && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 transition-transform bg-linear-to-r from-transparent via-white/20 to-transparent" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={handleScroll}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        suppressHydrationWarning
        {...props}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      suppressHydrationWarning
      {...props}
    >
      {content}
    </button>
  );
};
