import { useState } from "react";
import Dog from "../data/dog";
interface AddDogProps {
  dogs: Dog[];
  setDogs: React.Dispatch<React.SetStateAction<Array<Dog>>>;
}

const AddDog: React.FC<AddDogProps> = ({ dogs, setDogs }) => {
  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [favFoods, setFavFoods] = useState<Array<string>>([]);
  const [birthYear, setBirthYear] = useState<number>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (birthYear)
      setDogs([
        ...dogs,
        {
          name: name,
          species: species,
          favFoods: favFoods,
          birthYear: birthYear,
        },
      ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="card__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label className="card__text" htmlFor="species">
        Species:
      </label>
      <input
        type="text"
        id="species"
        name="species"
        value={species}
        onChange={(event) => {
          setSpecies(event.target.value);
        }}
      />

      <label className="card__text" htmlFor="favFoods">
        Fav food:
      </label>
      <input
        type="text"
        id="favFoods"
        name="favFoods"
        value={favFoods}
        onChange={(event) => {
          setFavFoods(event.target.value.split(","));
        }}
      />

      <label className="card__text" htmlFor="birthYear">
        Birth Year:
      </label>
      <input
        type="text"
        id="birthYear"
        name="birthYear"
        value={birthYear || ""}
        onChange={(event) => {
          setBirthYear(parseInt(event.target.value, 10));
        }}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddDog;
