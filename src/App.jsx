import { useEffect, useState } from "react";
import "./App.css";
import BookForm from "./components/BookForm";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PreLoader from "./components/PreLoader";

function App() {
  const [loaderState, setLoaderState] = useState(true);

  useEffect(() => {
    const loaderTimer = () => {
      setTimeout(() => {
        setLoaderState(false);
      }, 3000);
    };

    loaderTimer();
  }, []);

  return loaderState ? (
    <PreLoader />
  ) : (
    <div>
      <Header />
      <BookForm />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
