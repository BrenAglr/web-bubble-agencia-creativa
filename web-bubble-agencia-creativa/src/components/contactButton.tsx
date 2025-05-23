"use client";

import clsx from "clsx";
import Link from "next/link";

interface contactButtonProps {
  fromColor: string;
  toColor: string;
  text?: string;
}

export default function contactButton({
  fromColor,
  toColor,
  text = "Contactanos",
}: contactButtonProps) {
  return (
    <Link
      href="/contacto"
      className={clsx(
        "inline-block px-6 py-2 rounded-full text-white font-semibold transition-all duration-300",
        "bg-gradient-to-r",
        fromColor,
        toColor,
        "hover:opacity-90"
      )}
    >
      {text}
    </Link>
  );
}
