"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(pathname === href && "text-primary font-semibold")}
        >
          {label}
        </Link>
      ))}
      <SignedOut>
        <SignInButton mode="modal">
          <span
            className={cn(
              "cursor-pointer",
              pathname === "/sign-in" && "text-primary font-semibold"
            )}
          >
            <button className="btn-signin">Sign In</button>
          </span>
        </SignInButton>
        <SignUpButton mode="modal">
          <span
            className={cn(
              "cursor-pointer",
              pathname === "/sign-up" && "text-primary font-semibold"
            )}
          >
            <button className="btn-signin">Sign Up</button>
          </span>
        </SignUpButton>
      </SignedOut>
    </nav>
  );
};

export default NavItems;
