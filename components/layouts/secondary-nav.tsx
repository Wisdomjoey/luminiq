"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/about",
    label: "About",
  },
  {
    url: "/brand",
    label: "Brand",
  },
  {
    url: "/case-study",
    label: "Case Study",
  },
  {
    url: "/contact",
    label: "Contact",
  },
];

function SecondaryNav() {
  const path = usePathname();

  return (
    <div className="page-nav p-1 sm:p-2 flex whitespace-nowrap bottom-5 sm:bottom-8">
      {paths.map((p, ind) => (
        <Link
          key={ind}
          href={p.url}
          className={`page-btn py-1 sm:py-2 px-3 sm:px-4.5 sm:gap-0.5 ${p.url === path ? "active" : ""}`}
          id="btn-home"
        >
          {p.label}
        </Link>
      ))}
    </div>
  );
}

export default SecondaryNav;
