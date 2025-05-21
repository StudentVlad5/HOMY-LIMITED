import "./Balls.css";
const Balls = ({ numbers, setNumbers }) => {
  // Змінюємо isRemoving для забезпечення анімації зникнення м'яча
  const handleRemoveNumber = (id) => {
    setNumbers((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRemoving: true } : n))
    );
    // Видаляємо після затримки (анiмацiя)
    setTimeout(() => {
      setNumbers((prev) => prev.filter((n) => n.id !== id));
    }, 300); 
  };

  return (
    <div className="ballsContainer">
      {numbers.map((item, index) => (
        <div
          key={item.id}
          className={`ball ${item.isRemoving ? "removing" : ""}`}
          style={{
            backgroundColor: item.color,
            animationDelay: `${index * 0.1}s`,
          }}
          onClick={() => handleRemoveNumber(item.id)}
          title="Натисніть, щоб видалити"
        >
          {item.value}
        </div>
      ))}
    </div>
  );
};

export default Balls;
