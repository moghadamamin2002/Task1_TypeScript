import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShowUser, { Todo } from "./components/ShowUser";

import User from "./components/User";
import Display from "./components/Display";
import Login from "./components/Login";

function App() {
  const [data, setData] = useState<Todo[]>([]);

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
        <Route path="/" element={<Login/>} />
        <Route path="display" element={<Display />}>
          <Route path="user" element={<User data={data} />} />
          <Route path="showUser" element={<ShowUser data={data} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
