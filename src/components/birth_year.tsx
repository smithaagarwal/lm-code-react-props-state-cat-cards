import React from "react";

interface BirthYearProps {
  birthYear: number|undefined;
  setBirthYear: React.Dispatch<React.SetStateAction<number|undefined>>;
}

const BirthYear: React.FC<BirthYearProps> = ({ birthYear, setBirthYear }) => {
  return (
    <>
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
    </>
  );
};

export default BirthYear;
