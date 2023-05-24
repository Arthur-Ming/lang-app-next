import WordTickets from "@/components/WordTickets";

async function getData(url: string) {
  const res = await fetch(url);
  console.log("getData");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export const apiRoutes = {
  root: "http://localhost:8000",

  files: (file: string) => `${apiRoutes.root}/${file}`,
  words: (page: number | string, group: number | string) =>
    `${apiRoutes.root}/words?page=${page}&group=${group}`,
  usersWords: (userId: string) => `${apiRoutes.root}/users/${userId}/words`,
  usersWordsById: (userId: string, wordId: string) =>
    `${apiRoutes.root}/users/${userId}/words/${wordId}`,
  usersAggregatedWords: (userId: string) =>
    `${apiRoutes.root}/users/${userId}/aggregatedWords?filter={"$or":[{"userWord.difficulty":"easy"},{"userWord.difficulty":"hard"}]}`,

  signin: () => `${apiRoutes.root}/signin`,
  userById: (userId: string) => `${apiRoutes.root}/users/${userId}`,
};

const Textbook = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page = "", group = "" } = searchParams;
  const words = await getData(apiRoutes.words(page, group));

  return <>{words && <WordTickets words={words} />}</>;
};

export default Textbook;
