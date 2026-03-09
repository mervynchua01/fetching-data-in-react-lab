function StarshipCard({ starship }) {
  return (
    <li>
      <h3>{starship.name}</h3>
      <p>Class: {starship.starship_class}</p>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
    </li>
  );
}

export default StarshipCard;
