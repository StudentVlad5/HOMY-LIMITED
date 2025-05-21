import { useEffect, useState } from "react";
import "./ChartBox.css";

const ChartBox = ({ numbers }) => {
  const [averege, setAverage] = useState("");
  const [minNum, setMinNum] = useState("");
  const [maxNum, setMaxNum] = useState("");

  useEffect(() => {
    if (numbers && numbers.length > 0) {
      const dataToNumber = numbers.map((n) => Number(n.value));
      const total = dataToNumber.reduce((sum, n) => sum + n, 0);
      const avg = Math.round((total / dataToNumber.length) * 100) / 100;

      setAverage(avg);
      setMinNum(Math.min(...dataToNumber));
      setMaxNum(Math.max(...dataToNumber));
    }
  }, [numbers]);

  return (
    <div className="chartBoxContainer">
      <ul>
        <li>
          Середнє: <span className="param">{averege}</span>
        </li>
        <li>
          Min: <span className="param">{minNum}</span>
        </li>
        <li>
          Max: <span className="param">{maxNum}</span>
        </li>
      </ul>
    </div>
  );
};

export default ChartBox;
