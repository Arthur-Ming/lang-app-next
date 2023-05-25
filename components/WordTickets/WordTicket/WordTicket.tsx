"use client";
import LabelIcon from "./label.svg";
import WordTicketAudio from "./WordTicketAudio";
/* import { useNavigate } from "react-router"; */
import classNames from "classnames";
import { IWord } from "@/types";
import Image from "next/image";
/* import { apiRoutes } from "@/utils/apiRoutes";
import WordChosen from "@pages/Textbook/WordChosen"; */

export const apiRoutes = {
  root: "http://localhost:8000",

  files: (file: string) => `${apiRoutes.root}/${file}`,
  words: (page: number, group: number) =>
    `${apiRoutes.root}/words?page=${page}&group=${group}`,
  usersWords: (userId: string) => `${apiRoutes.root}/users/${userId}/words`,
  usersWordsById: (userId: string, wordId: string) =>
    `${apiRoutes.root}/users/${userId}/words/${wordId}`,
  usersAggregatedWords: (userId: string) =>
    `${apiRoutes.root}/users/${userId}/aggregatedWords?filter={"$or":[{"userWord.difficulty":"easy"},{"userWord.difficulty":"hard"}]}`,

  signin: () => `${apiRoutes.root}/signin`,
  userById: (userId: string) => `${apiRoutes.root}/users/${userId}`,
};

type Props = {
  word: IWord;
};

const WordTicket = ({ word }: Props) => {
  const {
    id: wordId,
    word: wordText,
    image,
    transcription,
    wordTranslate,
    audio,
    group,
  } = word;
  /*  const navigate = useNavigate(); */

  return (
    <div
      className="relative flex h-14 items-center justify-between gap-x-14 rounded-lg bg-section-dark pr-16"
      /*  onClick={() => navigate(wordId)} */
    >
      <div className="flex items-center gap-x-10">
        <div className="h-14 overflow-hidden rounded-md">
          <Image
            src={apiRoutes.files(image)}
            alt={wordText}
            width={100}
            height={64}
          />
        </div>
        <h3 className="text-2xl text-gray-200">{`${wordText} - ${transcription} - ${wordTranslate}`}</h3>
      </div>

      <div className="flex items-center gap-x-7">
        {/*   <WordChosen word={word} />
        <WordTicketAudio wordId={wordId} audio={audio} /> */}
      </div>
      <LabelIcon
        className={classNames("absolute -top-1 right-5 h-6 w-6", {
          "text-group-1": group === 0,
          "text-group-2": group === 1,
          "text-group-3": group === 2,
          "text-group-4": group === 3,
          "text-group-5": group === 4,
          "text-group-6": group === 5,
        })}
      />
    </div>
  );
};

export default WordTicket;
