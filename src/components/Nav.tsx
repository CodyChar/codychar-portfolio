"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Work" },
  { href: "/explorations", label: "Explorations" },
  { href: "/about", label: "About" },
  { href: "https://vimeo.com/showcase/6285878", label: "Video", external: true },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
      <Link href="/">
        <Image
          src="/images/avatar.gif"
          alt="Cody Char"
          width={160}
          height={160}
          unoptimized
        />
      </Link>
      <div className="flex items-center gap-8 text-base">
        {links.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
