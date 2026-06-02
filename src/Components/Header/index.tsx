"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <header className="max-w-full fixed top-0 left-0 right-0 z-100 flex justify-center items-center pt-4 pb-4 max-[1200px]:px-4 max-[1000px]:px-4 bg-[rgba(15,15,26,0.85)] backdrop-blur-md border-b border-[rgba(0,212,255,0.15)]">
        <div className="w-full max-w-300 flex justify-between ">
          {/* Logo */}
          <Link
            href="/"
            className="font-['Syne'] font-extrabold text-[1.1rem] text-[#E8E8F0] no-underline tracking-[-0.02em] flex items-center gap-2"
          >
            <span className="bg-linear-to-br from-[#00D4FF] to-[#7C6BFF] bg-clip-text text-transparent">
              KM
            </span>
            <span className="text-[rgba(232,232,240,0.3)] font-normal text-[0.82rem] font-['JetBrains_Mono']">
              / portfolio
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-[0.15rem] max-[674px]:hidden">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.8rem] ${
                    isActive
                      ? "font-medium text-[#00D4FF] bg-[rgba(31,155,180,0.08)] border border-[rgba(0,212,255,0.25)]"
                      : "font-normal text-[#8892A4] border border-transparent bg-transparent hover:text-[#E8E8F0] hover:bg-white/[0.04]"
                  } no-underline px-[0.85rem] py-[0.4rem] rounded-[7px] transition-all duration-200 tracking-[0.02em]`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href="mailto:kaviyamarimuthan005@gmail.com"
              className="ml-[0.6rem] text-[0.78rem] font-semibold text-white bg-linear-to-br from-[#00D4FF] to-[#7C6BFF] px-[1.1rem] py-[0.42rem] rounded-[7px] no-underline tracking-[0.04em] transition-all duration-200 shadow-[0_4px_16px_rgba(0,212,255,0.2)]"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.85";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-1px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 6px 22px rgba(0,212,255,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 16px rgba(0,212,255,0.2)";
              }}
            >
              Hire me
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="max-[674px]:block hidden cursor-pointer"
          >
            <Image src="/img/ham-bur.svg" alt="" width={32} height={32} />
          </button>
        </div>
      </header>
     

      {open && (
        <div onClick={()=>setOpen(false)} className="fixed top-16.25 left-0 right-0 z-99 bg-[rgba(15,15,26,0.97)] backdrop-blur-md border-b border-[rgba(0,212,255,0.15)] flex flex-col px-6 py-4 gap-2 min-[674px]:hidden">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-[0.9rem] ${
                  isActive
                    ? "font-medium text-[#00D4FF] bg-[rgba(31,155,180,0.08)] border border-[rgba(0,212,255,0.25)]"
                    : "font-normal text-[#8892A4] border border-transparent hover:text-[#E8E8F0] hover:bg-white/[0.04]"
                } no-underline px-[0.85rem] py-[0.6rem] rounded-[7px] transition-all duration-200`}
              >
                {link.label}
              </Link>
            );
          })}
          <a 
            href="mailto:kaviyamarimuthan005@gmail.com"
            onClick={() => setOpen(false)}
            className="mt-2 text-[0.85rem] font-semibold text-white text-center bg-gradient-to-br from-[#00D4FF] to-[#7C6BFF] px-[1.1rem] py-[0.55rem] rounded-[7px] no-underline tracking-[0.04em] shadow-[0_4px_16px_rgba(0,212,255,0.2)] hover:opacity-85 transition-all duration-200"
          >
            Hire me
          </a>
        </div>
      )}
    </div>
  );
}
