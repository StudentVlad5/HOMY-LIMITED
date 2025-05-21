import { useState } from "react";
import { randomChoiceColor } from "../../Services/randomChoiceColor";
import { colors } from "../../CONST/const";
import "./InputNumbers.css";

const InputNumbers = ({ inputValue, setInputValue, setNumbers, numbers }) => {
  const [message, setMessage] = useState(null);

  const handleChangeNumber = (option) => {
    setMessage(null);
    const trimmed = inputValue.trim();
    if (trimmed === "") {
      return setMessage("Не вказано дані");
    }
    const rawItems = trimmed.split(",").map((n) => n.trim());
    // Перевіряємо чи всі значення — числа
    const invalid = rawItems.filter((n) => !/^\d+$/.test(n));
    // Повідомляємо про помилку при внесені даних 
    if (invalid.length > 0) {
      setMessage(
        `Можена вказувати лише цифри, було вказано: ${invalid.join(", ")}`
      );
    }
    if (option === "add") {
      let newNumbers = rawItems
        .filter((n) => /^\d+$/.test(n))
        .map((n, ind) => ({
          value: n,
          color: randomChoiceColor(colors),
          id: Date.now() + Math.random() + ind,
          isRemoving: false,
        }));
      setNumbers((prev) => [...prev, ...newNumbers]);
    }
    if (option === "remove") {
      let newNumbers = [...numbers];
      const notFound = [];

      rawItems.forEach((valToRemove) => {
        const index = newNumbers.findIndex(
          (item) => item.value === valToRemove
        );
        if (index !== -1) {
          newNumbers.splice(index, 1); // remove first match

          setNumbers((prev) => {
            const updated = prev.map((item, idx) =>
              idx === index ? { ...item, isRemoving: true } : item
            );
            return updated;
          });
        } else {
          notFound.push(valToRemove);
        }
      });

      if (notFound.length > 0) {
        setMessage(`Відсутні значення для видалення: ${notFound.join(", ")}`);
      }
      setTimeout(() => setNumbers(newNumbers), 600);
    }
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleChangeNumber("add");
    }
  };

  return (
    <div className="inputContainer">
      <div className="inputGroup">
        <input
          type="text"
          placeholder="Наприклад: 1, 23, 45"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => handleChangeNumber("add")}>Додати</button>
        <button onClick={() => handleChangeNumber("remove")}>Видалити</button>
      </div>
      {message ? (
        <p className="message alarm">{message}</p>
      ) : (
        <p className="message warning">Натисніть на м'яч для видалення</p>
      )}
    </div>
  );
};

export default InputNumbers;
