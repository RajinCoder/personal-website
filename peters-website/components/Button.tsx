import React from "react";

interface Props {
  name: string;
  styling: string;
}
const Button = ({ name, styling }: Props) => {
  return <button className={styling}>{name}</button>;
};

export default Button;
