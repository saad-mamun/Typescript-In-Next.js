import { FC } from "react";


type Shape = {
    name: string;
    age: number;
}

const MyFC: FC <Shape> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default MyFC
