import { Children, createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState(
    JSON.parse(localStorage.getItem("fav-list")) || []
  );

  useEffect(() => {
    localStorage.setItem("fav-list", JSON.stringify(favouritesList));
  }, [favouritesList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    setLoading(true);
    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchValue}&key=e7bcaaec-364b-4b22-a5e2-11b1a2c682ba`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setRecipeList(res.data.recipes);
        setLoading(false);
        setSearchValue("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFavourites = (currentItem) => {
    const cpList = [...favouritesList];
    const index = cpList.findIndex((item) => item.id === currentItem.id);
    if (index == -1) {
      cpList.push(currentItem);
    } else {
      cpList.splice(index, 1);
    }
    setFavouritesList(cpList);
  };
  return (
    <div className="global-context">
      <GlobalContext.Provider
        value={{
          searchValue,
          setSearchValue,
          handleSubmit,
          recipeList,
          loading,
          count,
          recipeDetailsData,
          setRecipeDetailsData,
          favouritesList,
          setFavouritesList,
          handleFavourites,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalState;
