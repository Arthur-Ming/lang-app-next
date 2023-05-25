import TextbookPagesPagination from "../TextbookPagesPagination";
import classNames from "classnames";

const TextbookFooter = () => {
  return (
    <div
      className={classNames("container flex justify-end pb-8 pt-5", {
        invisible: false,
      })}
    >
      <TextbookPagesPagination />
    </div>
  );
};

export default TextbookFooter;
