"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TextbookIcon from "./textbook.svg";
import GamesIcon from "./games.svg";
import StatisticsIcon from "./statistics.svg";

const links = [
  {
    path: "/textbook",
    title: "textbook",
    icon: TextbookIcon,
  },
  {
    path: "/games",
    title: "games",
    icon: GamesIcon,
  },
  {
    path: "/statistics",
    title: "statistics",
    icon: StatisticsIcon,
  },
];

const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-10">
        {links.map(({ path, title, icon: Icon }) => (
          <li key={path}>
            <Link
              href={path}
              className={classNames(
                "relative flex gap-x-2 duration-200 ease-linear hover:opacity-80",
                {
                  "text-gray-200": !(pathName === path),
                  'text-gray-100 after:absolute after:top-8 after:h-0.5 after:w-full after:bg-highlite after:content-[""]':
                    pathName === path,
                }
              )}
            >
              <Icon className="h-8 w-8" />
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
