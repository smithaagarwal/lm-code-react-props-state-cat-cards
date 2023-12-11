import { useState } from "react";
import Dog from "../data/dog";
import Name from "./name";
import Species from "./species";
import FavFoods from "./fav_foods";
import BirthYear from "./birth_year";
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
    <div>
      <h3 className="form__title">Enter the details of the Dog:</h3>
      <form onSubmit={handleSubmit}>
        <Name name={name} setName={setName} />
        <Species species={species} setSpecies={setSpecies} />
        <FavFoods favFoods={favFoods} setFavFoods={setFavFoods} />
        <BirthYear birthYear={birthYear} setBirthYear={setBirthYear} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDog;
