import getGame from "@/libs/getGame";
import Image from "next/image";
import Link from "next/link";

export default async function Game({ params: { providerOrCategory, seo_title }}: Params) {
  const gameData: Promise<Game> = getGame(providerOrCategory, seo_title);
  const game = await gameData;

  return(
    <div>
      <div className="w-full border-b border-gray-700 pb-5 flex items-center gap-x-2">
        <Link href="/" className="text-xl transition-all duration-500 hover:opacity-75">
          Home
        </Link>
        /
        <Link href="/games" className="text-xl transition-all duration-500 hover:opacity-75">
          Games
        </Link>
        /
        <p className="text-xl opacity-75">{game.title}</p>
      </div>

      <div className="w-full flex justify-start items-center gap-x-4 mt-5">
        <div className="h-[120px] w-[120px] aspect-square">
          <Image
            alt={game.title}
            about={game.title}
            src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`}
            height={120}
            width={120}
            className="h-full w-full aspect-square object-cover"
            priority
          />
        </div>

        <div className="flex-1 flex flex-col gap-y-2">
          <h1 className="text-xl font-semibold">Title: {game.title}</h1>

          <div>
            <p>Provider: {game.provider}</p>
            <p>Categories: {game.categories.map((category) => category).join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
