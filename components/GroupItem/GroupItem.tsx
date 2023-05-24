import classNames from "classnames";
/* import { ReactComponent as LabelIcon } from './label.svg'; */

type Props = {
  group: number;
  selectedGroup?: number;
};

const GroupItem = ({ group, selectedGroup }: Props) => (
  <button
    className={classNames(
      "relative flex h-14 flex-grow flex-col items-center justify-end gap-x-1 rounded-lg bg-section-dark py-1 pb-1",
      {
        "outline outline-1 outline-highlite": Number(selectedGroup) === group,
      }
    )}
  >
    <span className="text-lg text-gray-200">{`Глава ${
      Number(group) + 1
    }`}</span>
  </button>
);

export default GroupItem;
