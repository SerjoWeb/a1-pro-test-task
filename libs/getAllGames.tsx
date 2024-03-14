export default async function getGames(): Promise<Game[]> {
  const res = await fetch("https://nextjs-test-pi-hazel-56.vercel.app/data/games.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return await res.json();
};
