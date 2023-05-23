"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    link: "/textbook",
    title: "textbook",
    /*  icon: TextbookIcon, */
  },
  {
    link: "/games",
    title: "games",
    /*  icon: GamesIcon, */
  },
  {
    link: "/statistics",
    title: "statistics",
    /* icon: StatisticsIcon, */
  },
];

const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-10">
        {links.map(({ link, title }) => (
          <li key={link}>
            <Link
              href={link}
              className={classNames(
                "relative flex gap-x-2 duration-200 ease-linear hover:opacity-80",
                {
                  "text-gray-200": !(pathName === link),
                  'text-gray-100 after:absolute after:top-8 after:h-0.5 after:w-full after:bg-highlite after:content-[""]':
                    pathName === link,
                }
              )}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
