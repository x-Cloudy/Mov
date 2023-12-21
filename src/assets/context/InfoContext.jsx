import { createContext, useState } from "react";

export const wordContext = createContext()

export function WordProvider({ children }) {
  const [words, setWords] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState(false);

  const toggleWord = (word) => {
    setWords(word)
  }

  const togglePlayer = (value) => {
    setCurrentPlayer(value)
  }

  return (
    <wordContext.Provider value={{ words, toggleWord, currentPlayer, togglePlayer }}>
      {children}
    </wordContext.Provider>
  )
}