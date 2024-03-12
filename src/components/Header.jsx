import "../styles/Header.css";

const Header = () => {
  return (
    <div className="flex items-center py-4 px-5 gap-x-2">
      <ion-icon name="book-outline"></ion-icon>
      <h1 className="anta-regular">Tutorials-To-Do</h1>
    </div>
  );
};

export default Header;
