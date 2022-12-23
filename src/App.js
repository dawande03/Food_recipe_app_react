import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import axios from "axios";
function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipe] = useState([]);

  const APP_ID = "45c22660";
  const APP_KEY = "ad7437c8b315e73dea9452398933701d";

  useEffect(() => {
    loadApi();
  }, []);

  const loadApi = async () => {
    const res = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipe(res.data.hits);
    console.log(res);
  };

  const onInptChange = (event) => {
    setSearch(event.target.value);
  };

  const onSearch = () => {
    loadApi();
  };
  return (
    <div>
      <Header search={search} onInptChange={onInptChange} onSearch={onSearch} />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
