import Dog from "../data/dog";
interface DogCardProps {
  dogObject: Dog;
  dogIndex: number;
}
const DogCard: React.FC<DogCardProps> = ({dogObject, dogIndex}) => {
  const { name, species, favFoods, birthYear } = dogObject;
  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">{species}</p>
      <p className="card__text">{favFoods}</p>
      <p className="card__text">{birthYear}</p>
    </div>
  );
};

export default DogCard;
