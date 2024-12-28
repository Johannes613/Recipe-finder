import { useContext } from "react";
import { GlobalContext } from "../../Components/GlobalContext";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const { recipeList, loading, count } = useContext(GlobalContext);

  return (
    <div className="home">
      {!count && (
        <p className="first-message">
          Search for any food (like apple, pizza, mango), and we'll provide a tasty recipe!
        </p>
      )}
      {loading ? (
        <p className="loading-message">Loading...Please Wait</p>
      ) : (
        count > 0 &&
        (recipeList && recipeList.length > 0 ? (
          recipeList.map((recipe) => (
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
          <p>
            We didn't find anything matching your search. Give it another try!
          </p>
        ))
       
      )}
      
    </div>
  );
};

export default Home;
