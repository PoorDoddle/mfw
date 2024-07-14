import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
function App() {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const url =
    "https://exercise-db-fitness-workout-gym.p.rapidapi.com/exercises/filter";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "246b7e0ab4mshb36b02db9a84c27p139d25jsn3cd8a341b108",
      "x-rapidapi-host": "exercise-db-fitness-workout-gym.p.rapidapi.com",
    },
  };
  React.useEffect(() => {
    const fetchMuscles = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e);
        console.log(error);
      }
    };
    fetchMuscles();
  });
  return <>{data && <SearchBar data={data} />}</>;
}

export default App;
