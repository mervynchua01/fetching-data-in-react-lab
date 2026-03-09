async function index() {
  try {
    const res = await fetch("https://swapi.dev/api/starships/");

    if (!res.ok) {
      throw new Error("Failed to fetch starships.");
    }

    const data = await res.json(); 
    return data.results; 
  } catch (err) {
    console.error(err);
    return [];
  }
}

export { index };
