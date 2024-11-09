import Button from "./Button";
import { Outlet, useNavigate } from "react-router-dom";
export interface Todo {
    userId : number
    id : number
    title : string
    completed : boolean
}
interface Props{
    data : Todo[]
}

const Display = ({ data } : Props) => {
  console.log("Display : " + data);
  console.log("type of data :" + Array.isArray(data));

  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
        <Button
          handleClick={() => {
            navigate("/user");
          }}
          nameClicker={<h4 className="bg-primary">ALL</h4>}
        />
        <Button
          handleClick={() => {
            navigate("/showUser");
          }}
          nameClicker={<h4 className="bg-primary">One By One</h4>}
        />
      </nav>
      <Outlet />
    </>
  );
};


export default Display;
