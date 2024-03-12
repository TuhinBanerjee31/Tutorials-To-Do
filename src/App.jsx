import "./App.css";
import BookForm from "./components/BookForm";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <BookForm />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
