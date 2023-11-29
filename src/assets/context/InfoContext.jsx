import { createContext, useState } from "react";

export const InfoContext = createContext()

export function InfoProvider({ children }) {
  const [isActive, setIsActive] = useState(false)

  const toggleInfo = () => {
    setIsActive(!isActive)
  }

  return (
    <InfoContext.Provider value={{ isActive, toggleInfo }}>
      {children}
    </InfoContext.Provider>
  )
}