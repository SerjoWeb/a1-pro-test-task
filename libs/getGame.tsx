export default async function getGame(providerOrCategory: string, seo_title: string): Promise<Game> {
  const res = await fetch("https://nextjs-test-pi-hazel-56.vercel.app/data/games.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const games = await res.json();
  const game : Game = games.find((game: Game) => 
    (game.provider === providerOrCategory || game.categories.includes(providerOrCategory)) && game.seo_title === seo_title
  );

  return game;
};
