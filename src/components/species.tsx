import React from "react";

interface SpeciesProps {
  species: string;
  setSpecies: React.Dispatch<React.SetStateAction<string>>;
}

const Species: React.FC<SpeciesProps> = ({ species, setSpecies }) => {
  return (
    <>
      <label className="card__text" htmlFor="species">
        Species:
      </label>
      <input
        type="text"
        id="species"
        name="species"
        value={species}
        onChange={(event) => setSpecies(event.target.value)}
      />
    </>
  );
};

export default Species;
