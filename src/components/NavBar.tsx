"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <header
      className={`fixed top-0 w-full z-10 transition-all duration-300 flex justify-between items-center p-3 bg-zinc-900 text-zinc-50 mb-8 bg-opacity-90 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="pokenext"
        />
        <h1 className="text-2xl font-semibold">PokeNext</h1>
      </div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-zinc-50 hover:text-red-500 transition-all"
              href="/"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-zinc-50 hover:text-red-500 transition-all"
              href="/about"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
