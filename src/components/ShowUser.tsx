import { useState } from "react";
import Button from "./Button";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  data: Todo[];
}

const ShowUser = ({ data }: Props) => {
  const [number, setNumber] = useState<number>(1);

  const Increase = () => {
    setNumber(number + 1);
  };
  const DecreaseNumber = () => {
    if (number < 2) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };
  console.log("number :" + number);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Title : {data.find((todo) => todo.id == number)?.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>
              Class User : {data.find((todo) => todo.id == number)?.userId}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>
              Condition :
              {data.find((todo) => todo.id == number)?.completed ? (
                <div style={{ color: "green" }}> Done</div>
              ) : (
                <div style={{ color: "red" }}>Not completed</div>
              )}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1> User {data.find((todo) => todo.id == number)?.id}</h1>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col justify-content-center">
          <Button
            nameClicker={<h1 className="bg-primary">Perv</h1>}
            handleClick={DecreaseNumber}
          />
        </div>
        <div className="col justify-content-center">
          <Button
            nameClicker={<h1 className="bg-primary">Next</h1>}
            handleClick={Increase}
          />
        </div>
      </div>
    </>
  );
};

export default ShowUser;
