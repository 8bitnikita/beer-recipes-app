import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import useBeerRecipesStore from "./store/store";
import { IRecipe, IState } from "./type";

import "./App.css";

export default function App() {
  const beerRecipes = useBeerRecipesStore((state: IState) => state.beerRecipes);
  const addBeerRecipes = useBeerRecipesStore(
    (state: IState) => state.addBeerRecipes
  );
  const removeBeerRecipe = useBeerRecipesStore(
    (state: IState) => state.removeBeerRecipe
  );
  const showRecipe = useBeerRecipesStore((state: IState) => state.showRecipe);

  const [deleteButtons, setDeleteButtons] = useState<Record<number, boolean>>(
    {}
  );

  const toggleDeleteButton = (beerId: number) => {
    setDeleteButtons((prevButtons) => ({
      ...prevButtons,
      [beerId]: !prevButtons[beerId],
    }));
  };

  const deleteBeerRecipe = (beerId: number) => {
    removeBeerRecipe(beerId);
  };

  useEffect(() => {
    const getAllBeerRecipes = async () => {
      const response = await axios.get(
        "https://api.punkapi.com/v2/beers?page=1"
      );

      addBeerRecipes(response.data);
    };

    getAllBeerRecipes();
  }, []);

  const showBeerRecipe = (
    name: string,
    description: string,
    image_url: string,
    brewers_tips: string
  ) => {
    showRecipe(name, description, image_url, brewers_tips);
  };

  return (
    <div className="App">
      {beerRecipes.slice(0, 15).map((item: IRecipe) => (
        <div key={item.id} className="recipe">
          <Link to={"/recipes/" + item.id}>
            <p
              className="title"
              onContextMenu={() => toggleDeleteButton(item.id)}
              onClick={() =>
                showBeerRecipe(
                  item.name,
                  item.description,
                  item.image_url,
                  item.brewers_tips
                )
              }
            >
              {item.name}
            </p>
          </Link>
          {deleteButtons[item.id] && (
            <button onClick={() => deleteBeerRecipe(item.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}
