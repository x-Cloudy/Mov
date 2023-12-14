import { createContext, useState } from "react";

export const wordContext = createContext()

export function WordProvider({ children }) {
  const [words, setWords] = useState('')

  const toggleWord = (word) => {
    setWords(word)
  }

  return (
    <wordContext.Provider value={{ words, toggleWord }}>
      {children}
    </wordContext.Provider>
  )
}