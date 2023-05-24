import classNames from "classnames";
import { GROUP_COUNT } from "@/constants";
import GroupItem from "@/components/GroupItem";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import LabelIcon from "./label.svg";

const textbookGroups = Array.from(Array(GROUP_COUNT), (_, index) => ({
  group: index,
  color: `text-group-${index + 1}`,
}));

const TextbookGroupsPagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentGroup = searchParams.get("group");
  const currentPage = searchParams.get("page");

  const handleGroupClick = (group: number) => {
    /* navigate(clientRoutes.textbook.words.relative(page, group)); */
    router.push(`textbook?page=${currentPage}&group=${group}`);
  };

  const handleHardWords = () => {
    /* navigate("user-words"); */
  };

  return (
    <div className="flex flex-col gap-y-1 overflow-hidden px-1 py-1">
      {textbookGroups.map(({ group, color }) => (
        <Link
          href={`textbook?page=${currentPage}&group=${group}`}
          key={group}
          className={classNames(
            "relative flex h-14 flex-grow flex-col items-center justify-end gap-x-1 rounded-lg bg-section-dark py-1 pb-1",
            {
              "outline outline-1 outline-highlite":
                Number(currentGroup) === group,
            }
          )}
        >
          <LabelIcon
            className={classNames(
              "absolute -top-0.5 left-2/4 h-6 w-6 -translate-x-2/4",
              /* color */ {
                "text-group-1": group === 0,
                "text-group-2": group === 1,
                "text-group-3": group === 2,
                "text-group-4": group === 3,
                "text-group-5": group === 4,
                "text-group-6": group === 5,
              }
            )}
          />
          <span className="text-lg text-gray-200">{`Глава ${
            Number(group) + 1
          }`}</span>
        </Link>
      ))}

      <button
        className={classNames(
          "relative flex h-16 flex-col items-center justify-end gap-x-1 rounded-lg bg-section-dark py-1",
          {
            "outline outline-1 outline-highlite": false,
          }
        )}
        onClick={handleHardWords}
      >
        <span className="text-lg text-gray-200">{`Сложные слова`}</span>
      </button>
    </div>
  );
};

export default TextbookGroupsPagination;
