import StarshipCard from "../StarshipCard/StarshipCard";

function StarshipList({ starships }) {
  
  if (!starships.length) return <p>Loading...</p>
 ; 
  return (
    <section>
      <ul>
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </ul>
    </section>
  );
}

export default StarshipList;
