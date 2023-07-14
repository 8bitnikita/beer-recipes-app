import { create } from "zustand";

import { IRecipe, IState } from "../type";

const useBeerRecipesStore = create<IState>((set) => ({
  beerRecipes: [],
  selectedRecipe: {
    name: "",
    description: "",
    image_url: "",
    brewers_tips: "",
  },
  addBeerRecipes: (newBeerRecipes: IRecipe[]) =>
    set(() => ({
      beerRecipes: newBeerRecipes,
    })),
  removeBeerRecipe: (beerId: number) =>
    set((state) => ({
      beerRecipes: state.beerRecipes.filter(
        (item: IRecipe) => item.id !== beerId
      ),
    })),
  showRecipe: (
    name: string,
    description: string,
    image_url: string,
    brewers_tips: string
  ) =>
    set((state) => ({
      selectedRecipe: { name, description, image_url, brewers_tips },
    })),
}));

export default useBeerRecipesStore;
