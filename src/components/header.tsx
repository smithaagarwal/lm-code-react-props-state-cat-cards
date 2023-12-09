interface HeaderProps {
  numOfCats: number;
  numOfDogs: number;
}
const Header: React.FC<HeaderProps> = ({ numOfCats, numOfDogs }) => (
  <header className="header__container">
    <h1 className="header__title header__welcome">Welcome to React!</h1>
    <h2 className="header__title">
      There are currently {numOfCats} Cats and {numOfDogs} Dogs in this Pet App
    </h2>
  </header>
);

export default Header;
