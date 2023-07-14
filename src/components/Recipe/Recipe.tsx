import useBeerRecipesStore from "../../store/store";
import { IState } from "../../type";

import styles from "./Recipe.module.css";

export default function Recipe() {
  const selectedRecipe = useBeerRecipesStore(
    (state: IState) => state.selectedRecipe
  );

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img} src={selectedRecipe.image_url} />
      </div>
      <div className={styles.info}>
        <h2>{selectedRecipe.name}</h2>
        <p>{selectedRecipe.description}</p>
        <p>{selectedRecipe.brewers_tips}</p>
      </div>
    </div>
  );
}
