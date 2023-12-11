import React from "react";

interface FavFoodsProps {
  favFoods: Array<string>;
  setFavFoods: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const FavFoods: React.FC<FavFoodsProps> = ({ favFoods, setFavFoods }) => {
  return (
    <>
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
    </>
  );
};

export default FavFoods;
