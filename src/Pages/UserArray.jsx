import Balls from "../Components/Balls/Balls";
import ChartBox from "../Components/ChartBox/ChartBox";
import InputNumbers from "../Components/Input/InputNumbers";
import { useState } from "react";

function UserArray() {
  const [inputValue, setInputValue] = useState("");
  const [numbers, setNumbers] = useState([]);

  return (
    <div className="userArrayContainer">
      <h2>Введіть цифри (через кому):</h2>
      <InputNumbers
        inputValue={inputValue}
        setInputValue={setInputValue}
        setNumbers={setNumbers}
        numbers={numbers}
      />

      <Balls numbers={numbers} setNumbers={setNumbers} />
      <ChartBox numbers={numbers} />
    </div>
  );
}

export default UserArray;
