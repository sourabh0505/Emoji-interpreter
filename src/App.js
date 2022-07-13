import React, { useState } from "react";
import "./styles.css";

var emojidictionary = {
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🎾": "Tennis",
  "🥏": "Flying Disc",
  "🎳": "Bowling",
  "🏏": "Cricket Game",
  "🏑": "Field Hockey",
  "🏓": "Ping Pong",
  "🏸": "Badminton",
  "🥊": "Boxing Glove",
  "🎯": "Bullseye",
  "🎮": "Video Game",
  "🧩": "Puzzle Piece",
  "♟️": "Chess Pawn"
};

var nameList = [
  "⚽",
  "⚾",
  "🥎",
  "🏀",
  "🏐",
  "🏈",
  "🏉",
  "🎾",
  "🥏",
  "🎳",
  "🏏",
  "🏑",
  "🏓",
  "🏸",
  "🥊",
  "🎯",
  "🎮",
  "🧩",
  "♟️"
];

export default function App() {
  var Color = "red";

  const [meaning, setMeaningOfTheEmoji] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojidictionary[userInput];

    if (meaning === undefined) {
      meaning = "It is not available in our DB";
    }
    setMeaningOfTheEmoji(meaning);
  }

  function emojiclickHandler(item) {
    var meaning = emojidictionary[item];
    setMeaningOfTheEmoji(meaning);
  }

  return (
    <div className="App">
      <h1>
        Emoji <span style={{ color: Color }}>interpreter</span>
      </h1>

      <input onChange={emojiHandler}></input>

      <h2> {meaning} </h2>

      <ul>
        {nameList.map((item) => {
          return <li onClick={() => emojiclickHandler(item)}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
