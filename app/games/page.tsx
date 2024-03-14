import getGames from "@/libs/getAllGames";
import Link from "next/link";

export default async function Games() {
  const gamesData: Promise<Game[]> = getGames();
  const games = await gamesData;

  return (
    <div>
      <div className="w-full border-b border-gray-700 pb-5">
        <Link href="/" className="text-xl transition-all duration-500 hover:opacity-75">
          Back home
        </Link>
      </div>

      <div className="w-full mt-5 flex flex-col gap-y-1">
        {games.map((game: Game) => game.categories.map((category: string) => (
          <Link
            key={game.identifier}
            href={`/games/${game.provider || category}/${game.seo_title}`}
            className="p-5 border border-gray-700 bg-gray-50 transition-all duration-500 hover:bg-gray-200"
          >
            {game.title} / {category}
          </Link>
        )))}
      </div>
    </div>
  );
};
