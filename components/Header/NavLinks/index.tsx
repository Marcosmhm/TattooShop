"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathName = usePathname();

  const navLinks = [
    { href: "/servicos", name: "Serviços" },
    { href: "/sobre", name: "Sobre Mim" },
    { href: "/contato", name: "Contato" },
  ];

  const linkElements = navLinks.map((link) => {
    const isActive = pathName.startsWith(link.href);

    return (
      <Link key={link.name} href={link.href} className={isActive ? 'underline' : '' + 'hover:underline'}>
        {link.name}
      </Link>
    );
  });

  return (
    <nav className="capitalize font-londrina text-heading font-[400] flex gap-x-[18px] text-lg sm:text-[32px] sm:mb-2.5">
      {linkElements}
    </nav>
  );
}
