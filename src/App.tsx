import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Cat from "./data/cat";
import CatCard from "./components/cat_card";
import Dog from "./data/dog";
import { dogData } from "./data/dog-data";
import DogCard from "./components/dog_card";
import AddCat from "./components/add_cat";
import AddDog from "./components/add_dog";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!
  const [cats, setCats] = useState<Array<Cat>>([
    {
      name: "Little Miss Purrfect",
      species: "Cat",
      favFoods: ["wet food", "dry food"],
      birthYear: 2016,
    },
    {
      name: "Mr Gwumpy",
      species: "Cat",
      favFoods: ["caviar"],
      birthYear: 2016,
    },
    {
      name: "Dopey",
      species: "Cat",
      favFoods: ["bugs"],
      birthYear: 2018,
    },
    {
      name: "Jumpy",
      species: "Scaredy Cat",
      favFoods: ["not cucumbers!"],
      birthYear: 2008,
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
    },
    {
      name: "Cindy Clawford",
      species: "Cat",
      favFoods: ["mice"],
      birthYear: 2012,
    },
    {
      name: "Katy Purry",
      species: "Cat",
      favFoods: ["cigarettes", "coffee"],
      birthYear: 2015,
    },
    {
      name: "Dr. Von Belly-Rub",
      species: "Cat",
      favFoods: ["salt"],
      birthYear: 2020,
    },
    {
      name: "Blobby",
      species: "Bird?",
      favFoods: ["your soul"],
      birthYear: 2020,
    },
    {
      name: "El Taco",
      species: "Cat",
      favFoods: ["tequila", "bar snax"],
      birthYear: 1995,
    },
    {
      name: "Nibbles",
      species: "Hungry Cat",
      favFoods: ["blankets", "feet", "tinsel"],
      birthYear: 2003,
    },
    {
      name: "BoopySnoot",
      species: "Tiny Cat",
      favFoods: ["milk"],
      birthYear: 2021,
    },
    {
      name: "Captain Catface",
      species: "Sea Cattain",
      favFoods: ["fish, rum"],
      birthYear: 2016,
    },
  ]);

  let numOfCats = cats.length;
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);
  let numOfDogs = dogs.length;

  console.log("Our pretties 😻: ", cats);
  return (
    <>
      <Navbar />
      <AddCat cats={cats} setCats={setCats} />
      <AddDog dogs={dogs} setDogs={setDogs} />
      <Header numOfCats={numOfCats} numOfDogs={numOfDogs} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard key={index} catObject={cat} catIndex={index} />
          ))}
        </div>
        <div className="cards__wrapper">
          {dogs.map((dog, index) => (
            <DogCard key={index} dogObject={dog} dogIndex={index} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
