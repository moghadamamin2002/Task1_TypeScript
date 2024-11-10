import { ReactNode } from "react";

interface Props {
  nameClicker: ReactNode;
  handleClick: () => void;
}
const Button = ({ nameClicker, handleClick }: Props) => {
  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        {nameClicker}
      </button>
    </>
  );
};

export default Button;
