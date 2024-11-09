import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShowUser from "./components/ShowUser";

import User from "./components/User";
import Display from "./components/Display";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/todos";
    fetch(URL)
      .then((Response) => Response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Display data={data} />}>
          <Route path="user" element={<User data={data} />} />
          <Route path="showUser" element={<ShowUser data={data} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
