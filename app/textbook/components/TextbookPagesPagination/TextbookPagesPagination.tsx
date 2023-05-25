"use client";
import ReactPaginate from "react-paginate";
import classNames from "classnames";
import ArrowPrev from "./prev.svg";
import ArrowNext from "./next.svg";
import { PAGE_COUNT } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";

const TextbookPagesPagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentGroup = searchParams.get("group");
  const currentPage = searchParams.get("page");

  const handlePageClick = ({ selected }: { selected: number }) => {
    router.push(`textbook?page=${selected}&group=${currentGroup}`);
  };

  return (
    <div
      className={classNames("bg-main-dark", {
        "opacity-50": false,
        invisible: false,
      })}
    >
      <ReactPaginate
        nextLabel={<ArrowNext className="w-7 h-7" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        forcePage={Number(currentPage)}
        pageCount={PAGE_COUNT}
        previousLabel={<ArrowPrev className="w-7 h-7" />}
        disableInitialCallback={true}
        pageClassName="w-12 bg-section-dark rounded opacity-80 hover:opacity-100"
        pageLinkClassName="flex justify-center cursor-pointer text-lg text-gray-200"
        previousClassName="w-12 rounded opacity-70 hover:opacity-100"
        previousLinkClassName="flex justify-center cursor-pointer text-lg text-gray-200"
        nextClassName="w-12 rounded opacity-70 hover:opacity-100"
        nextLinkClassName="flex justify-center cursor-pointer text-lg text-gray-200"
        breakLabel="..."
        breakClassName="w-12 bg-section-dark rounded opacity-80 hover:opacity-100"
        breakLinkClassName="flex justify-center cursor-pointer text-lg text-gray-200"
        containerClassName="flex gap-x-1"
        activeClassName="outline opacity-100 outline-2 outline-highlite"
        disabledClassName=""
      />
    </div>
  );
};

export default TextbookPagesPagination;
