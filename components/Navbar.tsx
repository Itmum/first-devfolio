"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["About", "/#about"], ["Skills", "/#skills"], ["Projects", "/#projects"],
  ["Background", "/#background"], ["Contact", "/#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    setLight(document.documentElement.dataset.theme === "light");
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const toggle = () => {
    const next = light ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setLight(!light);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
      scrolled || open ? "border-line bg-bg/60 shadow-lg shadow-black/5 backdrop-blur-xl" : "border-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-extrabold tracking-tight">Itmum<span className="text-accent">.</span></Link>
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map(([label, href]) => (
            <li key={href}><Link href={href} className="text-muted transition-colors hover:text-fg">{label}</Link></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="btn btn-ghost !px-3 !py-1.5" aria-label="Toggle light and dark theme">
            {light ? "Dark" : "Light"}
          </button>
          <button onClick={() => setOpen(!open)} className="btn btn-ghost !px-3 !py-1.5 md:hidden" aria-expanded={open} aria-label="Menu">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-5 pb-4 pt-2 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}><Link href={href} onClick={() => setOpen(false)} className="block py-2 text-muted hover:text-fg">{label}</Link></li>
          ))}
        </ul>
      )}
    </header>
  );
}
