import { useContext } from "react";
import { GlobalContext } from "../../Components/GlobalContext";
import { Link } from "react-router-dom";

const Favourites = () => {
  const { favouritesList } = useContext(GlobalContext);
  return (
    <div className="favourites">
      {favouritesList.length == 0 && (
        <p className="first-message">
          Currently your favorites list is empty. Explore delicious recipes and
          add your top picks to see them here!
        </p>
      )}
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <img src={recipe.image_url} alt="" />
            <p>{recipe.publisher}</p>
            <h3>{recipe.title}</h3>
            <Link className="to-details" to={`/recipe-item/${recipe.id}`}>
              Recipe Details
            </Link>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Favourites;
