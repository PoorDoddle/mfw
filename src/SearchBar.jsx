import { useEffect, useState } from "react";
import "./SearchBar.css";
import { v4 } from "uuid";
import { jsx } from "react/jsx-runtime";
export default function SearchBar({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [exercise, setExercise] = useState([]);
  const [isSearch, setIsSearch] = useState(true);
  const upData = data.filter((d) => {
    if (searchTerm == "") {
      return d;
    } else if (d.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return d.name;
    }
  });
  const dUpData = upData.filter((item, idx) => idx < 9);
  const handleClick = (d) => {
    //setIsSearch(false);

    setExercise((prevEx) => {
      return [...prevEx, d];
    });
  };
  const handleSearchBox = () => {
    setIsSearch(true);
  };
  const handleDlt = (index) => {
    setExercise((prevEx) => {
      return prevEx.filter((_, i) => i !== index);
    });
  };
  useEffect(() => {
    const exData = window.localStorage.getItem("EXERCISE_LIST");
    {
      exData && setExercise(JSON.parse(exData));
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("EXERCISE_LIST", JSON.stringify(exercise));
  }, [exercise]);
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center flex-col w-1/3 h-full mt-4">
        <input
          className="border-2 border-solid border-cyan-400 rounded-lg w-full h-6 bg-transparent text-white "
          onClick={handleSearchBox}
          type="text"
          name="search"
          id=""
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {isSearch &&
          dUpData.map((d) => {
            return (
              <div
                key={v4()}
                id={v4()}
                onClick={() => {
                  handleClick(d.name);
                }}
                className="border-2 border-solid rounded-lg border-cyan-400 w-full cursor-pointer h-15"
              >
                <h3 className="cursor-pointer m-4">{d.name}</h3>
              </div>
            );
          })}
      </div>
      <div className="flex">
        <ul className="mt-4">
          {exercise.map((e, index) => {
            return (
              <li
                key={v4()}
                id={v4()}
                className="flex justify-between items-center w-120 border-2 border-solid border-cyan-400 rounded-lg"
              >
                <h4 className="w-48 m-2 cursor-default">{e}</h4>
                <div>
                  <input
                    type="text"
                    name="reps"
                    className="w-7 h-6 ml-4 bg-transparent text-white border-2 border-solid border-cyan-400 rounded-lh"
                  />
                  &nbsp;reps for &nbsp;
                  <input
                    type="text"
                    name="sets"
                    className="w-7 h-6 bg-transparent text-white border-2 border-solid border-cyan-400 rounded-lh"
                  />
                  &nbsp;sets&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={() => handleDlt(index)}
                    className="h-8 w-20 bg-transparent text-white border-2 border-solid border-cyan-400 rounded-lg mr-4 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
