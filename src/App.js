import "./styles.css";
import { useState } from "react";

export default function App() {
  const [meaning, setMeaning] = useState("");

  const changeHandler = (e) => {
    const userInput = e.target.value;
    checkMeaning(userInput);
  };

  const primaryTextColor = "#059669";

  const plantDictionary = {
    "🌴": "Palm Tree",
    "🌵": "Cactus",
    "🌾": "Sheaf of Rice",
    "🍄": "Mushroom",
    "🍁": "Maple Leaf",
    "🌿": "Herb",
    "☘️": "Shamrock",
    "🌷": "Tulip",
    "🌳": "Deciduous Tree",
    "🌺": " Hibiscus"
  };

  const allEmoji = Object.keys(plantDictionary);

  const checkMeaning = (input) => {
    if (input in plantDictionary) {
      const meaning = plantDictionary[input];
      setMeaning(meaning);
    } else {
      setMeaning("Sorry! Not found!");
    }
  };

  const emojiClickHandler = (emoji) => {
    const meaning = plantDictionary[emoji];
    setMeaning(meaning);
  };

  return (
    <div
      className="App"
      style={{
        height: 600,
        paddingTop: 50,
        justifyContent: "center",
        alignItem: "center",
        alignContent: "center"
      }}
    >
      <h1 style={{ color: primaryTextColor }}>Plant interpretor</h1>
      <input
        style={{
          fontSize: "1.2rem",
          padding: "1rem",
          borderRadius: "10px",
          margin: "2rem"
        }}
        onChange={changeHandler}
      />
      <div
        style={{
          color: primaryTextColor,
          margin: 30,
          fontSize: "1.5rem",
          fontWeight: "bold"
        }}
      >
        {meaning}
      </div>

      <h3
        style={{
          color: primaryTextColor,
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}
      >
        Emojis we know
      </h3>
      <div
        style={{
          width: 400,
          margin: "auto"
        }}
      >
        {allEmoji.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "1rem",
                cursor: "pointer",
                display: "inline-block"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
