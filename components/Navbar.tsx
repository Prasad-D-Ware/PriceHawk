//Navbar Component

import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];
const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src={"/assets/icons/logo.svg"}
            width={27}
            height={27}
            alt="logo"
          ></Image>
          <p className="nav-logo">
            Price<span className="text-primary">Hawk</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => {
            return (
              <Image
                alt={icon.alt}
                src={icon.src}
                key={icon.alt}
                height={28}
                width={28}
                className="object-contain"
              />
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
