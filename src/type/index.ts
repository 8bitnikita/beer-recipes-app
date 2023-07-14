export interface IRecipe {
  id: number;
  name: string;
  description: string;
  image_url: string;
  brewers_tips: string;
}

export interface ISelectedRecipe {
  name: string;
  description: string;
  image_url: string;
  brewers_tips: string;
}

export interface IState {
  beerRecipes: IRecipe[];
  selectedRecipe: ISelectedRecipe;
  addBeerRecipes: (newBeerRecipes: IRecipe[]) => void;
  removeBeerRecipe: (beerId: number) => void;
  showRecipe: (
    name: string,
    description: string,
    image_url: string,
    brewers_tips: string
  ) => void;
}
