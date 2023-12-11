import React from "react";

interface NameProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}
const Name: React.FC<NameProps> = ({ name, setName }) => {
  return (
    <>
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
    </>
  );
};

export default Name;
