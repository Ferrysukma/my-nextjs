import React from "react";
import Logo from "public/images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ onLight }) {
  const linkColor = onLight ? "text-gray-900" : "text-white";
  const router = useRouter();
  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBER_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBER_URL}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Login";
  return (
    <>
      <header className="flex justify-between item-center">
        <div style={{ height: 54 }}>
          <Logo className="on-dark"></Logo>
        </div>
        <ul className="flex">
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  "text-white hover:text-gray-300 text-lg px-6 py-3",
                ].join(" ")}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  "text-white hover:text-gray-300 text-lg px-6 py-3",
                ].join(" ")}
              >
                Pricing
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  "text-white hover:text-gray-300 text-lg px-6 py-3",
                ].join(" ")}
              >
                Feature
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  "text-white hover:text-gray-300 text-lg px-6 py-3",
                ].join(" ")}
              >
                Story
              </a>
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noereferrer"
              href={linkCTA}
              className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-gray-300 text-lg px-6 py-3 ml-6"
            >
              {textCTA}
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
