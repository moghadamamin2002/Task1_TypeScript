import Button from "./Button";
import { Outlet, useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
        <Button
          handleClick={() => {
            navigate("user");
          }}
          nameClicker={<h4 className="bg-primary">ALL</h4>}
        />
        <Button
          handleClick={() => {
            navigate("showUser");
          }}
          nameClicker={<h4 className="bg-primary">One By One</h4>}
        />
      </nav>
      <Outlet />
    </>
  );
};

export default Display;
