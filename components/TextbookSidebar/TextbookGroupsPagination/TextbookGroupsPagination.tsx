import classNames from "classnames";
import { GROUP_COUNT } from "@/constants";
import GroupItem from "@/components/GroupItem";
import { useSearchParams, useRouter } from "next/navigation";

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
        <GroupItem
          key={group}
          onSelect={handleGroupClick}
          group={group}
          selectedGroup={Number(currentGroup)}
        />
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
